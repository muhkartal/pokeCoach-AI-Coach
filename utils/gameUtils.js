export function generateRandomId(length = 9) {
   return Math.random().toString(36).substr(2, length);
}

export function createPokemonTeam(pokemonIds, level = 50) {
   const team = [];
   
   pokemonIds.forEach(id => {
      const speciesData = window.POKEMON_DATA[id];
      if (speciesData) {
         const pokemon = new window.Pokemon(speciesData, level);
         team.push(pokemon);
      }
   });
   
   return team;
}

export function getRandomPokemon(count = 1, level = 50) {
   const allPokemon = Object.keys(window.POKEMON_DATA);
   const selectedIds = [];
   
   for (let i = 0; i < count; i++) {
      const randomId = allPokemon[Math.floor(Math.random() * allPokemon.length)];
      selectedIds.push(randomId);
   }
   
   return createPokemonTeam(selectedIds, level);
}

export function formatPokemonName(name) {
   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function getHPPercentage(pokemon) {
   return Math.floor((pokemon.hp / pokemon.maxHp) * 100);
}

export function getHPBarClass(pokemon) {
   const percentage = getHPPercentage(pokemon);
   
   if (percentage > 50) return "hp-bar-gradient-green";
   if (percentage > 20) return "hp-bar-gradient-yellow";
   return "hp-bar-gradient-red";
}

export function getPokemonStatusClass(pokemon) {
   const percentage = getHPPercentage(pokemon);
   
   if (pokemon.hp === 0) return "fainted";
   if (percentage <= 20) return "critical-hp";
   if (percentage <= 50) return "low-hp";
   return "healthy";
}

export function formatMoveType(type) {
   return `type-${type.toLowerCase()}`;
}

export function formatNumber(num) {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function clamp(value, min, max) {
   return Math.min(Math.max(value, min), max);
}

export function shuffle(array) {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
}

export function getWeatherClass(weather) {
   const weatherClasses = {
      rain: "weather-rain",
      sun: "weather-sun", 
      sandstorm: "weather-sandstorm",
      hail: "weather-hail",
      clear: ""
   };
   return weatherClasses[weather] || "";
}

export function validateTeam(team, format) {
   const errors = [];
   
   if (!team || team.length === 0) {
      errors.push("Team cannot be empty");
      return errors;
   }
   
   if (team.length !== format.teamSize) {
      errors.push(`Team must have exactly ${format.teamSize} Pokemon`);
   }
   
   const species = team.map(p => p.species);
   const uniqueSpecies = new Set(species);
   if (species.length !== uniqueSpecies.size && format.clauses.includes("species")) {
      errors.push("No duplicate Pokemon species allowed");
   }
   
   const sleepCount = team.filter(p => p.status === "sleep").length;
   if (sleepCount > 1 && format.clauses.includes("sleep")) {
      errors.push("Only one Pokemon can be asleep at a time");
   }
   
   return errors;
}

export function getStatColor(stat, base = 50) {
   if (stat >= base * 1.5) return "#4ade80";
   if (stat >= base * 1.2) return "#fbbf24"; 
   if (stat <= base * 0.8) return "#f87171";
   return "#9ca3af";
}

export function calculateStatTotal(pokemon) {
   const stats = pokemon.baseStats;
   return stats.hp + stats.attack + stats.defense + 
          stats.spAttack + stats.spDefense + stats.speed;
}
