export const MultiplayerLobby = ({ onBack }) => {
   const [lobbyState, setLobbyState] = React.useState("menu");
   const [roomCode, setRoomCode] = React.useState("");
   const [playerName, setPlayerName] = React.useState("");
   const [isConnected, setIsConnected] = React.useState(false);
   const [connectedPlayers, setConnectedPlayers] = React.useState([]);
   const [error, setError] = React.useState("");

   const generateRoomCode = () => {
      return Math.random().toString(36).substr(2, 6).toUpperCase();
   };

   const createRoom = () => {
      if (!playerName.trim()) {
         setError("Please enter your name");
         return;
      }
      
      const newRoomCode = generateRoomCode();
      setRoomCode(newRoomCode);
      setLobbyState("hosting");
      setIsConnected(true);
      setConnectedPlayers([{ name: playerName, isHost: true, ready: false }]);
      setError("");
   };

   const joinRoom = () => {
      if (!playerName.trim()) {
         setError("Please enter your name");
         return;
      }
      
      if (!roomCode.trim()) {
         setError("Please enter a room code");
         return;
      }

      setLobbyState("joining");
      setIsConnected(true);
      setError("");
   };

   const leaveRoom = () => {
      setLobbyState("menu");
      setIsConnected(false);
      setConnectedPlayers([]);
      setRoomCode("");
      setError("");
   };

   const toggleReady = () => {
      setConnectedPlayers(players => 
         players.map(player => 
            player.name === playerName 
               ? { ...player, ready: !player.ready }
               : player
         )
      );
   };

   const renderMainMenu = () => React.createElement('div', {
      className: 'space-y-6'
   }, [
      React.createElement('div', {
         key: 'player-name',
         className: 'space-y-2'
      }, [
         React.createElement('label', {
            className: 'block text-white font-medium'
         }, 'Your Name'),
         React.createElement('input', {
            type: 'text',
            value: playerName,
            onChange: (e) => setPlayerName(e.target.value),
            placeholder: 'Enter your trainer name...',
            className: 'w-full p-3 border-2 border-gray-300 rounded-lg text-lg',
            maxLength: 20
         })
      ]),

      React.createElement('div', {
         key: 'room-actions',
         className: 'grid grid-cols-1 md:grid-cols-2 gap-4'
      }, [
         React.createElement('div', {
            key: 'create-room',
            className: 'bg-white/90 rounded-lg p-6 text-center'
         }, [
            React.createElement('h3', {
               className: 'text-xl font-bold mb-3'
            }, 'Create Room'),
            React.createElement('p', {
               className: 'text-gray-600 mb-4'
            }, 'Host a new battle room for others to join'),
            React.createElement('button', {
               onClick: createRoom,
               className: 'w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-bold'
            }, 'Create Room')
         ]),

         React.createElement('div', {
            key: 'join-room',
            className: 'bg-white/90 rounded-lg p-6'
         }, [
            React.createElement('h3', {
               className: 'text-xl font-bold mb-3 text-center'
            }, 'Join Room'),
            React.createElement('input', {
               type: 'text',
               value: roomCode,
               onChange: (e) => setRoomCode(e.target.value.toUpperCase()),
               placeholder: 'Enter room code...',
               className: 'w-full p-2 border-2 border-gray-300 rounded-lg mb-3',
               maxLength: 6
            }),
            React.createElement('button', {
               onClick: joinRoom,
               className: 'w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-bold'
            }, 'Join Room')
         ])
      ])
   ]);

   const renderRoomLobby = () => React.createElement('div', {
      className: 'space-y-6'
   }, [
      React.createElement('div', {
         key: 'room-info',
         className: 'bg-white/90 rounded-lg p-6 text-center'
      }, [
         React.createElement('h3', {
            className: 'text-2xl font-bold mb-3'
         }, lobbyState === "hosting" ? "You're Hosting" : "Joined Room"),
         
         React.createElement('div', {
            className: 'room-code mb-4'
         }, roomCode),
         
         React.createElement('p', {
            className: 'text-gray-600'
         }, 'Share this code with your opponent')
      ]),

      React.createElement('div', {
         key: 'players',
         className: 'bg-white/90 rounded-lg p-6'
      }, [
         React.createElement('h4', {
            className: 'text-xl font-bold mb-4'
         }, `Players (${connectedPlayers.length}/2)`),
         
         React.createElement('div', {
            className: 'space-y-3'
         }, connectedPlayers.map((player, index) =>
            React.createElement('div', {
               key: index,
               className: 'flex items-center justify-between p-3 bg-gray-100 rounded-lg'
            }, [
               React.createElement('div', {
                  className: 'flex items-center gap-3'
               }, [
                  React.createElement('div', {
                     className: `w-3 h-3 rounded-full ${player.ready ? 'bg-green-500' : 'bg-gray-400'}`
                  }),
                  React.createElement('span', {
                     className: 'font-medium'
                  }, player.name),
                  player.isHost && React.createElement('span', {
                     className: 'px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs'
                  }, 'HOST')
               ]),
               
               React.createElement('span', {
                  className: `text-sm ${player.ready ? 'text-green-600' : 'text-gray-500'}`
               }, player.ready ? 'Ready' : 'Not Ready')
            ])
         )),

         connectedPlayers.length < 2 && React.createElement('div', {
            className: 'text-center text-gray-500 py-4'
         }, 'Waiting for opponent...')
      ]),

      React.createElement('div', {
         key: 'room-controls',
         className: 'flex gap-3'
      }, [
         React.createElement('button', {
            onClick: toggleReady,
            className: `flex-1 px-6 py-3 rounded-lg font-bold transition-colors ${
               connectedPlayers.find(p => p.name === playerName)?.ready
                  ? 'bg-gray-500 text-white hover:bg-gray-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
            }`
         }, connectedPlayers.find(p => p.name === playerName)?.ready ? 'Not Ready' : 'Ready Up'),
         
         React.createElement('button', {
            onClick: leaveRoom,
            className: 'px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-bold'
         }, 'Leave Room')
      ]),

      connectedPlayers.length === 2 && 
      connectedPlayers.every(p => p.ready) && 
      React.createElement('button', {
         key: 'start-battle',
         className: 'w-full px-6 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-bold text-xl',
         onClick: () => alert('Battle system integration needed!')
      }, '⚔️ START BATTLE!')
   ]);

   return React.createElement('div', {
      className: 'min-h-screen p-4 bg-gradient-to-br from-purple-600 to-blue-700'
   }, [
      React.createElement('div', {
         key: 'container',
         className: 'max-w-4xl mx-auto'
      }, [
         React.createElement('div', {
            key: 'header',
            className: 'text-center mb-6'
         }, [
            React.createElement('h1', {
               className: 'text-4xl text-white mb-2 font-bold',
               style: { textShadow: '2px 2px 0 #000' }
            }, 'Multiplayer Lobby'),
            
            React.createElement('div', {
               className: 'text-sm text-gray-200'
            }, [
               'Status: ',
               React.createElement('span', {
                  className: isConnected ? 'text-green-400' : 'text-red-400'
               }, isConnected ? '● Connected' : '● Disconnected')
            ])
         ]),

         error && React.createElement('div', {
            key: 'error',
            className: 'bg-red-500/20 border border-red-500 rounded-lg p-4 mb-4 max-w-md mx-auto'
         }, React.createElement('div', {
            className: 'text-red-200 text-center'
         }, error)),

         React.createElement('div', {
            key: 'content',
            className: 'max-w-2xl mx-auto'
         }, lobbyState === "menu" ? renderMainMenu() : renderRoomLobby()),

         React.createElement('div', {
            key: 'back-button',
            className: 'text-center mt-8'
         }, React.createElement('button', {
            onClick: onBack,
            className: 'px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors'
         }, 'Back to Main Menu')),

         React.createElement('div', {
            key: 'info',
            className: 'mt-8 text-center text-gray-300 text-sm'
         }, [
            React.createElement('p', null, 'Multiplayer is currently in demo mode'),
            React.createElement('p', null, 'Full network integration coming soon!')
         ])
      ])
   ]);
};
