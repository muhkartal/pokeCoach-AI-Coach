export const POKEMON_DATA = {
   Pikachu: {
      id: "pikachu",
      name: "Pikachu",
      types: ["Electric"],
      baseStats: {
         hp: 35,
         attack: 55,
         defense: 40,
         spAttack: 50,
         spDefense: 50,
         speed: 90,
      },
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
      spriteBack: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif",
      learnset: [
         { id: "thundershock", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "thunderbolt", level: 15 },
         { id: "irontail", level: 20 },
      ],
      abilities: ["static"],
   },
   Charmander: {
      id: "charmander",
      name: "Charmander",
      types: ["Fire"],
      baseStats: {
         hp: 39,
         attack: 52,
         defense: 43,
         spAttack: 60,
         spDefense: 50,
         speed: 65,
      },
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
      spriteBack: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif",
      learnset: [
         { id: "ember", level: 1 },
         { id: "scratch", level: 1 },
         { id: "smokescreen", level: 4 },
         { id: "dragonbreath", level: 12 },
         { id: "flamethrower", level: 20 },
      ],
      abilities: ["blaze"],
   },
   Bulbasaur: {
      id: "bulbasaur",
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 45,
         attack: 49,
         defense: 49,
         spAttack: 65,
         spDefense: 65,
         speed: 45,
      },
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
      spriteBack: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
      learnset: [
         { id: "vinewhip", level: 1 },
         { id: "tackle", level: 1 },
         { id: "razorleaf", level: 12 },
         { id: "sleeppowder", level: 13 },
         { id: "sludgebomb", level: 20 },
      ],
      abilities: ["overgrow"],
   },
   Squirtle: {
      id: "squirtle",
      name: "Squirtle",
      types: ["Water"],
      baseStats: {
         hp: 44,
         attack: 48,
         defense: 65,
         spAttack: 50,
         spDefense: 64,
         speed: 43,
      },
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
      spriteBack: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/7.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "tackle", level: 1 },
         { id: "bite", level: 12 },
         { id: "icebeam", level: 20 },
         { id: "surf", level: 25 },
      ],
      abilities: ["torrent"],
   },
};

if (typeof window !== 'undefined' && typeof window.EXTENDED_POKEMON_DATA !== 'undefined') {
   Object.assign(POKEMON_DATA, window.EXTENDED_POKEMON_DATA);
   console.log('Extended Pokemon data loaded! Total Pokemon:', Object.keys(POKEMON_DATA).length);
}
