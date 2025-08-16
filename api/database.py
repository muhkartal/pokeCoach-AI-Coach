import os
import asyncpg
import redis.asyncio as redis
from typing import Optional, Dict, Any, List
import json
import uuid
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class DatabaseManager:
    def __init__(self):
        self.postgres_pool: Optional[asyncpg.Pool] = None
        self.redis_client: Optional[redis.Redis] = None
        
    async def initialize(self):
        try:
            postgres_url = os.getenv(
                "DATABASE_URL", 
                "postgresql://pokemon_user:pokemon_password@postgres:5432/pokemon_battle"
            )
            self.postgres_pool = await asyncpg.create_pool(postgres_url, min_size=5, max_size=20)
            
            redis_url = os.getenv("REDIS_URL", "redis://redis:6379")
            self.redis_client = redis.from_url(redis_url, decode_responses=True)
            
            async with self.postgres_pool.acquire() as conn:
                await conn.fetchval("SELECT 1")
            
            await self.redis_client.ping()
            
            logger.info("Database connections initialized successfully")
            
        except Exception as e:
            logger.error(f"Failed to initialize database connections: {e}")
            raise
    
    async def close(self):
        if self.postgres_pool:
            await self.postgres_pool.close()
        if self.redis_client:
            await self.redis_client.close()

    async def create_room(self, room_code: str, player_name: str) -> Dict[str, Any]:
        async with self.postgres_pool.acquire() as conn:
            room_id = str(uuid.uuid4())
            player_id = str(uuid.uuid4())
            
            await conn.execute("""
                INSERT INTO rooms (id, room_code, status, max_players)
                VALUES ($1, $2, 'waiting', 2)
            """, room_id, room_code)
            
            await conn.execute("""
                INSERT INTO players (id, room_id, player_name, player_status)
                VALUES ($1, $2, $3, 'waiting')
            """, player_id, room_id, player_name)
            room_state = {
                "room_id": room_id,
                "room_code": room_code,
                "players": [{"id": player_id, "name": player_name, "status": "waiting"}],
                "status": "waiting",
                "created_at": datetime.now().isoformat()
            }
            
            await self.redis_client.setex(
                f"room:{room_code}", 
                3600, 
                json.dumps(room_state)
            )
            
            return {"room_code": room_code, "player_id": player_id, "room_id": room_id}
    
    async def join_room(self, room_code: str, player_name: str) -> Dict[str, Any]:
        
        room_data = await self.redis_client.get(f"room:{room_code}")
        if not room_data:
            raise ValueError("Room not found")
        
        room_state = json.loads(room_data)
        
        if len(room_state["players"]) >= 2:
            raise ValueError("Room is full")
        
        async with self.postgres_pool.acquire() as conn:
            player_id = str(uuid.uuid4())
            room_id = room_state["room_id"]
            
            await conn.execute("""
                INSERT INTO players (id, room_id, player_name, player_status)
                VALUES ($1, $2, $3, 'ready')
            """, player_id, room_id, player_name)
            room_state["players"].append({
                "id": player_id, 
                "name": player_name, 
                "status": "ready"
            })
            
            if len(room_state["players"]) == 2:
                room_state["status"] = "ready"
                await conn.execute("""
                    UPDATE rooms SET status = 'ready' WHERE id = $1
                """, room_id)
            await self.redis_client.setex(
                f"room:{room_code}", 
                3600, 
                json.dumps(room_state)
            )
            
            return {"room_code": room_code, "player_id": player_id, "room_state": room_state}
    
    async def get_room_state(self, room_code: str) -> Optional[Dict[str, Any]]:
        room_data = await self.redis_client.get(f"room:{room_code}")
        return json.loads(room_data) if room_data else None
    
    async def update_room_state(self, room_code: str, battle_state: Dict[str, Any]):
        room_data = await self.redis_client.get(f"room:{room_code}")
        if room_data:
            room_state = json.loads(room_data)
            room_state["battle_state"] = battle_state
            room_state["updated_at"] = datetime.now().isoformat()
            
            await self.redis_client.setex(
                f"room:{room_code}", 
                3600, 
                json.dumps(room_state)
            )
    
    async def start_battle(self, room_code: str) -> str:
        room_state = await self.get_room_state(room_code)
        if not room_state:
            raise ValueError("Room not found")
        
        async with self.postgres_pool.acquire() as conn:
            battle_id = str(uuid.uuid4())
            
            await conn.execute("""
                INSERT INTO battles (id, room_id, started_at, battle_log)
                VALUES ($1, $2, $3, $4)
            """, battle_id, room_state["room_id"], datetime.now(), json.dumps({}))
            

            room_state["status"] = "battling"
            room_state["battle_id"] = battle_id
            
            await self.redis_client.setex(
                f"room:{room_code}", 
                3600, 
                json.dumps(room_state)
            )
            
            return battle_id
    
    async def end_battle(self, room_code: str, winner_id: str, battle_log: Dict[str, Any]):
        room_state = await self.get_room_state(room_code)
        if not room_state:
            return
        
        async with self.postgres_pool.acquire() as conn:
            battle_id = room_state.get("battle_id")
            if battle_id:
                await conn.execute("""
                    UPDATE battles 
                    SET ended_at = $1, winner_id = $2, battle_log = $3
                    WHERE id = $4
                """, datetime.now(), winner_id, json.dumps(battle_log), battle_id)
            for player in room_state["players"]:
                wins = 1 if player["id"] == winner_id else 0
                losses = 0 if player["id"] == winner_id else 1
                
                await conn.execute("""
                    INSERT INTO game_statistics (player_id, battles_won, battles_lost, total_battles)
                    VALUES ($1, $2, $3, 1)
                    ON CONFLICT (player_id) DO UPDATE SET
                        battles_won = game_statistics.battles_won + $2,
                        battles_lost = game_statistics.battles_lost + $3,
                        total_battles = game_statistics.total_battles + 1,
                        updated_at = CURRENT_TIMESTAMP
                """, player["id"], wins, losses)
    
    async def get_active_rooms(self) -> List[Dict[str, Any]]:
        async with self.postgres_pool.acquire() as conn:
            rooms = await conn.fetch("""
                SELECT r.room_code, r.status, r.created_at,
                       COUNT(p.id) as player_count
                FROM rooms r
                LEFT JOIN players p ON r.id = p.room_id
                WHERE r.status IN ('waiting', 'ready', 'battling')
                GROUP BY r.id, r.room_code, r.status, r.created_at
                ORDER BY r.created_at DESC
            """)
            
            return [dict(room) for room in rooms]

db_manager = DatabaseManager()
