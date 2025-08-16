export const TeamBuilder = ({ onConfirm, onBack, format }) => {
   const [selectedTeam, setSelectedTeam] = React.useState([]);
   const [searchTerm, setSearchTerm] = React.useState("");
   const [selectedPokemon, setSelectedPokemon] = React.useState(null);

   const availablePokemon = React.useMemo(() => {
      const allPokemon = Object.values(window.POKEMON_DATA || {});
      if (!searchTerm) return allPokemon;
      
      return allPokemon.filter(pokemon => 
         pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         pokemon.types.some(type => type.toLowerCase().includes(searchTerm.toLowerCase()))
      );
   }, [searchTerm]);

   const addPokemonToTeam = (pokemonData) => {
      if (selectedTeam.length >= format.teamSize) {
         alert(`Team is full! Maximum ${format.teamSize} Pokemon allowed.`);
         return;
      }

      if (format.clauses.includes("species") && 
          selectedTeam.some(p => p.species === pokemonData.id)) {
         alert("This Pokemon is already on your team!");
         return;
      }

      const pokemon = new window.Pokemon(pokemonData, 50);
      setSelectedTeam([...selectedTeam, pokemon]);
   };

   const removePokemonFromTeam = (index) => {
      setSelectedTeam(selectedTeam.filter((_, i) => i !== index));
   };

   const handleConfirm = () => {
      if (selectedTeam.length !== format.teamSize) {
         alert(`Please select exactly ${format.teamSize} Pokemon for your team.`);
         return;
      }
      onConfirm(selectedTeam);
   };

   return React.createElement('div', {
      className: 'min-h-screen p-4 bg-gradient-to-br from-blue-600 to-purple-700'
   }, [
      React.createElement('div', {
         key: 'header',
         className: 'max-w-6xl mx-auto mb-6'
      }, [
         React.createElement('div', {
            className: 'flex justify-between items-center mb-4'
         }, [
            React.createElement('h1', {
               className: 'text-4xl text-white font-bold',
               style: { textShadow: '2px 2px 0 #000' }
            }, 'Team Builder'),
            
            React.createElement('button', {
               onClick: onBack,
               className: 'px-4 py-2 bg-gray-600 text-white rounded-lg border-2 border-black hover:bg-gray-700 transition-colors'
            }, 'Back to Menu')
         ]),

         React.createElement('div', {
            className: 'text-white mb-4',
            style: { textShadow: '1px 1px 0 #000' }
         }, [
            React.createElement('p', null, `Format: ${format.name}`),
            React.createElement('p', null, `Team Size: ${selectedTeam.length}/${format.teamSize}`),
            format.clauses.length > 0 && React.createElement('p', {
               className: 'text-sm text-gray-200'
            }, `Rules: ${format.clauses.join(', ')} clause${format.clauses.length > 1 ? 's' : ''}`)
         ])
      ]),

      React.createElement('div', {
         key: 'content',
         className: 'max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'
      }, [
         React.createElement('div', {
            key: 'pokemon-selection',
            className: 'lg:col-span-2'
         }, [
            React.createElement('div', {
               className: 'bg-white/90 rounded-lg p-4 mb-4'
            }, [
               React.createElement('input', {
                  type: 'text',
                  placeholder: 'Search Pokemon by name or type...',
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: 'w-full p-3 border-2 border-gray-300 rounded-lg text-lg'
               })
            ]),

            React.createElement('div', {
               className: 'bg-white/90 rounded-lg p-4 max-h-96 overflow-y-auto custom-scrollbar'
            }, [
               React.createElement('div', {
                  className: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'
               }, availablePokemon.map(pokemon => 
                  React.createElement('div', {
                     key: pokemon.id,
                     className: 'bg-white rounded-lg p-3 border-2 border-gray-300 hover:border-blue-500 cursor-pointer transition-all transform hover:scale-105',
                     onClick: () => setSelectedPokemon(pokemon)
                  }, [
                     React.createElement('img', {
                        src: pokemon.sprite,
                        alt: pokemon.name,
                        className: 'w-16 h-16 mx-auto mb-2 pixelated'
                     }),
                     React.createElement('div', {
                        className: 'text-center'
                     }, [
                        React.createElement('div', {
                           className: 'font-bold text-sm mb-1'
                        }, pokemon.name),
                        React.createElement('div', {
                           className: 'flex justify-center gap-1'
                        }, pokemon.types.map(type => 
                           React.createElement('span', {
                              key: type,
                              className: `px-2 py-1 rounded text-xs text-white type-${type.toLowerCase()}`
                           }, type)
                        ))
                     ])
                  ])
               ))
            ])
         ]),

         React.createElement('div', {
            key: 'team-panel',
            className: 'space-y-4'
         }, [
            React.createElement('div', {
               className: 'bg-white/90 rounded-lg p-4'
            }, [
               React.createElement('h3', {
                  className: 'text-xl font-bold mb-3'
               }, 'Your Team'),
               
               React.createElement('div', {
                  className: 'space-y-2'
               }, Array.from({ length: format.teamSize }, (_, index) => {
                  const pokemon = selectedTeam[index];
                  return React.createElement('div', {
                     key: index,
                     className: `p-3 rounded-lg border-2 border-dashed ${
                        pokemon ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'
                     }`
                  }, pokemon ? [
                     React.createElement('div', {
                        key: 'pokemon-info',
                        className: 'flex items-center justify-between'
                     }, [
                        React.createElement('div', {
                           className: 'flex items-center gap-2'
                        }, [
                           React.createElement('img', {
                              src: pokemon.sprite,
                              alt: pokemon.name,
                              className: 'w-8 h-8 pixelated'
                           }),
                           React.createElement('span', {
                              className: 'font-medium'
                           }, pokemon.name)
                        ]),
                        React.createElement('button', {
                           onClick: () => removePokemonFromTeam(index),
                           className: 'text-red-500 hover:text-red-700 font-bold'
                        }, '×')
                     ])
                  ] : React.createElement('div', {
                     className: 'text-center text-gray-500 py-2'
                  }, `Slot ${index + 1}`));
               }))
            ]),

            selectedPokemon && React.createElement('div', {
               className: 'bg-white/90 rounded-lg p-4'
            }, [
               React.createElement('h4', {
                  className: 'text-lg font-bold mb-3'
               }, 'Pokemon Details'),
               
               React.createElement('div', {
                  className: 'text-center mb-3'
               }, [
                  React.createElement('img', {
                     src: selectedPokemon.sprite,
                     alt: selectedPokemon.name,
                     className: 'w-20 h-20 mx-auto mb-2 pixelated'
                  }),
                  React.createElement('div', {
                     className: 'font-bold text-lg'
                  }, selectedPokemon.name),
                  React.createElement('div', {
                     className: 'flex justify-center gap-1 mt-1'
                  }, selectedPokemon.types.map(type => 
                     React.createElement('span', {
                        key: type,
                        className: `px-2 py-1 rounded text-xs text-white type-${type.toLowerCase()}`
                     }, type)
                  ))
               ]),

               React.createElement('div', {
                  className: 'text-sm space-y-1'
               }, [
                  React.createElement('div', null, `HP: ${selectedPokemon.baseStats.hp}`),
                  React.createElement('div', null, `Attack: ${selectedPokemon.baseStats.attack}`),
                  React.createElement('div', null, `Defense: ${selectedPokemon.baseStats.defense}`),
                  React.createElement('div', null, `Sp. Attack: ${selectedPokemon.baseStats.spAttack}`),
                  React.createElement('div', null, `Sp. Defense: ${selectedPokemon.baseStats.spDefense}`),
                  React.createElement('div', null, `Speed: ${selectedPokemon.baseStats.speed}`)
               ]),

               React.createElement('button', {
                  onClick: () => addPokemonToTeam(selectedPokemon),
                  className: 'w-full mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors',
                  disabled: selectedTeam.length >= format.teamSize
               }, 'Add to Team')
            ]),

            React.createElement('button', {
               onClick: handleConfirm,
               disabled: selectedTeam.length !== format.teamSize,
               className: `w-full px-6 py-3 rounded-lg font-bold text-white transition-colors ${
                  selectedTeam.length === format.teamSize
                     ? 'bg-green-500 hover:bg-green-600'
                     : 'bg-gray-400 cursor-not-allowed'
               }`
            }, 'Start Battle!')
         ])
      ])
   ]);
};
