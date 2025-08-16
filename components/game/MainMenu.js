export const MainMenu = ({ onNewGame, onLoadGame, onSettings, onMultiplayer, gameStats }) => {
   const [showStats, setShowStats] = React.useState(false);

   return React.createElement('div', {
      className: 'min-h-screen flex items-center justify-center p-4'
   }, [
      React.createElement('div', {
         key: 'menu-container',
         className: 'text-center'
      }, [
         React.createElement('h1', {
            key: 'title',
            className: 'text-6xl text-white mb-4',
            style: { textShadow: '3px 3px 0 #000' }
         }, 'Pokemon Battle'),
         
         React.createElement('h2', {
            key: 'subtitle',
            className: 'text-3xl text-gray-200 mb-12',
            style: { textShadow: '2px 2px 0 #000' }
         }, 'Ultimate Arena'),

         React.createElement('div', {
            key: 'menu-buttons',
            className: 'flex flex-col gap-4 items-center'
         }, [
            React.createElement('button', {
               key: 'new-game',
               onClick: onNewGame,
               className: 'text-2xl text-white animate-pulse hover:scale-110 transition-transform px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg border-4 border-black',
               style: { textShadow: '2px 2px 0 #000' }
            }, 'NEW GAME'),

            window.StorageUtils.loadGameData() && React.createElement('button', {
               key: 'load-game',
               onClick: onLoadGame,
               className: 'text-xl text-blue-300 hover:text-blue-100 transition-colors hover:scale-110 transform px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg border-4 border-black',
               style: { textShadow: '2px 2px 0 #000' }
            }, 'CONTINUE'),

            React.createElement('button', {
               key: 'multiplayer',
               onClick: onMultiplayer,
               className: 'text-xl text-yellow-300 hover:text-yellow-100 transition-colors hover:scale-110 transform px-6 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg border-4 border-black',
               style: { textShadow: '2px 2px 0 #000' }
            }, 'MULTIPLAYER'),

            React.createElement('button', {
               key: 'stats',
               onClick: () => setShowStats(!showStats),
               className: 'text-lg text-purple-300 hover:text-purple-100 transition-colors px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg border-4 border-black',
               style: { textShadow: '2px 2px 0 #000' }
            }, showStats ? 'HIDE STATS' : 'STATS'),

            React.createElement('button', {
               key: 'settings',
               onClick: onSettings,
               className: 'text-lg text-gray-300 hover:text-white transition-colors px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg border-4 border-black',
               style: { textShadow: '2px 2px 0 #000' }
            }, 'SETTINGS')
         ]),

         showStats && gameStats && React.createElement('div', {
            key: 'stats-panel',
            className: 'mt-8 p-6 bg-black/50 rounded-lg border-4 border-white max-w-md mx-auto'
         }, [
            React.createElement('h3', {
               key: 'stats-title',
               className: 'text-2xl text-white mb-4',
               style: { textShadow: '2px 2px 0 #000' }
            }, 'Your Stats'),
            
            React.createElement('div', {
               key: 'stats-grid',
               className: 'grid grid-cols-2 gap-4 text-white'
            }, [
               React.createElement('div', {
                  key: 'battles-won',
                  className: 'text-center'
               }, [
                  React.createElement('div', {
                     className: 'text-3xl font-bold text-green-400'
                  }, gameStats.battlesWon || 0),
                  React.createElement('div', {
                     className: 'text-sm'
                  }, 'Battles Won')
               ]),
               
               React.createElement('div', {
                  key: 'battles-lost',
                  className: 'text-center'
               }, [
                  React.createElement('div', {
                     className: 'text-3xl font-bold text-red-400'
                  }, gameStats.battlesLost || 0),
                  React.createElement('div', {
                     className: 'text-sm'
                  }, 'Battles Lost')
               ]),
               
               React.createElement('div', {
                  key: 'total-damage',
                  className: 'text-center'
               }, [
                  React.createElement('div', {
                     className: 'text-2xl font-bold text-yellow-400'
                  }, (gameStats.totalDamageDealt || 0).toLocaleString()),
                  React.createElement('div', {
                     className: 'text-sm'
                  }, 'Damage Dealt')
               ]),
               
               React.createElement('div', {
                  key: 'playtime',
                  className: 'text-center'
               }, [
                  React.createElement('div', {
                     className: 'text-2xl font-bold text-blue-400'
                  }, `${Math.floor((gameStats.playtimeMinutes || 0) / 60)}h ${(gameStats.playtimeMinutes || 0) % 60}m`),
                  React.createElement('div', {
                     className: 'text-sm'
                  }, 'Playtime')
               ])
            ])
         ]),

         React.createElement('div', {
            key: 'footer',
            className: 'mt-12 text-center'
         }, [
            React.createElement('p', {
               key: 'version',
               className: 'text-gray-300 text-sm',
               style: { textShadow: '1px 1px 0 #000' }
            }, 'Ultimate Edition v2.0.0'),
            
            React.createElement('p', {
               key: 'credits',
               className: 'text-gray-400 text-xs mt-2',
               style: { textShadow: '1px 1px 0 #000' }
            }, 'Professional Architecture | Modular Design')
         ])
      ])
   ]);
};
