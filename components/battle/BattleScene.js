export const BattleScene = ({ 
   playerPokemon, 
   enemyPokemon, 
   weather = "clear",
   turn = 1,
   isAnimating = false 
}) => {
   const [screenFlash, setScreenFlash] = React.useState(null);
   const [cameraShake, setCameraShake] = React.useState(false);
   
   if (!playerPokemon || !enemyPokemon) {
      return React.createElement('div', {
         className: 'flex items-center justify-center h-64 text-gray-500'
      }, 'Loading battle scene...');
   }

   const getWeatherDisplay = () => {
      const weatherInfo = {
         rain: { emoji: '🌧️', text: 'Rain', color: 'text-blue-400' },
         sun: { emoji: '☀️', text: 'Harsh Sunlight', color: 'text-yellow-400' },
         sandstorm: { emoji: '🌪️', text: 'Sandstorm', color: 'text-yellow-600' },
         hail: { emoji: '❄️', text: 'Hail', color: 'text-blue-200' },
         clear: null
      };
      return weatherInfo[weather];
   };

   const weatherDisplay = getWeatherDisplay();

   return React.createElement('div', {
      className: `battle-terrain relative overflow-hidden ${weather !== 'clear' ? `weather-${weather}` : ''}`
   }, [
      screenFlash && React.createElement('div', {
         key: 'screen-flash',
         className: 'fixed inset-0 pointer-events-none z-50',
         style: {
            backgroundColor: screenFlash.color,
            opacity: screenFlash.intensity,
            animation: `flash ${screenFlash.duration}ms ease-out forwards`
         }
      }),

      weatherDisplay && React.createElement('div', {
         key: 'weather-indicator',
         className: 'weather-indicator'
      }, React.createElement('span', {
         className: 'weather-text'
      }, `${weatherDisplay.emoji} ${weatherDisplay.text}`)),

      React.createElement('div', {
         key: 'turn-indicator',
         className: 'turn-indicator'
      }, `Turn ${turn}`),

      React.createElement('div', {
         key: 'battle-field',
         className: `relative h-96 ${cameraShake ? 'animate-damage-shake' : ''}`,
         style: {
            background: 'linear-gradient(to bottom, #87CEEB 0%, #98FB98 70%, #228B22 100%)'
         }
      }, [
         React.createElement('div', {
            key: 'enemy-area',
            className: 'absolute top-8 right-8'
         }, [
            React.createElement('div', {
               className: 'battle-platform mb-2'
            }),
            React.createElement('div', {
               className: 'relative'
            }, [
               React.createElement('img', {
                  src: enemyPokemon.sprite,
                  alt: enemyPokemon.name,
                  className: `w-32 h-32 pixelated ${
                     isAnimating ? 'animate-enemy-attack' : ''
                  } ${
                     enemyPokemon.hp === 0 ? 'animate-faint' : ''
                  }`,
                  style: {
                     filter: enemyPokemon.status ? `hue-rotate(${
                        { burn: '-20deg', poison: '280deg', paralysis: '60deg', freeze: '180deg' }[enemyPokemon.status] || '0deg'
                     })` : 'none'
                  }
               }),
               
               enemyPokemon.status && React.createElement('div', {
                  className: `status-effect-indicator status-${enemyPokemon.status}`
               }, enemyPokemon.status.toUpperCase().substr(0, 3))
            ])
         ]),

         React.createElement('div', {
            key: 'player-area',
            className: 'absolute bottom-8 left-8'
         }, [
            React.createElement('div', {
               className: 'battle-platform mb-2'
            }),
            React.createElement('div', {
               className: 'relative'
            }, [
               React.createElement('img', {
                  src: playerPokemon.spriteBack || playerPokemon.sprite,
                  alt: playerPokemon.name,
                  className: `w-40 h-40 pixelated ${
                     isAnimating ? 'animate-player-attack' : ''
                  } ${
                     playerPokemon.hp === 0 ? 'animate-faint' : ''
                  }`,
                  style: {
                     filter: playerPokemon.status ? `hue-rotate(${
                        { burn: '-20deg', poison: '280deg', paralysis: '60deg', freeze: '180deg' }[playerPokemon.status] || '0deg'
                     })` : 'none'
                  }
               }),
               
               playerPokemon.status && React.createElement('div', {
                  className: `status-effect-indicator status-${playerPokemon.status}`
               }, playerPokemon.status.toUpperCase().substr(0, 3))
            ])
         ]),

         React.createElement('div', {
            key: 'background-effects',
            className: 'absolute inset-0 pointer-events-none'
         }, [
            weather === 'rain' && React.createElement('div', {
               key: 'rain-effect',
               className: 'absolute inset-0',
               style: {
                  background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(174, 194, 224, 0.3) 2px, rgba(174, 194, 224, 0.3) 4px)',
                  animation: 'rain 0.3s linear infinite'
               }
            }),
            
            weather === 'sandstorm' && React.createElement('div', {
               key: 'sand-particles',
               className: 'absolute inset-0',
               style: {
                  background: 'radial-gradient(circle, rgba(194, 154, 108, 0.4) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  animation: 'sandstorm 8s linear infinite'
               }
            })
         ])
      ]),

      React.createElement('div', {
         key: 'battle-ui-overlay',
         className: 'absolute top-4 left-4 right-4 flex justify-between pointer-events-none'
      }, [
         React.createElement('div', {
            key: 'player-hp-display',
            className: 'bg-white/90 rounded-lg p-2 text-sm'
         }, [
           React.createElement('div', {
              className: 'font-bold'
           }, playerPokemon.name),
           React.createElement('div', {
              className: 'text-xs text-gray-600'
           }, `${playerPokemon.hp}/${playerPokemon.maxHp} HP`)
         ]),
         
         React.createElement('div', {
            key: 'enemy-hp-display',
            className: 'bg-white/90 rounded-lg p-2 text-sm'
         }, [
           React.createElement('div', {
              className: 'font-bold'
           }, enemyPokemon.name),
           React.createElement('div', {
              className: 'text-xs text-gray-600'
           }, `${enemyPokemon.hp}/${enemyPokemon.maxHp} HP`)
         ])
      ])
   ]);
};
