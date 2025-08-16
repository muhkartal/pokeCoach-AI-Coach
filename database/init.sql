

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";


CREATE TABLE IF NOT EXISTS rooms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_code VARCHAR(8) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'waiting' CHECK (status IN ('waiting', 'ready', 'battling', 'finished', 'cancelled')),
    max_players INTEGER DEFAULT 2 CHECK (max_players > 0),
    battle_settings JSONB DEFAULT '{}'::jsonb
);


CREATE TABLE IF NOT EXISTS players (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
    player_name VARCHAR(100) NOT NULL,
    player_status VARCHAR(20) DEFAULT 'waiting' CHECK (player_status IN ('waiting', 'ready', 'battling', 'disconnected')),
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    team_data JSONB DEFAULT '{}'::jsonb,
    connection_info JSONB DEFAULT '{}'::jsonb
);


CREATE TABLE IF NOT EXISTS battles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ended_at TIMESTAMP WITH TIME ZONE,
    winner_id UUID REFERENCES players(id),
    battle_log JSONB DEFAULT '{}'::jsonb,
    duration_seconds INTEGER,
    total_turns INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'finished', 'cancelled'))
);


CREATE TABLE IF NOT EXISTS game_statistics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    player_id UUID REFERENCES players(id) ON DELETE CASCADE UNIQUE,
    battles_won INTEGER DEFAULT 0 CHECK (battles_won >= 0),
    battles_lost INTEGER DEFAULT 0 CHECK (battles_lost >= 0),
    total_battles INTEGER DEFAULT 0 CHECK (total_battles >= 0),
    avg_battle_duration DECIMAL(10,2) DEFAULT 0.0,
    total_playtime_seconds INTEGER DEFAULT 0,
    favorite_pokemon JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS battle_turns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    battle_id UUID REFERENCES battles(id) ON DELETE CASCADE,
    turn_number INTEGER NOT NULL,
    player_id UUID REFERENCES players(id),
    action_type VARCHAR(50) NOT NULL,
    action_data JSONB NOT NULL,
    turn_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(battle_id, turn_number)
);


CREATE TABLE IF NOT EXISTS system_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    metric_name VARCHAR(100) NOT NULL,
    metric_value DECIMAL(15,4) NOT NULL,
    metric_tags JSONB DEFAULT '{}'::jsonb,
    recorded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE INDEX IF NOT EXISTS idx_rooms_room_code ON rooms(room_code);
CREATE INDEX IF NOT EXISTS idx_rooms_status ON rooms(status);
CREATE INDEX IF NOT EXISTS idx_rooms_created_at ON rooms(created_at);

CREATE INDEX IF NOT EXISTS idx_players_room_id ON players(room_id);
CREATE INDEX IF NOT EXISTS idx_players_status ON players(player_status);
CREATE INDEX IF NOT EXISTS idx_players_name_trgm ON players USING gin(player_name gin_trgm_ops);

CREATE INDEX IF NOT EXISTS idx_battles_room_id ON battles(room_id);
CREATE INDEX IF NOT EXISTS idx_battles_started_at ON battles(started_at);
CREATE INDEX IF NOT EXISTS idx_battles_winner ON battles(winner_id);
CREATE INDEX IF NOT EXISTS idx_battles_status ON battles(status);

CREATE INDEX IF NOT EXISTS idx_battle_turns_battle_id ON battle_turns(battle_id);
CREATE INDEX IF NOT EXISTS idx_battle_turns_turn_number ON battle_turns(battle_id, turn_number);

CREATE INDEX IF NOT EXISTS idx_system_metrics_name ON system_metrics(metric_name);
CREATE INDEX IF NOT EXISTS idx_system_metrics_recorded_at ON system_metrics(recorded_at);


CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';


DROP TRIGGER IF EXISTS update_rooms_updated_at ON rooms;
CREATE TRIGGER update_rooms_updated_at 
    BEFORE UPDATE ON rooms
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_game_statistics_updated_at ON game_statistics;
CREATE TRIGGER update_game_statistics_updated_at 
    BEFORE UPDATE ON game_statistics
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


CREATE OR REPLACE FUNCTION calculate_battle_duration()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.ended_at IS NOT NULL AND OLD.ended_at IS NULL THEN
        NEW.duration_seconds = EXTRACT(EPOCH FROM (NEW.ended_at - NEW.started_at))::INTEGER;
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';


DROP TRIGGER IF EXISTS calculate_battle_duration_trigger ON battles;
CREATE TRIGGER calculate_battle_duration_trigger
    BEFORE UPDATE ON battles
    FOR EACH ROW EXECUTE FUNCTION calculate_battle_duration();


CREATE OR REPLACE FUNCTION update_game_statistics_on_battle_end()
RETURNS TRIGGER AS $$
DECLARE
    battle_duration INTEGER;
    player_record RECORD;
BEGIN
    
    IF NEW.status = 'finished' AND (OLD.status IS NULL OR OLD.status != 'finished') THEN
        battle_duration := NEW.duration_seconds;
        

        FOR player_record IN 
            SELECT p.id as player_id
            FROM players p 
            WHERE p.room_id = NEW.room_id
        LOOP
            INSERT INTO game_statistics (player_id, battles_won, battles_lost, total_battles, total_playtime_seconds)
            VALUES (
                player_record.player_id,
                CASE WHEN player_record.player_id = NEW.winner_id THEN 1 ELSE 0 END,
                CASE WHEN player_record.player_id = NEW.winner_id THEN 0 ELSE 1 END,
                1,
                COALESCE(battle_duration, 0)
            )
            ON CONFLICT (player_id) DO UPDATE SET
                battles_won = game_statistics.battles_won + 
                    CASE WHEN player_record.player_id = NEW.winner_id THEN 1 ELSE 0 END,
                battles_lost = game_statistics.battles_lost + 
                    CASE WHEN player_record.player_id = NEW.winner_id THEN 0 ELSE 1 END,
                total_battles = game_statistics.total_battles + 1,
                total_playtime_seconds = game_statistics.total_playtime_seconds + COALESCE(battle_duration, 0),
                avg_battle_duration = (game_statistics.total_playtime_seconds + COALESCE(battle_duration, 0)) / 
                    (game_statistics.total_battles + 1),
                updated_at = CURRENT_TIMESTAMP;
        END LOOP;
    END IF;
    
    RETURN NEW;
END;
$$ language 'plpgsql';


DROP TRIGGER IF EXISTS update_game_statistics_on_battle_end_trigger ON battles;
CREATE TRIGGER update_game_statistics_on_battle_end_trigger
    AFTER UPDATE ON battles
    FOR EACH ROW EXECUTE FUNCTION update_game_statistics_on_battle_end();


CREATE OR REPLACE FUNCTION cleanup_old_data()
RETURNS void AS $$
BEGIN

    DELETE FROM battles 
    WHERE status = 'finished' 
    AND ended_at < CURRENT_TIMESTAMP - INTERVAL '30 days';
    

    DELETE FROM rooms 
    WHERE status IN ('finished', 'cancelled') 
    AND updated_at < CURRENT_TIMESTAMP - INTERVAL '7 days';
    

    DELETE FROM system_metrics 
    WHERE recorded_at < CURRENT_TIMESTAMP - INTERVAL '14 days';
    

    INSERT INTO system_metrics (metric_name, metric_value, metric_tags)
    VALUES ('cleanup_executed', 1, jsonb_build_object('timestamp', CURRENT_TIMESTAMP));
END;
$$ language 'plpgsql';


CREATE OR REPLACE VIEW active_rooms_summary AS
SELECT 
    r.room_code,
    r.status,
    r.created_at,
    COUNT(p.id) as player_count,
    r.max_players,
    CASE 
        WHEN COUNT(p.id) = r.max_players THEN 'full'
        WHEN COUNT(p.id) > 0 THEN 'available'
        ELSE 'empty'
    END as availability_status
FROM rooms r
LEFT JOIN players p ON r.id = p.room_id AND p.player_status != 'disconnected'
WHERE r.status IN ('waiting', 'ready', 'battling')
GROUP BY r.id, r.room_code, r.status, r.created_at, r.max_players
ORDER BY r.created_at DESC;

CREATE OR REPLACE VIEW player_leaderboard AS
SELECT 
    p.player_name,
    gs.battles_won,
    gs.battles_lost,
    gs.total_battles,
    CASE 
        WHEN gs.total_battles > 0 THEN 
            ROUND((gs.battles_won::DECIMAL / gs.total_battles) * 100, 2)
        ELSE 0 
    END as win_percentage,
    gs.avg_battle_duration,
    gs.total_playtime_seconds,
    gs.updated_at as last_played
FROM game_statistics gs
JOIN players p ON gs.player_id = p.id
WHERE gs.total_battles > 0
ORDER BY gs.battles_won DESC, win_percentage DESC
LIMIT 100;


INSERT INTO system_metrics (metric_name, metric_value, metric_tags)
VALUES ('database_initialized', 1, jsonb_build_object('version', '1.0', 'timestamp', CURRENT_TIMESTAMP))
ON CONFLICT DO NOTHING;


DO $$
BEGIN
    RAISE NOTICE 'Pokemon Battle Ultimate Arena database initialized successfully';
    RAISE NOTICE 'Database version: 1.0';
    RAISE NOTICE 'Tables created: rooms, players, battles, game_statistics, battle_turns, system_metrics';
    RAISE NOTICE 'Views created: active_rooms_summary, player_leaderboard';
    RAISE NOTICE 'Functions created: cleanup_old_data, update triggers';
END $$;