export const BattleControls = ({ 
   pokemon, 
   onMoveSelect, 
   onSwitchSelect, 
   onCoach, 
   onRun,
   showMoves = true,
   showSwitch = false 
}) => {
   if (!pokemon) {
      return React.createElement('div', {
         className: 'text-center p-4 text-gray-500'
      }, 'Preparing battle controls...');
   }

   const renderMoveButton = (move, index) => {
      const isDisabled = !move || move.pp <= 0;
      
      return React.createElement('button', {
         key: index,
         className: `move-button ${isDisabled ? 'disabled' : ''}`,
         onClick: () => !isDisabled && onMoveSelect(index),
         disabled: isDisabled
      }, [
         React.createElement('div', {
            key: 'move-name',
            className: 'move-name'
         }, move ? move.name : 'No Move'),
         
         move && React.createElement('div', {
            key: 'move-details',
            className: 'move-details'
         }, [
            React.createElement('span', {
               key: 'type',
               className: `move-type-badge type-${move.type?.toLowerCase() || 'normal'}`
            }, move.type || 'Normal'),
            
            React.createElement('span', {
               key: 'pp',
               className: 'move-pp'
            }, `${move.pp}/${move.maxPp || move.pp}`)
         ])
      ]);
   };

   const renderMainControls = () => React.createElement('div', {
      className: 'battle-menu-grid grid grid-cols-2 gap-3'
   }, [
      React.createElement('button', {
         key: 'coach',
         className: 'battle-action-button coach',
         onClick: onCoach
      }, 'COACH'),
      
      React.createElement('button', {
         key: 'switch',
         className: 'battle-action-button switch',
         onClick: () => onSwitchSelect()
      }, 'SWITCH'),
      
      React.createElement('button', {
         key: 'run',
         className: 'battle-action-button run',
         onClick: onRun
      }, 'RUN')
   ]);

   const renderMoveSelection = () => React.createElement('div', {
      className: 'space-y-3'
   }, [
      React.createElement('h3', {
         key: 'title',
         className: 'text-lg font-bold text-center mb-3'
      }, 'Choose a move'),
      
      React.createElement('div', {
         key: 'moves',
         className: 'grid grid-cols-2 gap-3'
      }, Array.from({ length: 4 }, (_, index) => 
         renderMoveButton(pokemon.moves[index], index)
      )),
      
      React.createElement('button', {
         key: 'back',
         className: 'w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors',
         onClick: () => onMoveSelect(null)
      }, 'Back')
   ]);

   const renderSwitchSelection = () => {
      const availablePokemon = pokemon.battle?.playerTeam?.filter((p, index) => 
         index !== pokemon.battle.currentPlayerIndex && p.hp > 0
      ) || [];

      return React.createElement('div', {
         className: 'space-y-3'
      }, [
         React.createElement('h3', {
            key: 'title',
            className: 'text-lg font-bold text-center mb-3'
         }, 'Choose Pokemon to switch'),
         
         React.createElement('div', {
            key: 'pokemon-list',
            className: 'space-y-2'
         }, availablePokemon.length > 0 ? availablePokemon.map((switchPokemon, index) => {
            const originalIndex = pokemon.battle.playerTeam.findIndex(p => p.id === switchPokemon.id);
            
            return React.createElement('button', {
               key: switchPokemon.id,
               className: 'w-full p-3 bg-white rounded-lg border-2 border-gray-300 hover:border-blue-500 transition-colors text-left',
               onClick: () => onSwitchSelect(originalIndex)
            }, [
               React.createElement('div', {
                  className: 'flex items-center gap-3'
               }, [
                  React.createElement('img', {
                     src: switchPokemon.sprite,
                     alt: switchPokemon.name,
                     className: 'w-12 h-12 pixelated'
                  }),
                  
                  React.createElement('div', {
                     className: 'flex-1'
                  }, [
                     React.createElement('div', {
                        className: 'font-bold'
                     }, switchPokemon.name),
                     React.createElement('div', {
                        className: 'text-sm text-gray-600'
                     }, `HP: ${switchPokemon.hp}/${switchPokemon.maxHp}`),
                     React.createElement('div', {
                        className: 'flex gap-1 mt-1'
                     }, switchPokemon.types.map(type => 
                        React.createElement('span', {
                           key: type,
                           className: `px-1 py-0.5 rounded text-xs text-white type-${type.toLowerCase()}`
                        }, type)
                     ))
                  ])
               ])
            ]);
         }) : React.createElement('div', {
            className: 'text-center text-gray-500 py-4'
         }, 'No Pokemon available to switch')),
         
         React.createElement('button', {
            key: 'back',
            className: 'w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors',
            onClick: () => onSwitchSelect(null)
         }, 'Back')
      ]);
   };

   return React.createElement('div', {
      className: 'battle-ui-panel p-4'
   }, [
      React.createElement('div', {
         key: 'pokemon-info',
         className: 'mb-4 text-center'
      }, [
         React.createElement('h2', {
            className: 'text-xl font-bold mb-2'
         }, pokemon.nickname || pokemon.name),
         React.createElement('div', {
            className: 'text-sm text-gray-600'
         }, `Level ${pokemon.level} • HP: ${pokemon.hp}/${pokemon.maxHp}`)
      ]),

      React.createElement('div', {
         key: 'controls'
      }, showSwitch ? renderSwitchSelection() : showMoves ? renderMoveSelection() : renderMainControls())
   ]);
};
