# Pokemon Battle Server

## Quick Start

1. **Install dependencies:**

```bash
cd server
npm install
```

2. **Start the server:**

```bash
npm start
```

3. **For development (auto-restart):**

```bash
npm run dev
```

## Server Features

✅ **Room Management**

-  Create private rooms with room codes
-  Join rooms by code
-  Quick match with random opponents
-  Automatic room cleanup

✅ **Battle System**

-  Turn-based multiplayer battles
-  Move synchronization
-  Turn timeouts (30 seconds)
-  Battle state management

✅ **Player Management**

-  Connection tracking
-  Disconnect handling
-  Reconnection support
-  Player ready status

✅ **Communication**

-  Real-time WebSocket communication
-  Chat system
-  Battle moves broadcasting
-  Status updates

## API Endpoints

-  `GET /health` - Server health check
-  `GET /stats` - Server statistics

## WebSocket Events

### Client → Server

-  `create_room` - Create a new room
-  `join_room` - Join existing room
-  `quick_match` - Find random opponent
-  `player_ready` - Set ready status with team
-  `battle_move` - Execute battle move
-  `battle_end` - End battle with results
-  `chat_message` - Send chat message
-  `leave_room` - Leave current room

### Server → Client

-  `room_created` - Room creation result
-  `room_joined` - Room join result
-  `player_joined` - New player joined
-  `player_status_updated` - Player ready status changed
-  `battle_start` - Battle begins
-  `opponent_move` - Opponent's move
-  `battle_finished` - Battle ended
-  `chat_message` - Chat message received
-  `player_disconnected` - Player left

## Configuration

-  **Port**: 3001 (default)
-  **Turn Timeout**: 30 seconds
-  **Room Cleanup**: 1 hour inactive
-  **CORS**: Enabled for all origins

## Next Steps

1. Start the server: `npm start`
2. Update your frontend to connect to `ws://localhost:3001`
3. Test room creation and joining
4. Implement frontend multiplayer UI
