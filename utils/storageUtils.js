export function saveGameData(data) {
   try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem('pokemonSaveData', serializedData);
      return true;
   } catch (error) {
      console.error('Failed to save game data:', error);
      return false;
   }
}

export function loadGameData() {
   try {
      const serializedData = localStorage.getItem('pokemonSaveData');
      if (serializedData === null) {
         return null;
      }
      return JSON.parse(serializedData);
   } catch (error) {
      console.error('Failed to load game data:', error);
      return null;
   }
}

export function clearGameData() {
   try {
      localStorage.removeItem('pokemonSaveData');
      return true;
   } catch (error) {
      console.error('Failed to clear game data:', error);
      return false;
   }
}

export function saveTeam(team, teamName = 'default') {
   try {
      const teamData = team.map(pokemon => ({
         species: pokemon.species,
         level: pokemon.level,
         moves: pokemon.moves.map(move => ({
            id: move.id,
            name: move.name,
            pp: move.maxPp
         })),
         ability: pokemon.ability,
         heldItem: pokemon.heldItem,
         nickname: pokemon.nickname || pokemon.name
      }));

      const teams = getStoredTeams();
      teams[teamName] = {
         data: teamData,
         created: new Date().toISOString(),
         lastUsed: new Date().toISOString()
      };

      localStorage.setItem('pokemonTeams', JSON.stringify(teams));
      return true;
   } catch (error) {
      console.error('Failed to save team:', error);
      return false;
   }
}

export function loadTeam(teamName = 'default') {
   try {
      const teams = getStoredTeams();
      const teamInfo = teams[teamName];
      
      if (!teamInfo) {
         return null;
      }

      const team = teamInfo.data.map(pokemonData => {
         const speciesData = window.POKEMON_DATA[pokemonData.species];
         if (!speciesData) {
            console.warn(`Species ${pokemonData.species} not found`);
            return null;
         }

         const pokemon = new window.Pokemon(speciesData, pokemonData.level);
         
         if (pokemonData.nickname) {
            pokemon.nickname = pokemonData.nickname;
         }
         
         if (pokemonData.ability) {
            pokemon.ability = pokemonData.ability;
         }
         
         if (pokemonData.heldItem) {
            pokemon.heldItem = pokemonData.heldItem;
         }

         pokemon.moves = pokemonData.moves.map(moveData => {
            const moveTemplate = window.MOVES_DATA[moveData.id];
            if (moveTemplate) {
               const move = { ...moveTemplate };
               move.pp = moveData.pp;
               move.maxPp = moveData.pp;
               return move;
            }
            return null;
         }).filter(move => move !== null);

         return pokemon;
      }).filter(pokemon => pokemon !== null);

      teams[teamName].lastUsed = new Date().toISOString();
      localStorage.setItem('pokemonTeams', JSON.stringify(teams));

      return team;
   } catch (error) {
      console.error('Failed to load team:', error);
      return null;
   }
}

export function getStoredTeams() {
   try {
      const teams = localStorage.getItem('pokemonTeams');
      return teams ? JSON.parse(teams) : {};
   } catch (error) {
      console.error('Failed to get stored teams:', error);
      return {};
   }
}

export function deleteTeam(teamName) {
   try {
      const teams = getStoredTeams();
      delete teams[teamName];
      localStorage.setItem('pokemonTeams', JSON.stringify(teams));
      return true;
   } catch (error) {
      console.error('Failed to delete team:', error);
      return false;
   }
}

export function saveSettings(settings) {
   try {
      localStorage.setItem('pokemonSettings', JSON.stringify(settings));
      return true;
   } catch (error) {
      console.error('Failed to save settings:', error);
      return false;
   }
}

export function loadSettings() {
   try {
      const settings = localStorage.getItem('pokemonSettings');
      return settings ? JSON.parse(settings) : getDefaultSettings();
   } catch (error) {
      console.error('Failed to load settings:', error);
      return getDefaultSettings();
   }
}

export function getDefaultSettings() {
   return {
      soundEnabled: true,
      musicEnabled: true,
      battleSpeed: 'normal',
      textSpeed: 'normal',
      autoAdvanceText: true,
      showDamageNumbers: true,
      showTypeEffectiveness: true,
      showCoachByDefault: false,
      coachDetailLevel: 'basic',
      theme: 'classic'
   };
}

export function saveBattleHistory(battleResult) {
   try {
      const history = getBattleHistory();
      const battleRecord = {
         id: Date.now().toString(),
         date: new Date().toISOString(),
         result: battleResult.result,
         playerTeam: battleResult.playerTeam.map(p => p.species),
         enemyTeam: battleResult.enemyTeam.map(p => p.species),
         turns: battleResult.turns,
         duration: battleResult.duration
      };

      history.unshift(battleRecord);
      
      if (history.length > 50) {
         history.splice(50);
      }

      localStorage.setItem('pokemonBattleHistory', JSON.stringify(history));
      return true;
   } catch (error) {
      console.error('Failed to save battle history:', error);
      return false;
   }
}

export function getBattleHistory() {
   try {
      const history = localStorage.getItem('pokemonBattleHistory');
      return history ? JSON.parse(history) : [];
   } catch (error) {
      console.error('Failed to get battle history:', error);
      return [];
   }
}

export function clearBattleHistory() {
   try {
      localStorage.removeItem('pokemonBattleHistory');
      return true;
   } catch (error) {
      console.error('Failed to clear battle history:', error);
      return false;
   }
}
