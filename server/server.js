const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
   cors: {
      origin: "*",
      methods: ["GET", "POST"],
   },
});

// Middleware
app.use(cors());
app.use(express.json());

// Game state storage
const gameRooms = new Map();
const playerConnections = new Map();

// Room management
class GameRoom {
   constructor(roomCode, hostId, hostName) {
      this.roomCode = roomCode;
      this.hostId = hostId;
      this.players = new Map();
      this.spectators = new Set();
      this.gameState = "waiting"; // waiting, team_selection, battle, finished
      this.battleData = null;
      this.currentTurn = null;
      this.turnTimeout = null;
      this.createdAt = new Date();

      // Add host as first player
      this.addPlayer(hostId, hostName, true);
   }

   addPlayer(playerId, playerName, isHost = false) {
      if (this.players.size >= 2 && !isHost) {
         return false; // Room full
      }

      this.players.set(playerId, {
         id: playerId,
         name: playerName,
         isHost: isHost,
         ready: false,
         team: null,
         currentPokemon: 0,
         connected: true,
      });

      return true;
   }

   removePlayer(playerId) {
      this.players.delete(playerId);
      this.spectators.delete(playerId);
   }

   getPlayerArray() {
      return Array.from(this.players.values());
   }

   isReady() {
      return (
         this.players.size === 2 &&
         Array.from(this.players.values()).every((p) => p.ready && p.team)
      );
   }

   getOpponent(playerId) {
      for (let player of this.players.values()) {
         if (player.id !== playerId) {
            return player;
         }
      }
      return null;
   }
}

// Utility functions
function generateRoomCode() {
   return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function createUniqueRoomCode() {
   let code;
   do {
      code = generateRoomCode();
   } while (gameRooms.has(code));
   return code;
}

// Socket.IO event handlers
io.on("connection", (socket) => {
   console.log(`🔗 Player connected: ${socket.id}`);

   // Store connection
   playerConnections.set(socket.id, {
      socket: socket,
      playerId: socket.id,
      currentRoom: null,
   });

   // Create or join room
   socket.on("create_room", (data) => {
      try {
         const { playerName } = data;
         const roomCode = createUniqueRoomCode();
         const room = new GameRoom(roomCode, socket.id, playerName);

         gameRooms.set(roomCode, room);
         socket.join(roomCode);

         playerConnections.get(socket.id).currentRoom = roomCode;

         socket.emit("room_created", {
            success: true,
            roomCode: roomCode,
            room: {
               code: roomCode,
               players: room.getPlayerArray(),
               gameState: room.gameState,
            },
         });

         console.log(`🏠 Room ${roomCode} created by ${playerName}`);
      } catch (error) {
         socket.emit("room_created", {
            success: false,
            error: error.message,
         });
      }
   });

   socket.on("join_room", (data) => {
      try {
         const { roomCode, playerName } = data;
         const room = gameRooms.get(roomCode);

         if (!room) {
            socket.emit("room_joined", {
               success: false,
               error: "Room not found",
            });
            return;
         }

         if (room.players.size >= 2) {
            socket.emit("room_joined", {
               success: false,
               error: "Room is full",
            });
            return;
         }

         const success = room.addPlayer(socket.id, playerName);
         if (success) {
            socket.join(roomCode);
            playerConnections.get(socket.id).currentRoom = roomCode;

            // Notify all players in room
            io.to(roomCode).emit("player_joined", {
               player: {
                  id: socket.id,
                  name: playerName,
                  ready: false,
               },
               room: {
                  code: roomCode,
                  players: room.getPlayerArray(),
                  gameState: room.gameState,
               },
            });

            socket.emit("room_joined", {
               success: true,
               room: {
                  code: roomCode,
                  players: room.getPlayerArray(),
                  gameState: room.gameState,
               },
            });

            console.log(`👤 ${playerName} joined room ${roomCode}`);
         } else {
            socket.emit("room_joined", {
               success: false,
               error: "Could not join room",
            });
         }
      } catch (error) {
         socket.emit("room_joined", {
            success: false,
            error: error.message,
         });
      }
   });

   // Quick match (random opponent)
   socket.on("quick_match", (data) => {
      try {
         const { playerName } = data;

         // Find waiting room or create new one
         let waitingRoom = null;
         for (let room of gameRooms.values()) {
            if (room.players.size === 1 && room.gameState === "waiting") {
               waitingRoom = room;
               break;
            }
         }

         if (waitingRoom) {
            // Join existing room
            const success = waitingRoom.addPlayer(socket.id, playerName);
            if (success) {
               socket.join(waitingRoom.roomCode);
               playerConnections.get(socket.id).currentRoom = waitingRoom.roomCode;

               io.to(waitingRoom.roomCode).emit("player_joined", {
                  player: {
                     id: socket.id,
                     name: playerName,
                     ready: false,
                  },
                  room: {
                     code: waitingRoom.roomCode,
                     players: waitingRoom.getPlayerArray(),
                     gameState: waitingRoom.gameState,
                  },
               });

               socket.emit("room_joined", {
                  success: true,
                  room: {
                     code: waitingRoom.roomCode,
                     players: waitingRoom.getPlayerArray(),
                     gameState: waitingRoom.gameState,
                  },
               });
            }
         } else {
            // Create new room
            const roomCode = createUniqueRoomCode();
            const room = new GameRoom(roomCode, socket.id, playerName);

            gameRooms.set(roomCode, room);
            socket.join(roomCode);

            playerConnections.get(socket.id).currentRoom = roomCode;

            socket.emit("room_created", {
               success: true,
               roomCode: roomCode,
               isQuickMatch: true,
               room: {
                  code: roomCode,
                  players: room.getPlayerArray(),
                  gameState: room.gameState,
               },
            });
         }
      } catch (error) {
         socket.emit("quick_match_failed", {
            error: error.message,
         });
      }
   });

   // Player ready status
   socket.on("player_ready", (data) => {
      try {
         const connection = playerConnections.get(socket.id);
         if (!connection?.currentRoom) return;

         const room = gameRooms.get(connection.currentRoom);
         if (!room) return;

         const player = room.players.get(socket.id);
         if (player) {
            player.ready = data.ready;
            player.team = data.team;

            io.to(room.roomCode).emit("player_status_updated", {
               playerId: socket.id,
               ready: data.ready,
               hasTeam: !!data.team,
               room: {
                  code: room.roomCode,
                  players: room.getPlayerArray(),
                  gameState: room.gameState,
               },
            });

            // Check if both players are ready
            if (room.isReady() && room.gameState === "waiting") {
               room.gameState = "battle";
               room.currentTurn = Array.from(room.players.keys())[0]; // First player goes first

               io.to(room.roomCode).emit("battle_start", {
                  room: {
                     code: room.roomCode,
                     players: room.getPlayerArray(),
                     gameState: room.gameState,
                     currentTurn: room.currentTurn,
                  },
               });

               console.log(`⚔️ Battle started in room ${room.roomCode}`);
            }
         }
      } catch (error) {
         console.error("Error in player_ready:", error);
      }
   });

   // Battle moves
   socket.on("battle_move", (data) => {
      try {
         const connection = playerConnections.get(socket.id);
         if (!connection?.currentRoom) return;

         const room = gameRooms.get(connection.currentRoom);
         if (!room || room.gameState !== "battle") return;

         // Validate it's player's turn
         if (room.currentTurn !== socket.id) {
            socket.emit("move_rejected", {
               error: "Not your turn",
            });
            return;
         }

         // Clear turn timeout
         if (room.turnTimeout) {
            clearTimeout(room.turnTimeout);
            room.turnTimeout = null;
         }

         // Broadcast move to opponent
         const opponent = room.getOpponent(socket.id);
         if (opponent) {
            socket.to(room.roomCode).emit("opponent_move", {
               move: data.move,
               playerId: socket.id,
               battleData: data.battleData,
            });
         }

         // Switch turns
         room.currentTurn = opponent?.id || null;

         // Set timeout for next turn (30 seconds)
         room.turnTimeout = setTimeout(() => {
            if (room.gameState === "battle") {
               // Auto-forfeit on timeout
               io.to(room.roomCode).emit("turn_timeout", {
                  playerId: room.currentTurn,
               });
            }
         }, 30000);

         console.log(`🎮 Move executed in room ${room.roomCode} by ${socket.id}`);
      } catch (error) {
         console.error("Error in battle_move:", error);
      }
   });

   // Battle end
   socket.on("battle_end", (data) => {
      try {
         const connection = playerConnections.get(socket.id);
         if (!connection?.currentRoom) return;

         const room = gameRooms.get(connection.currentRoom);
         if (!room) return;

         room.gameState = "finished";

         io.to(room.roomCode).emit("battle_finished", {
            winner: data.winner,
            battleData: data.battleData,
            room: {
               code: room.roomCode,
               players: room.getPlayerArray(),
               gameState: room.gameState,
            },
         });

         console.log(`🏆 Battle finished in room ${room.roomCode}, winner: ${data.winner}`);
      } catch (error) {
         console.error("Error in battle_end:", error);
      }
   });

   // Chat messages
   socket.on("chat_message", (data) => {
      try {
         const connection = playerConnections.get(socket.id);
         if (!connection?.currentRoom) return;

         const room = gameRooms.get(connection.currentRoom);
         if (!room) return;

         const player = room.players.get(socket.id);
         if (player) {
            io.to(room.roomCode).emit("chat_message", {
               playerId: socket.id,
               playerName: player.name,
               message: data.message,
               timestamp: new Date().toISOString(),
            });
         }
      } catch (error) {
         console.error("Error in chat_message:", error);
      }
   });

   // Leave room
   socket.on("leave_room", () => {
      handlePlayerDisconnect(socket.id);
   });

   // Disconnect handling
   socket.on("disconnect", () => {
      console.log(`🔌 Player disconnected: ${socket.id}`);
      handlePlayerDisconnect(socket.id);
   });
});

function handlePlayerDisconnect(playerId) {
   const connection = playerConnections.get(playerId);
   if (connection?.currentRoom) {
      const room = gameRooms.get(connection.currentRoom);
      if (room) {
         room.removePlayer(playerId);

         // Notify other players
         io.to(room.roomCode).emit("player_disconnected", {
            playerId: playerId,
            room: {
               code: room.roomCode,
               players: room.getPlayerArray(),
               gameState: room.gameState,
            },
         });

         // Clean up empty rooms
         if (room.players.size === 0) {
            gameRooms.delete(room.roomCode);
            console.log(`🗑️ Room ${room.roomCode} deleted (empty)`);
         }
      }
   }

   playerConnections.delete(playerId);
}

// Clean up old rooms (every 5 minutes)
setInterval(() => {
   const now = new Date();
   for (let [roomCode, room] of gameRooms.entries()) {
      const roomAge = now - room.createdAt;
      // Delete rooms older than 1 hour with no activity
      if (roomAge > 3600000) {
         gameRooms.delete(roomCode);
         console.log(`🗑️ Room ${roomCode} deleted (timeout)`);
      }
   }
}, 300000);

// API endpoints
app.get("/health", (req, res) => {
   res.json({
      status: "healthy",
      activeRooms: gameRooms.size,
      activePlayers: playerConnections.size,
      uptime: process.uptime(),
   });
});

app.get("/stats", (req, res) => {
   const roomStats = Array.from(gameRooms.values()).map((room) => ({
      code: room.roomCode,
      players: room.players.size,
      gameState: room.gameState,
      createdAt: room.createdAt,
   }));

   res.json({
      totalRooms: gameRooms.size,
      totalPlayers: playerConnections.size,
      rooms: roomStats,
   });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
   console.log(`🚀 Pokemon Battle Server running on port ${PORT}`);
   console.log(`📊 Health check: http://localhost:${PORT}/health`);
   console.log(`📈 Stats: http://localhost:${PORT}/stats`);
});
