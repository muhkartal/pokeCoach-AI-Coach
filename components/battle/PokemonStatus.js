import { getHPPercentage, getHPBarClass, getPokemonStatusClass } from '../../utils/gameUtils.js';

export const PokemonStatus = ({ pokemon, isPlayer = false }) => {
   if (!pokemon) {
      return React.createElement('div', {
         className: 'text-center text-gray-500 p-4'
      }, 'Loading Pokemon...');
   }

   const hpPercentage = getHPPercentage(pokemon);
   const hpBarClass = getHPBarClass(pokemon);
   const statusClass = getPokemonStatusClass(pokemon);

   return React.createElement('div', {
      className: `pokemon-info-card p-4 ${statusClass}`
   }, [
      React.createElement('div', {
         key: 'pokemon-header',
         className: 'flex justify-between items-start mb-3'
      }, [
         React.createElement('div', null, [
            React.createElement('h3', {
               key: 'name',
               className: 'text-lg font-bold'
            }, pokemon.nickname || pokemon.name),
            React.createElement('div', {
               key: 'level',
               className: 'text-sm text-gray-600'
            }, `Lv.${pokemon.level}`)
         ]),
         
         React.createElement('div', {
            key: 'status-indicator',
            className: 'relative'
         }, [
            pokemon.status && React.createElement('div', {
               className: `status-effect-indicator status-${pokemon.status}`
            }, pokemon.status.toUpperCase().substr(0, 3)),
            
            React.createElement('div', {
               className: 'flex gap-1 mt-1'
            }, pokemon.types.map(type => 
               React.createElement('span', {
                  key: type,
                  className: `px-2 py-1 rounded text-xs text-white type-${type.toLowerCase()}`
               }, type)
            ))
         ])
      ]),

      React.createElement('div', {
         key: 'hp-section',
         className: 'mb-3'
      }, [
         React.createElement('div', {
            className: 'flex justify-between text-sm mb-1'
         }, [
            React.createElement('span', null, 'HP'),
            React.createElement('span', null, `${pokemon.hp}/${pokemon.maxHp}`)
         ]),
         
         React.createElement('div', {
            className: 'hp-bar-container'
         }, React.createElement('div', {
            className: `hp-bar-fill ${hpBarClass}`,
            style: { width: `${hpPercentage}%` }
         }))
      ]),

      pokemon.ability && React.createElement('div', {
         key: 'ability',
         className: 'text-xs text-gray-600 mb-2'
      }, [
         React.createElement('span', {
            className: 'font-medium'
         }, 'Ability: '),
         React.createElement('span', null, pokemon.ability.data?.name || pokemon.ability.id)
      ]),

      React.createElement('div', {
         key: 'stats-preview',
         className: 'grid grid-cols-3 gap-2 text-xs'
      }, [
         React.createElement('div', {
            key: 'attack',
            className: 'text-center'
         }, [
            React.createElement('div', {
               className: 'font-medium text-red-600'
            }, pokemon.getBoostedStat('attack')),
            React.createElement('div', {
               className: 'text-gray-500'
            }, 'ATK')
         ]),
         
         React.createElement('div', {
            key: 'defense',
            className: 'text-center'
         }, [
            React.createElement('div', {
               className: 'font-medium text-blue-600'
            }, pokemon.getBoostedStat('defense')),
            React.createElement('div', {
               className: 'text-gray-500'
            }, 'DEF')
         ]),
         
         React.createElement('div', {
            key: 'speed',
            className: 'text-center'
         }, [
            React.createElement('div', {
               className: 'font-medium text-yellow-600'
            }, pokemon.getBoostedStat('speed')),
            React.createElement('div', {
               className: 'text-gray-500'
            }, 'SPD')
         ])
      ]),

      Object.keys(pokemon.statStages).some(stat => pokemon.statStages[stat] !== 0) &&
      React.createElement('div', {
         key: 'stat-changes',
         className: 'mt-2 text-xs'
      }, [
         React.createElement('div', {
            className: 'text-gray-600 mb-1'
         }, 'Stat Changes:'),
         
         React.createElement('div', {
            className: 'flex flex-wrap gap-1'
         }, Object.entries(pokemon.statStages)
            .filter(([_, stage]) => stage !== 0)
            .map(([stat, stage]) => 
               React.createElement('span', {
                  key: stat,
                  className: `px-1 py-0.5 rounded text-xs ${
                     stage > 0 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                  }`
               }, `${stat.toUpperCase()} ${stage > 0 ? '+' : ''}${stage}`)
            )
         )
      ])
   ]);
};
