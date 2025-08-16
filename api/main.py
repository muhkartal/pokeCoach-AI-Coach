from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
import json
import asyncio
import uuid
import os
import logging
from datetime import datetime
from contextlib import asynccontextmanager

from database import db_manager

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    await db_manager.initialize()
    logger.info("Application startup complete")
    yield
    await db_manager.close()
    logger.info("Application shutdown complete")

app = FastAPI(
    title="Pokemon Battle Ultimate Arena API",
    description="REST API for Pokemon Battle game with WebSocket support",
    version="1.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    app.mount("/static", StaticFiles(directory="../"), name="static")
except RuntimeError:
    logger.warning("Static files directory not found, skipping mount")

class RoomCreate(BaseModel):
    player_name: str = Field(..., min_length=1, max_length=50)
    room_code: Optional[str] = Field(None, pattern="^[A-Z0-9]{4,8}$")

class RoomJoin(BaseModel):
    player_name: str = Field(..., min_length=1, max_length=50)
    room_code: str = Field(..., pattern="^[A-Z0-9]{4,8}$")

class BattleAction(BaseModel):
    room_code: str
    player_id: str
    action_type: str
    action_data: Dict[str, Any]

class WebSocketMessage(BaseModel):
    type: str
    room_code: str
    player_id: str
    data: Dict[str, Any]

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, List[WebSocket]] = {}
    
    async def connect(self, websocket: WebSocket, room_code: str):
        await websocket.accept()
        if room_code not in self.active_connections:
            self.active_connections[room_code] = []
        self.active_connections[room_code].append(websocket)
        logger.info(f"Client connected to room {room_code}")
    
    def disconnect(self, websocket: WebSocket, room_code: str):
        if room_code in self.active_connections:
            self.active_connections[room_code].remove(websocket)
            if not self.active_connections[room_code]:
                del self.active_connections[room_code]
        logger.info(f"Client disconnected from room {room_code}")
    
    async def send_to_room(self, room_code: str, message: dict):
        if room_code in self.active_connections:
            disconnected = []
            for connection in self.active_connections[room_code]:
                try:
                    await connection.send_json(message)
                except:
                    disconnected.append(connection)
            
            for conn in disconnected:
                self.disconnect(conn, room_code)

manager = ConnectionManager()

@app.get("/")
async def root():
    return {
        "message": "Pokemon Battle Ultimate Arena API",
        "status": "active",
        "version": "1.0.0",
        "documentation": "/docs",
        "health_check": "/health"
    }

@app.get("/health")
async def health_check():
    try:
        rooms_count = len(await db_manager.get_active_rooms())
        
        return {
            "status": "healthy",
            "timestamp": datetime.now().isoformat(),
            "active_rooms": rooms_count,
            "connected_clients": sum(len(conns) for conns in manager.active_connections.values()),
            "database": "connected",
            "redis": "connected"
        }
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        raise HTTPException(status_code=503, detail="Service unhealthy")

@app.get("/api/rooms")
async def list_rooms():
    try:
        rooms = await db_manager.get_active_rooms()
        return {"rooms": rooms}
    except Exception as e:
        logger.error(f"Failed to list rooms: {e}")
        raise HTTPException(status_code=500, detail="Failed to retrieve rooms")

@app.post("/api/rooms")
async def create_room(room_data: RoomCreate):
    try:
        room_code = room_data.room_code or str(uuid.uuid4())[:8].upper()
        
        existing_room = await db_manager.get_room_state(room_code)
        if existing_room:
            raise HTTPException(status_code=400, detail="Room already exists")
        
        result = await db_manager.create_room(room_code, room_data.player_name)
        
        await manager.send_to_room(room_code, {
            "type": "room_created",
            "room_code": room_code,
            "player_name": room_data.player_name
        })
        
        return result
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Failed to create room: {e}")
        raise HTTPException(status_code=500, detail="Failed to create room")

@app.post("/api/rooms/join")
async def join_room(join_data: RoomJoin):
    try:
        result = await db_manager.join_room(join_data.room_code, join_data.player_name)
        
        await manager.send_to_room(join_data.room_code, {
            "type": "player_joined",
            "player_name": join_data.player_name,
            "room_state": result["room_state"]
        })
        
        return {
            "room_code": result["room_code"],
            "player_id": result["player_id"],
            "status": "joined"
        }
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Failed to join room: {e}")
        raise HTTPException(status_code=500, detail="Failed to join room")

@app.get("/api/rooms/{room_code}")
async def get_room(room_code: str):
    try:
        room_state = await db_manager.get_room_state(room_code)
        if not room_state:
            raise HTTPException(status_code=404, detail="Room not found")
        return room_state
    except Exception as e:
        logger.error(f"Failed to get room {room_code}: {e}")
        raise HTTPException(status_code=500, detail="Failed to retrieve room")

@app.delete("/api/rooms/{room_code}")
async def delete_room(room_code: str):
    try:
        await manager.send_to_room(room_code, {
            "type": "room_deleted",
            "room_code": room_code
        })
        
        await db_manager.redis_client.delete(f"room:{room_code}")
        
        return {"status": "deleted"}
    except Exception as e:
        logger.error(f"Failed to delete room {room_code}: {e}")
        raise HTTPException(status_code=500, detail="Failed to delete room")

@app.post("/api/battles/{room_code}/start")
async def start_battle(room_code: str):
    try:
        battle_id = await db_manager.start_battle(room_code)
        
        await manager.send_to_room(room_code, {
            "type": "battle_started",
            "battle_id": battle_id,
            "room_code": room_code
        })
        
        return {"battle_id": battle_id, "status": "started"}
        
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Failed to start battle in room {room_code}: {e}")
        raise HTTPException(status_code=500, detail="Failed to start battle")

@app.websocket("/ws/{room_code}")
async def websocket_endpoint(websocket: WebSocket, room_code: str):
    await manager.connect(websocket, room_code)
    
    try:
        room_state = await db_manager.get_room_state(room_code)
        if room_state:
            await websocket.send_json({
                "type": "room_state",
                "room_code": room_code,
                "data": room_state
            })
        
        while True:
            data = await websocket.receive_json()
            
            message_type = data.get("type")
            
            if message_type == "battle_action":
                await db_manager.update_room_state(
                    room_code, 
                    data.get("battle_state", {})
                )
                
                await manager.send_to_room(room_code, {
                    "type": "battle_update",
                    "data": data,
                    "timestamp": datetime.now().isoformat()
                })
            
            elif message_type == "chat_message":
                await manager.send_to_room(room_code, {
                    "type": "chat_message",
                    "player_name": data.get("player_name"),
                    "message": data.get("message"),
                    "timestamp": datetime.now().isoformat()
                })
            
            else:
                await manager.send_to_room(room_code, {
                    "type": "room_update",
                    "data": data,
                    "timestamp": datetime.now().isoformat()
                })
                
    except WebSocketDisconnect:
        manager.disconnect(websocket, room_code)
    except Exception as e:
        logger.error(f"WebSocket error in room {room_code}: {e}")
        manager.disconnect(websocket, room_code)

@app.get("/metrics")
async def get_metrics():
    try:
        rooms = await db_manager.get_active_rooms()
        total_connections = sum(len(conns) for conns in manager.active_connections.values())
        
        metrics = [
            f"active_rooms_total {len(rooms)}",
            f"websocket_connections_total {total_connections}",
            f"rooms_waiting_total {len([r for r in rooms if r['status'] == 'waiting'])}",
            f"rooms_battling_total {len([r for r in rooms if r['status'] == 'battling'])}",
        ]
        
        return "\n".join(metrics) + "\n"
        
    except Exception as e:
        logger.error(f"Failed to generate metrics: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate metrics")

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)