// Extended Pokemon Data - 50+ Additional Pokemon
const EXTENDED_POKEMON_DATA = {
   // Generation 1 - Additional
   Wartortle: {
      id: "wartortle",
      name: "Wartortle",
      types: ["Water"],
      baseStats: {
         hp: 59,
         attack: 63,
         defense: 80,
         spAttack: 65,
         spDefense: 80,
         speed: 58,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/8.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "tackle", level: 1 },
         { id: "bite", level: 16 },
         { id: "icebeam", level: 25 },
         { id: "surf", level: 30 },
      ],
      abilities: ["torrent"],
   },

   Ivysaur: {
      id: "ivysaur",
      name: "Ivysaur",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 60,
         attack: 62,
         defense: 63,
         spAttack: 80,
         spDefense: 80,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif",
      learnset: [
         { id: "vinewhip", level: 1 },
         { id: "tackle", level: 1 },
         { id: "razorleaf", level: 18 },
         { id: "sleeppowder", level: 20 },
         { id: "sludgebomb", level: 25 },
      ],
      abilities: ["overgrow"],
   },

   Charmeleon: {
      id: "charmeleon",
      name: "Charmeleon",
      types: ["Fire"],
      baseStats: {
         hp: 58,
         attack: 64,
         defense: 58,
         spAttack: 80,
         spDefense: 65,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/5.gif",
      learnset: [
         { id: "ember", level: 1 },
         { id: "scratch", level: 1 },
         { id: "dragonbreath", level: 20 },
         { id: "flamethrower", level: 25 },
         { id: "fireblast", level: 30 },
      ],
      abilities: ["blaze"],
   },

   Rapidash: {
      id: "rapidash",
      name: "Rapidash",
      types: ["Fire"],
      baseStats: {
         hp: 65,
         attack: 100,
         defense: 70,
         spAttack: 80,
         spDefense: 80,
         speed: 105,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/78.gif",
      learnset: [
         { id: "flamethrower", level: 1 },
         { id: "megahorn", level: 1 },
         { id: "solarbeam", level: 1 },
         { id: "poisonjab", level: 35 },
         { id: "fireblast", level: 40 },
      ],
      abilities: ["runaway", "flashfire"],
   },

   Slowbro: {
      id: "slowbro",
      name: "Slowbro",
      types: ["Water", "Psychic"],
      baseStats: {
         hp: 95,
         attack: 75,
         defense: 110,
         spAttack: 100,
         spDefense: 80,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/80.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/80.gif",
      learnset: [
         { id: "psychic", level: 1 },
         { id: "surf", level: 1 },
         { id: "icebeam", level: 1 },
         { id: "flamethrower", level: 35 },
         { id: "calmmind", level: 40 },
      ],
      abilities: ["oblivious", "ownTempo"],
   },

   Magneton: {
      id: "magneton",
      name: "Magneton",
      types: ["Electric", "Steel"],
      baseStats: {
         hp: 50,
         attack: 60,
         defense: 95,
         spAttack: 120,
         spDefense: 70,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/82.gif",
      learnset: [
         { id: "thunderbolt", level: 1 },
         { id: "flashcannon", level: 1 },
         { id: "triattack", level: 1 },
         { id: "zapcannon", level: 45 },
         { id: "magnetrise", level: 50 },
      ],
      abilities: ["magnetpull", "sturdy"],
   },

   Farfetchd: {
      id: "farfetchd",
      name: "Farfetch'd",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 52,
         attack: 90,
         defense: 55,
         spAttack: 58,
         spDefense: 62,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/83.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/83.gif",
      learnset: [
         { id: "airslash", level: 1 },
         { id: "leafblade", level: 1 },
         { id: "nightslash", level: 1 },
         { id: "bravebird", level: 40 },
         { id: "swordsdance", level: 35 },
      ],
      abilities: ["keeneye", "innerfocus"],
   },

   Dodrio: {
      id: "dodrio",
      name: "Dodrio",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 60,
         attack: 110,
         defense: 70,
         spAttack: 60,
         spDefense: 60,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/85.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/85.gif",
      learnset: [
         { id: "triattack", level: 1 },
         { id: "drillpeck", level: 1 },
         { id: "jumpkick", level: 30 },
         { id: "agility", level: 35 },
         { id: "bravebird", level: 45 },
      ],
      abilities: ["runaway", "earlybird"],
   },

   Dewgong: {
      id: "dewgong",
      name: "Dewgong",
      types: ["Water", "Ice"],
      baseStats: {
         hp: 90,
         attack: 70,
         defense: 80,
         spAttack: 70,
         spDefense: 95,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/87.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/87.gif",
      learnset: [
         { id: "icebeam", level: 1 },
         { id: "surf", level: 1 },
         { id: "aurorabeam", level: 25 },
         { id: "blizzard", level: 40 },
         { id: "rest", level: 30 },
      ],
      abilities: ["thickfat", "hydration"],
   },

   Muk: {
      id: "muk",
      name: "Muk",
      types: ["Poison"],
      baseStats: {
         hp: 105,
         attack: 105,
         defense: 75,
         spAttack: 65,
         spDefense: 100,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/89.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/89.gif",
      learnset: [
         { id: "sludgebomb", level: 1 },
         { id: "toxic", level: 1 },
         { id: "gigadrain", level: 25 },
         { id: "shadowsneak", level: 30 },
         { id: "gunkshot", level: 40 },
      ],
      abilities: ["stench", "stickyhold"],
   },

   Cloyster: {
      id: "cloyster",
      name: "Cloyster",
      types: ["Water", "Ice"],
      baseStats: {
         hp: 50,
         attack: 95,
         defense: 180,
         spAttack: 85,
         spDefense: 45,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/91.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/91.gif",
      learnset: [
         { id: "shellsmash", level: 1 },
         { id: "icebeam", level: 1 },
         { id: "hydropump", level: 1 },
         { id: "razorshell", level: 35 },
         { id: "iciclespear", level: 40 },
      ],
      abilities: ["shellarmor", "skilllink"],
   },

   Hypno: {
      id: "hypno",
      name: "Hypno",
      types: ["Psychic"],
      baseStats: {
         hp: 85,
         attack: 73,
         defense: 70,
         spAttack: 73,
         spDefense: 115,
         speed: 67,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/97.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/97.gif",
      learnset: [
         { id: "psychic", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "dreameater", level: 25 },
         { id: "shadowball", level: 30 },
         { id: "calmmind", level: 35 },
      ],
      abilities: ["insomnia", "forewarn"],
   },

   Kingler: {
      id: "kingler",
      name: "Kingler",
      types: ["Water"],
      baseStats: {
         hp: 55,
         attack: 130,
         defense: 115,
         spAttack: 50,
         spDefense: 50,
         speed: 75,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/99.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/99.gif",
      learnset: [
         { id: "crabhammer", level: 1 },
         { id: "surf", level: 1 },
         { id: "superpower", level: 30 },
         { id: "xscissor", level: 35 },
         { id: "guillotine", level: 45 },
      ],
      abilities: ["hypercutter", "shellarmor"],
   },

   Electrode: {
      id: "electrode",
      name: "Electrode",
      types: ["Electric"],
      baseStats: {
         hp: 60,
         attack: 50,
         defense: 70,
         spAttack: 80,
         spDefense: 80,
         speed: 150,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/101.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/101.gif",
      learnset: [
         { id: "thunderbolt", level: 1 },
         { id: "explosion", level: 1 },
         { id: "magnetrise", level: 25 },
         { id: "taunt", level: 30 },
         { id: "thunder", level: 40 },
      ],
      abilities: ["soundproof", "static"],
   },

   Exeggutor: {
      id: "exeggutor",
      name: "Exeggutor",
      types: ["Grass", "Psychic"],
      baseStats: {
         hp: 95,
         attack: 95,
         defense: 85,
         spAttack: 125,
         spDefense: 75,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/103.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/103.gif",
      learnset: [
         { id: "psychic", level: 1 },
         { id: "solarbeam", level: 1 },
         { id: "sleeppowder", level: 1 },
         { id: "gigadrain", level: 35 },
         { id: "leafstorm", level: 45 },
      ],
      abilities: ["chlorophyll"],
   },

   Marowak: {
      id: "marowak",
      name: "Marowak",
      types: ["Ground"],
      baseStats: {
         hp: 60,
         attack: 80,
         defense: 110,
         spAttack: 50,
         spDefense: 80,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/105.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/105.gif",
      learnset: [
         { id: "bonemerang", level: 1 },
         { id: "earthquake", level: 1 },
         { id: "flareblitz", level: 30 },
         { id: "shadowbone", level: 35 },
         { id: "swordsdance", level: 25 },
      ],
      abilities: ["rockhead", "lightningrod"],
   },

   Hitmonlee: {
      id: "hitmonlee",
      name: "Hitmonlee",
      types: ["Fighting"],
      baseStats: {
         hp: 50,
         attack: 120,
         defense: 53,
         spAttack: 35,
         spDefense: 110,
         speed: 87,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/106.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/106.gif",
      learnset: [
         { id: "highjumpkick", level: 1 },
         { id: "blazekick", level: 1 },
         { id: "megakick", level: 25 },
         { id: "earthquake", level: 30 },
         { id: "stoneedge", level: 35 },
      ],
      abilities: ["limber", "reckless"],
   },

   Hitmonchan: {
      id: "hitmonchan",
      name: "Hitmonchan",
      types: ["Fighting"],
      baseStats: {
         hp: 50,
         attack: 105,
         defense: 79,
         spAttack: 35,
         spDefense: 110,
         speed: 76,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/107.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/107.gif",
      learnset: [
         { id: "firepunch", level: 1 },
         { id: "icepunch", level: 1 },
         { id: "thunderpunch", level: 1 },
         { id: "machpunch", level: 25 },
         { id: "focuspunch", level: 35 },
      ],
      abilities: ["keeneye", "ironfist"],
   },

   Lickitung: {
      id: "lickitung",
      name: "Lickitung",
      types: ["Normal"],
      baseStats: {
         hp: 90,
         attack: 55,
         defense: 75,
         spAttack: 60,
         spDefense: 75,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/108.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/108.gif",
      learnset: [
         { id: "lick", level: 1 },
         { id: "bodyslam", level: 1 },
         { id: "earthquake", level: 25 },
         { id: "fireblast", level: 30 },
         { id: "powerwhip", level: 35 },
      ],
      abilities: ["ownTempo", "oblivious"],
   },

   Weezing: {
      id: "weezing",
      name: "Weezing",
      types: ["Poison"],
      baseStats: {
         hp: 65,
         attack: 90,
         defense: 120,
         spAttack: 85,
         spDefense: 70,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/110.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/110.gif",
      learnset: [
         { id: "sludgebomb", level: 1 },
         { id: "explosion", level: 1 },
         { id: "fireblast", level: 25 },
         { id: "haze", level: 20 },
         { id: "willowisp", level: 30 },
      ],
      abilities: ["levitate"],
   },

   Rhyhorn: {
      id: "rhyhorn",
      name: "Rhyhorn",
      types: ["Ground", "Rock"],
      baseStats: {
         hp: 80,
         attack: 85,
         defense: 95,
         spAttack: 30,
         spDefense: 30,
         speed: 25,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/111.gif",
      learnset: [
         { id: "hornattack", level: 1 },
         { id: "earthquake", level: 25 },
         { id: "stoneedge", level: 30 },
         { id: "megahorn", level: 35 },
         { id: "rockwrecker", level: 45 },
      ],
      abilities: ["lightningrod", "rockhead"],
   },

   Rhydon: {
      id: "rhydon",
      name: "Rhydon",
      types: ["Ground", "Rock"],
      baseStats: {
         hp: 105,
         attack: 130,
         defense: 120,
         spAttack: 45,
         spDefense: 45,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/112.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/112.gif",
      learnset: [
         { id: "earthquake", level: 1 },
         { id: "stoneedge", level: 1 },
         { id: "megahorn", level: 1 },
         { id: "icepunch", level: 30 },
         { id: "superpower", level: 40 },
      ],
      abilities: ["lightningrod", "rockhead"],
   },

   Chansey: {
      id: "chansey",
      name: "Chansey",
      types: ["Normal"],
      baseStats: {
         hp: 250,
         attack: 5,
         defense: 5,
         spAttack: 35,
         spDefense: 105,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/113.gif",
      learnset: [
         { id: "softboiled", level: 1 },
         { id: "aromatherapy", level: 1 },
         { id: "toxic", level: 20 },
         { id: "thunder", level: 25 },
         { id: "icebeam", level: 30 },
      ],
      abilities: ["naturalcure", "serenegrace"],
   },

   Tangela: {
      id: "tangela",
      name: "Tangela",
      types: ["Grass"],
      baseStats: {
         hp: 65,
         attack: 55,
         defense: 115,
         spAttack: 100,
         spDefense: 40,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/114.gif",
      learnset: [
         { id: "vinewhip", level: 1 },
         { id: "poisonpowder", level: 1 },
         { id: "gigadrain", level: 25 },
         { id: "ancientpower", level: 30 },
         { id: "powerwhip", level: 40 },
      ],
      abilities: ["chlorophyll", "leafguard"],
   },

   Kangaskhan: {
      id: "kangaskhan",
      name: "Kangaskhan",
      types: ["Normal"],
      baseStats: {
         hp: 105,
         attack: 95,
         defense: 80,
         spAttack: 40,
         spDefense: 80,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/115.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/115.gif",
      learnset: [
         { id: "cometpunch", level: 1 },
         { id: "earthquake", level: 1 },
         { id: "hammerarm", level: 25 },
         { id: "crunch", level: 30 },
         { id: "outrage", level: 40 },
      ],
      abilities: ["earlybird", "scrappy"],
   },

   Horsea: {
      id: "horsea",
      name: "Horsea",
      types: ["Water"],
      baseStats: {
         hp: 30,
         attack: 40,
         defense: 70,
         spAttack: 70,
         spDefense: 25,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/116.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/116.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "smokescreen", level: 8 },
         { id: "twister", level: 15 },
         { id: "icebeam", level: 25 },
         { id: "hydropump", level: 35 },
      ],
      abilities: ["swiftswim", "sniper"],
   },

   Seadra: {
      id: "seadra",
      name: "Seadra",
      types: ["Water"],
      baseStats: {
         hp: 55,
         attack: 65,
         defense: 95,
         spAttack: 95,
         spDefense: 45,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/117.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/117.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "aurorabeam", level: 1 },
         { id: "hydropump", level: 1 },
         { id: "dragonpulse", level: 30 },
         { id: "icebeam", level: 35 },
      ],
      abilities: ["poisonpoint", "sniper"],
   },

   Goldeen: {
      id: "goldeen",
      name: "Goldeen",
      types: ["Water"],
      baseStats: {
         hp: 45,
         attack: 67,
         defense: 60,
         spAttack: 35,
         spDefense: 50,
         speed: 63,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/118.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/118.gif",
      learnset: [
         { id: "hornattack", level: 1 },
         { id: "waterfall", level: 15 },
         { id: "supersonic", level: 10 },
         { id: "aquaring", level: 25 },
         { id: "megahorn", level: 35 },
      ],
      abilities: ["swiftswim", "waterveil"],
   },

   Seaking: {
      id: "seaking",
      name: "Seaking",
      types: ["Water"],
      baseStats: {
         hp: 80,
         attack: 92,
         defense: 65,
         spAttack: 65,
         spDefense: 80,
         speed: 68,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/119.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/119.gif",
      learnset: [
         { id: "hornattack", level: 1 },
         { id: "waterfall", level: 1 },
         { id: "megahorn", level: 1 },
         { id: "poisonjab", level: 30 },
         { id: "drillrun", level: 35 },
      ],
      abilities: ["swiftswim", "waterveil"],
   },

   Staryu: {
      id: "staryu",
      name: "Staryu",
      types: ["Water"],
      baseStats: {
         hp: 30,
         attack: 45,
         defense: 55,
         spAttack: 70,
         spDefense: 55,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/120.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "rapidspin", level: 10 },
         { id: "psychic", level: 20 },
         { id: "hydropump", level: 30 },
         { id: "thunderbolt", level: 35 },
      ],
      abilities: ["illuminate", "naturalcure"],
   },

   MrMime: {
      id: "mrmime",
      name: "Mr. Mime",
      types: ["Psychic", "Fairy"],
      baseStats: {
         hp: 40,
         attack: 45,
         defense: 65,
         spAttack: 100,
         spDefense: 120,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/122.gif",
      learnset: [
         { id: "psychic", level: 1 },
         { id: "lightscreen", level: 1 },
         { id: "reflect", level: 1 },
         { id: "dazzlinggleam", level: 30 },
         { id: "focusblast", level: 35 },
      ],
      abilities: ["soundproof", "filter"],
   },

   Scyther: {
      id: "scyther",
      name: "Scyther",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 70,
         attack: 110,
         defense: 80,
         spAttack: 55,
         spDefense: 80,
         speed: 105,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/123.gif",
      learnset: [
         { id: "furycutter", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "wingattack", level: 15 },
         { id: "slash", level: 25 },
         { id: "uturn", level: 35 },
      ],
      abilities: ["swarm", "technician"],
   },

   Jynx: {
      id: "jynx",
      name: "Jynx",
      types: ["Ice", "Psychic"],
      baseStats: {
         hp: 65,
         attack: 50,
         defense: 35,
         spAttack: 115,
         spDefense: 95,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/124.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/124.gif",
      learnset: [
         { id: "icebeam", level: 1 },
         { id: "psychic", level: 1 },
         { id: "lovelykiss", level: 1 },
         { id: "blizzard", level: 35 },
         { id: "psyshock", level: 40 },
      ],
      abilities: ["oblivious", "forewarn"],
   },

   Electabuzz: {
      id: "electabuzz",
      name: "Electabuzz",
      types: ["Electric"],
      baseStats: {
         hp: 65,
         attack: 83,
         defense: 57,
         spAttack: 95,
         spDefense: 85,
         speed: 105,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/125.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/125.gif",
      learnset: [
         { id: "thunderbolt", level: 1 },
         { id: "thunderpunch", level: 1 },
         { id: "lightscreen", level: 20 },
         { id: "psychic", level: 30 },
         { id: "focusblast", level: 35 },
      ],
      abilities: ["static"],
   },

   Magmar: {
      id: "magmar",
      name: "Magmar",
      types: ["Fire"],
      baseStats: {
         hp: 65,
         attack: 95,
         defense: 57,
         spAttack: 100,
         spDefense: 85,
         speed: 93,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/126.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/126.gif",
      learnset: [
         { id: "flamethrower", level: 1 },
         { id: "firepunch", level: 1 },
         { id: "smokescreen", level: 15 },
         { id: "solarbeam", level: 30 },
         { id: "fireblast", level: 40 },
      ],
      abilities: ["flamebody"],
   },

   Pinsir: {
      id: "pinsir",
      name: "Pinsir",
      types: ["Bug"],
      baseStats: {
         hp: 65,
         attack: 125,
         defense: 100,
         spAttack: 55,
         spDefense: 70,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/127.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/127.gif",
      learnset: [
         { id: "vicegrip", level: 1 },
         { id: "seismictoss", level: 15 },
         { id: "guillotine", level: 25 },
         { id: "superpower", level: 35 },
         { id: "earthquake", level: 40 },
      ],
      abilities: ["hypercutter", "moldbreaker"],
   },

   Tauros: {
      id: "tauros",
      name: "Tauros",
      types: ["Normal"],
      baseStats: {
         hp: 75,
         attack: 100,
         defense: 95,
         spAttack: 40,
         spDefense: 70,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/128.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/128.gif",
      learnset: [
         { id: "takedown", level: 1 },
         { id: "hornattack", level: 1 },
         { id: "earthquake", level: 25 },
         { id: "megahorn", level: 35 },
         { id: "gigaimpact", level: 45 },
      ],
      abilities: ["intimidate", "angerpoint"],
   },

   Magikarp: {
      id: "magikarp",
      name: "Magikarp",
      types: ["Water"],
      baseStats: {
         hp: 20,
         attack: 10,
         defense: 55,
         spAttack: 15,
         spDefense: 20,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/129.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "tackle", level: 15 },
         { id: "flail", level: 25 },
         { id: "bounce", level: 35 },
      ],
      abilities: ["swiftswim"],
   },

   Ditto: {
      id: "ditto",
      name: "Ditto",
      types: ["Normal"],
      baseStats: {
         hp: 48,
         attack: 48,
         defense: 48,
         spAttack: 48,
         spDefense: 48,
         speed: 48,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
      learnset: [{ id: "transform", level: 1 }],
      abilities: ["limber", "imposter"],
   },

   Eevee: {
      id: "eevee",
      name: "Eevee",
      types: ["Normal"],
      baseStats: {
         hp: 55,
         attack: 55,
         defense: 50,
         spAttack: 45,
         spDefense: 65,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/133.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "swift", level: 10 },
         { id: "bite", level: 15 },
         { id: "shadowball", level: 25 },
         { id: "lastresort", level: 40 },
      ],
      abilities: ["runaway", "adaptability"],
   },

   Porygon: {
      id: "porygon",
      name: "Porygon",
      types: ["Normal"],
      baseStats: {
         hp: 65,
         attack: 60,
         defense: 70,
         spAttack: 85,
         spDefense: 75,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/137.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/137.gif",
      learnset: [
         { id: "conversion", level: 1 },
         { id: "psybeam", level: 10 },
         { id: "triattack", level: 20 },
         { id: "thunderbolt", level: 30 },
         { id: "icebeam", level: 35 },
      ],
      abilities: ["trace", "download"],
   },

   Omanyte: {
      id: "omanyte",
      name: "Omanyte",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 35,
         attack: 40,
         defense: 100,
         spAttack: 90,
         spDefense: 55,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/138.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/138.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "withdraw", level: 1 },
         { id: "ancientpower", level: 20 },
         { id: "hydropump", level: 30 },
         { id: "shellsmash", level: 40 },
      ],
      abilities: ["swiftswim", "shellarmor"],
   },

   Omastar: {
      id: "omastar",
      name: "Omastar",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 70,
         attack: 60,
         defense: 125,
         spAttack: 115,
         spDefense: 70,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/139.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/139.gif",
      learnset: [
         { id: "hydropump", level: 1 },
         { id: "ancientpower", level: 1 },
         { id: "icebeam", level: 1 },
         { id: "earthpower", level: 35 },
         { id: "shellsmash", level: 45 },
      ],
      abilities: ["swiftswim", "shellarmor"],
   },

   Kabuto: {
      id: "kabuto",
      name: "Kabuto",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 30,
         attack: 80,
         defense: 90,
         spAttack: 55,
         spDefense: 45,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/140.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/140.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "harden", level: 1 },
         { id: "aquajet", level: 15 },
         { id: "ancientpower", level: 25 },
         { id: "megadrain", level: 30 },
      ],
      abilities: ["swiftswim", "battlearmor"],
   },

   Kabutops: {
      id: "kabutops",
      name: "Kabutops",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 60,
         attack: 115,
         defense: 105,
         spAttack: 65,
         spDefense: 70,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/141.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/141.gif",
      learnset: [
         { id: "slash", level: 1 },
         { id: "aquajet", level: 1 },
         { id: "ancientpower", level: 1 },
         { id: "nightslash", level: 30 },
         { id: "stoneedge", level: 40 },
      ],
      abilities: ["swiftswim", "battlearmor"],
   },

   Aerodactyl: {
      id: "aerodactyl",
      name: "Aerodactyl",
      types: ["Rock", "Flying"],
      baseStats: {
         hp: 80,
         attack: 105,
         defense: 65,
         spAttack: 60,
         spDefense: 75,
         speed: 130,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/142.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/142.gif",
      learnset: [
         { id: "wingattack", level: 1 },
         { id: "bite", level: 1 },
         { id: "ancientpower", level: 20 },
         { id: "crunch", level: 30 },
         { id: "stoneedge", level: 40 },
      ],
      abilities: ["rockhead", "pressure"],
   },

   Articuno: {
      id: "articuno",
      name: "Articuno",
      types: ["Ice", "Flying"],
      baseStats: {
         hp: 90,
         attack: 85,
         defense: 100,
         spAttack: 95,
         spDefense: 125,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/144.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/144.gif",
      learnset: [
         { id: "icebeam", level: 1 },
         { id: "hurricane", level: 1 },
         { id: "freezedry", level: 1 },
         { id: "sheerCold", level: 70 },
         { id: "mindreader", level: 65 },
      ],
      abilities: ["pressure"],
   },

   Zapdos: {
      id: "zapdos",
      name: "Zapdos",
      types: ["Electric", "Flying"],
      baseStats: {
         hp: 90,
         attack: 90,
         defense: 85,
         spAttack: 125,
         spDefense: 90,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/145.gif",
      learnset: [
         { id: "thunderbolt", level: 1 },
         { id: "drill peck", level: 1 },
         { id: "ancientpower", level: 1 },
         { id: "zapcannon", level: 70 },
         { id: "thunder", level: 65 },
      ],
      abilities: ["pressure"],
   },

   Moltres: {
      id: "moltres",
      name: "Moltres",
      types: ["Fire", "Flying"],
      baseStats: {
         hp: 90,
         attack: 100,
         defense: 90,
         spAttack: 125,
         spDefense: 85,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/146.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/146.gif",
      learnset: [
         { id: "flamethrower", level: 1 },
         { id: "wingattack", level: 1 },
         { id: "ancientpower", level: 1 },
         { id: "skyattack", level: 70 },
         { id: "solarbeam", level: 65 },
      ],
      abilities: ["pressure"],
   },

   Dratini: {
      id: "dratini",
      name: "Dratini",
      types: ["Dragon"],
      baseStats: {
         hp: 41,
         attack: 64,
         defense: 45,
         spAttack: 50,
         spDefense: 50,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/147.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/147.gif",
      learnset: [
         { id: "wrap", level: 1 },
         { id: "leer", level: 1 },
         { id: "twister", level: 10 },
         { id: "thunderwave", level: 15 },
         { id: "dragonrush", level: 30 },
      ],
      abilities: ["shedskin"],
   },

   Dragonair: {
      id: "dragonair",
      name: "Dragonair",
      types: ["Dragon"],
      baseStats: {
         hp: 61,
         attack: 84,
         defense: 65,
         spAttack: 70,
         spDefense: 70,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/148.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/148.gif",
      learnset: [
         { id: "dragonbreath", level: 1 },
         { id: "twister", level: 1 },
         { id: "agility", level: 20 },
         { id: "slam", level: 25 },
         { id: "dragonrush", level: 35 },
      ],
      abilities: ["shedskin"],
   },

   Mewtwo: {
      id: "mewtwo",
      name: "Mewtwo",
      types: ["Psychic"],
      baseStats: {
         hp: 106,
         attack: 110,
         defense: 90,
         spAttack: 154,
         spDefense: 90,
         speed: 130,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/150.gif",
      learnset: [
         { id: "psychic", level: 1 },
         { id: "disable", level: 1 },
         { id: "swift", level: 1 },
         { id: "psystrike", level: 70 },
         { id: "amnesia", level: 65 },
      ],
      abilities: ["pressure"],
   },

   Mew: {
      id: "mew",
      name: "Mew",
      types: ["Psychic"],
      baseStats: {
         hp: 100,
         attack: 100,
         defense: 100,
         spAttack: 100,
         spDefense: 100,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/151.gif",
      learnset: [
         { id: "psychic", level: 1 },
         { id: "transform", level: 1 },
         { id: "metronome", level: 1 },
         { id: "ancientpower", level: 30 },
         { id: "aurasphere", level: 40 },
      ],
      abilities: ["synchronize"],
   },

   // Generation 2 Pokemon
   Chikorita: {
      id: "chikorita",
      name: "Chikorita",
      types: ["Grass"],
      baseStats: {
         hp: 45,
         attack: 49,
         defense: 65,
         spAttack: 49,
         spDefense: 65,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/152.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/152.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "razorleaf", level: 8 },
         { id: "poisonpowder", level: 12 },
         { id: "synthesis", level: 15 },
      ],
      abilities: ["overgrow"],
   },

   Bayleef: {
      id: "bayleef",
      name: "Bayleef",
      types: ["Grass"],
      baseStats: {
         hp: 60,
         attack: 62,
         defense: 80,
         spAttack: 63,
         spDefense: 80,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/153.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/153.gif",
      learnset: [
         { id: "razorleaf", level: 1 },
         { id: "synthesis", level: 1 },
         { id: "bodyslam", level: 18 },
         { id: "lightscreen", level: 23 },
         { id: "safeguard", level: 28 },
      ],
      abilities: ["overgrow"],
   },

   Meganium: {
      id: "meganium",
      name: "Meganium",
      types: ["Grass"],
      baseStats: {
         hp: 80,
         attack: 82,
         defense: 100,
         spAttack: 83,
         spDefense: 100,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/154.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/154.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "petalblizzard", level: 1 },
         { id: "earthquake", level: 32 },
         { id: "solarbeam", level: 46 },
         { id: "petalstorm", level: 60 },
      ],
      abilities: ["overgrow"],
   },

   Cyndaquil: {
      id: "cyndaquil",
      name: "Cyndaquil",
      types: ["Fire"],
      baseStats: {
         hp: 39,
         attack: 52,
         defense: 43,
         spAttack: 60,
         spDefense: 50,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/155.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/155.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "leer", level: 1 },
         { id: "ember", level: 6 },
         { id: "smokescreen", level: 12 },
         { id: "flamewheel", level: 19 },
      ],
      abilities: ["blaze"],
   },

   Quilava: {
      id: "quilava",
      name: "Quilava",
      types: ["Fire"],
      baseStats: {
         hp: 58,
         attack: 64,
         defense: 58,
         spAttack: 80,
         spDefense: 65,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/156.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/156.gif",
      learnset: [
         { id: "ember", level: 1 },
         { id: "flamewheel", level: 1 },
         { id: "quickattack", level: 20 },
         { id: "flamethrower", level: 35 },
         { id: "lavaplume", level: 42 },
      ],
      abilities: ["blaze"],
   },

   Typhlosion: {
      id: "typhlosion",
      name: "Typhlosion",
      types: ["Fire"],
      baseStats: {
         hp: 78,
         attack: 84,
         defense: 78,
         spAttack: 109,
         spDefense: 85,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/157.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/157.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "eruption", level: 1 },
         { id: "thunderpunch", level: 42 },
         { id: "earthquake", level: 58 },
         { id: "burnup", level: 66 },
      ],
      abilities: ["blaze"],
   },

   Totodile: {
      id: "totodile",
      name: "Totodile",
      types: ["Water"],
      baseStats: {
         hp: 50,
         attack: 65,
         defense: 64,
         spAttack: 44,
         spDefense: 48,
         speed: 43,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/158.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/158.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "watergun", level: 6 },
         { id: "bite", level: 8 },
         { id: "icefang", level: 13 },
      ],
      abilities: ["torrent"],
   },

   Croconaw: {
      id: "croconaw",
      name: "Croconaw",
      types: ["Water"],
      baseStats: {
         hp: 65,
         attack: 80,
         defense: 80,
         spAttack: 59,
         spDefense: 63,
         speed: 58,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/159.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/159.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "bite", level: 1 },
         { id: "icefang", level: 1 },
         { id: "crunch", level: 21 },
         { id: "slash", level: 27 },
      ],
      abilities: ["torrent"],
   },

   Feraligatr: {
      id: "feraligatr",
      name: "Feraligatr",
      types: ["Water"],
      baseStats: {
         hp: 85,
         attack: 105,
         defense: 100,
         spAttack: 79,
         spDefense: 83,
         speed: 78,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/160.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/160.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "agility", level: 1 },
         { id: "hydropump", level: 32 },
         { id: "superpower", level: 45 },
         { id: "hydrocannon", level: 60 },
      ],
      abilities: ["torrent"],
   },

   Sentret: {
      id: "sentret",
      name: "Sentret",
      types: ["Normal"],
      baseStats: {
         hp: 35,
         attack: 46,
         defense: 34,
         spAttack: 35,
         spDefense: 45,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/161.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/161.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "foresight", level: 1 },
         { id: "quickattack", level: 4 },
         { id: "slam", level: 17 },
         { id: "rest", level: 24 },
      ],
      abilities: ["runaway", "keeneye"],
   },

   Furret: {
      id: "furret",
      name: "Furret",
      types: ["Normal"],
      baseStats: {
         hp: 85,
         attack: 76,
         defense: 64,
         spAttack: 45,
         spDefense: 55,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/162.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/162.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "slam", level: 1 },
         { id: "followme", level: 23 },
         { id: "amnesia", level: 30 },
      ],
      abilities: ["runaway", "keeneye"],
   },

   Hoothoot: {
      id: "hoothoot",
      name: "Hoothoot",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 60,
         attack: 30,
         defense: 30,
         spAttack: 36,
         spDefense: 56,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/163.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/163.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "foresight", level: 6 },
         { id: "peck", level: 11 },
         { id: "hypnosis", level: 16 },
      ],
      abilities: ["insomnia", "keeneye"],
   },

   Noctowl: {
      id: "noctowl",
      name: "Noctowl",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 100,
         attack: 50,
         defense: 50,
         spAttack: 86,
         spDefense: 96,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/164.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/164.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "confusion", level: 25 },
         { id: "takedown", level: 33 },
         { id: "reflect", level: 41 },
      ],
      abilities: ["insomnia", "keeneye"],
   },

   Ledyba: {
      id: "ledyba",
      name: "Ledyba",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 40,
         attack: 20,
         defense: 30,
         spAttack: 40,
         spDefense: 80,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/165.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/165.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "supersonic", level: 8 },
         { id: "cometpunch", level: 15 },
         { id: "lightscreen", level: 22 },
         { id: "safeguard", level: 22 },
      ],
      abilities: ["swarm", "earlybird"],
   },

   Ledian: {
      id: "ledian",
      name: "Ledian",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 55,
         attack: 35,
         defense: 50,
         spAttack: 55,
         spDefense: 110,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/166.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/166.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "cometpunch", level: 1 },
         { id: "batonpass", level: 24 },
         { id: "agility", level: 33 },
      ],
      abilities: ["swarm", "earlybird"],
   },

   Spinarak: {
      id: "spinarak",
      name: "Spinarak",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 40,
         attack: 60,
         defense: 40,
         spAttack: 40,
         spDefense: 40,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/167.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/167.gif",
      learnset: [
         { id: "poisonsting", level: 1 },
         { id: "stringshot", level: 1 },
         { id: "scaryface", level: 6 },
         { id: "constrict", level: 11 },
         { id: "nightshade", level: 17 },
      ],
      abilities: ["swarm", "insomnia"],
   },

   Ariados: {
      id: "ariados",
      name: "Ariados",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 70,
         attack: 90,
         defense: 70,
         spAttack: 60,
         spDefense: 70,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/168.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/168.gif",
      learnset: [
         { id: "poisonsting", level: 1 },
         { id: "stringshot", level: 1 },
         { id: "nightshade", level: 1 },
         { id: "spiderweb", level: 23 },
         { id: "agility", level: 30 },
      ],
      abilities: ["swarm", "insomnia"],
   },

   Crobat: {
      id: "crobat",
      name: "Crobat",
      types: ["Poison", "Flying"],
      baseStats: {
         hp: 85,
         attack: 90,
         defense: 80,
         spAttack: 70,
         spDefense: 80,
         speed: 130,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/169.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/169.gif",
      learnset: [
         { id: "crosspoison", level: 1 },
         { id: "screech", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "airslash", level: 1 },
         { id: "uturn", level: 40 },
      ],
      abilities: ["innerfocus"],
   },

   Chinchou: {
      id: "chinchou",
      name: "Chinchou",
      types: ["Water", "Electric"],
      baseStats: {
         hp: 75,
         attack: 38,
         defense: 38,
         spAttack: 56,
         spDefense: 56,
         speed: 67,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/170.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/170.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "thunderwave", level: 5 },
         { id: "watergun", level: 9 },
         { id: "confuseray", level: 13 },
      ],
      abilities: ["voltabsorb", "illuminate"],
   },

   Lanturn: {
      id: "lanturn",
      name: "Lanturn",
      types: ["Water", "Electric"],
      baseStats: {
         hp: 125,
         attack: 58,
         defense: 58,
         spAttack: 76,
         spDefense: 76,
         speed: 67,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/171.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/171.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "thunderwave", level: 1 },
         { id: "spark", level: 27 },
         { id: "takedown", level: 35 },
      ],
      abilities: ["voltabsorb", "illuminate"],
   },

   Pichu: {
      id: "pichu",
      name: "Pichu",
      types: ["Electric"],
      baseStats: {
         hp: 20,
         attack: 40,
         defense: 15,
         spAttack: 35,
         spDefense: 35,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/172.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/172.gif",
      learnset: [
         { id: "thundershock", level: 1 },
         { id: "charm", level: 1 },
         { id: "tailwhip", level: 5 },
         { id: "thunderwave", level: 10 },
         { id: "sweetkiss", level: 13 },
      ],
      abilities: ["static"],
   },

   Cleffa: {
      id: "cleffa",
      name: "Cleffa",
      types: ["Fairy"],
      baseStats: {
         hp: 50,
         attack: 25,
         defense: 28,
         spAttack: 45,
         spDefense: 55,
         speed: 15,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/173.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/173.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "charm", level: 1 },
         { id: "encore", level: 4 },
         { id: "sweetkiss", level: 8 },
         { id: "copycat", level: 13 },
      ],
      abilities: ["cutecharm", "magicguard"],
   },

   Igglybuff: {
      id: "igglybuff",
      name: "Igglybuff",
      types: ["Normal", "Fairy"],
      baseStats: {
         hp: 90,
         attack: 30,
         defense: 15,
         spAttack: 40,
         spDefense: 20,
         speed: 15,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/174.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/174.gif",
      learnset: [
         { id: "sing", level: 1 },
         { id: "charm", level: 1 },
         { id: "defensecurl", level: 4 },
         { id: "pound", level: 9 },
         { id: "sweetkiss", level: 14 },
      ],
      abilities: ["cutecharm", "competitive"],
   },

   Togepi: {
      id: "togepi",
      name: "Togepi",
      types: ["Fairy"],
      baseStats: {
         hp: 35,
         attack: 20,
         defense: 65,
         spAttack: 40,
         spDefense: 65,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/175.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/175.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "charm", level: 1 },
         { id: "metronome", level: 5 },
         { id: "sweetkiss", level: 9 },
         { id: "yawn", level: 13 },
      ],
      abilities: ["hustle", "serenegrace"],
   },

   Togetic: {
      id: "togetic",
      name: "Togetic",
      types: ["Fairy", "Flying"],
      baseStats: {
         hp: 55,
         attack: 40,
         defense: 85,
         spAttack: 80,
         spDefense: 105,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/176.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/176.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "charm", level: 1 },
         { id: "metronome", level: 1 },
         { id: "sweetkiss", level: 1 },
         { id: "yawn", level: 1 },
      ],
      abilities: ["hustle", "serenegrace"],
   },

   Natu: {
      id: "natu",
      name: "Natu",
      types: ["Psychic", "Flying"],
      baseStats: {
         hp: 40,
         attack: 50,
         defense: 45,
         spAttack: 70,
         spDefense: 45,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/177.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/177.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "leer", level: 1 },
         { id: "nightshade", level: 10 },
         { id: "teleport", level: 20 },
         { id: "wishbone", level: 30 },
      ],
      abilities: ["synchronize", "earlybird"],
   },

   Xatu: {
      id: "xatu",
      name: "Xatu",
      types: ["Psychic", "Flying"],
      baseStats: {
         hp: 65,
         attack: 75,
         defense: 70,
         spAttack: 95,
         spDefense: 70,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/178.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/178.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "leer", level: 1 },
         { id: "nightshade", level: 1 },
         { id: "teleport", level: 1 },
         { id: "confuseray", level: 35 },
      ],
      abilities: ["synchronize", "earlybird"],
   },

   Mareep: {
      id: "mareep",
      name: "Mareep",
      types: ["Electric"],
      baseStats: {
         hp: 55,
         attack: 40,
         defense: 40,
         spAttack: 65,
         spDefense: 45,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/179.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/179.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "thundershock", level: 4 },
         { id: "thunderwave", level: 8 },
         { id: "cottonspore", level: 11 },
      ],
      abilities: ["static"],
   },

   Flaaffy: {
      id: "flaaffy",
      name: "Flaaffy",
      types: ["Electric"],
      baseStats: {
         hp: 70,
         attack: 55,
         defense: 55,
         spAttack: 80,
         spDefense: 60,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/180.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/180.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "thunderwave", level: 1 },
         { id: "cottonspore", level: 1 },
      ],
      abilities: ["static"],
   },

   Ampharos: {
      id: "ampharos",
      name: "Ampharos",
      types: ["Electric"],
      baseStats: {
         hp: 90,
         attack: 75,
         defense: 85,
         spAttack: 115,
         spDefense: 90,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/181.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/181.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "thunderpunch", level: 1 },
         { id: "firepunch", level: 1 },
         { id: "thunderbolt", level: 42 },
         { id: "lightscreen", level: 54 },
      ],
      abilities: ["static"],
   },

   Bellossom: {
      id: "bellossom",
      name: "Bellossom",
      types: ["Grass"],
      baseStats: {
         hp: 75,
         attack: 80,
         defense: 95,
         spAttack: 90,
         spDefense: 100,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/182.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/182.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "sweetscent", level: 1 },
         { id: "stunspore", level: 1 },
         { id: "petalblizzard", level: 1 },
         { id: "petaldance", level: 55 },
      ],
      abilities: ["chlorophyll"],
   },

   Marill: {
      id: "marill",
      name: "Marill",
      types: ["Water", "Fairy"],
      baseStats: {
         hp: 70,
         attack: 20,
         defense: 50,
         spAttack: 20,
         spDefense: 50,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/183.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/183.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "defensecurl", level: 3 },
         { id: "tailwhip", level: 6 },
         { id: "watergun", level: 10 },
         { id: "rollout", level: 15 },
      ],
      abilities: ["thickfat", "hugePower"],
   },

   Azumarill: {
      id: "azumarill",
      name: "Azumarill",
      types: ["Water", "Fairy"],
      baseStats: {
         hp: 100,
         attack: 50,
         defense: 80,
         spAttack: 60,
         spDefense: 80,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/184.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/184.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "defensecurl", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "watergun", level: 1 },
         { id: "rollout", level: 1 },
      ],
      abilities: ["thickfat", "hugePower"],
   },

   Sudowoodo: {
      id: "sudowoodo",
      name: "Sudowoodo",
      types: ["Rock"],
      baseStats: {
         hp: 70,
         attack: 100,
         defense: 115,
         spAttack: 30,
         spDefense: 65,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/185.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/185.gif",
      learnset: [
         { id: "rockthrow", level: 1 },
         { id: "mimic", level: 1 },
         { id: "slam", level: 17 },
         { id: "rockslide", level: 22 },
         { id: "block", level: 29 },
      ],
      abilities: ["sturdy", "rockhead"],
   },

   Politoed: {
      id: "politoed",
      name: "Politoed",
      types: ["Water"],
      baseStats: {
         hp: 90,
         attack: 75,
         defense: 75,
         spAttack: 90,
         spDefense: 100,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/186.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/186.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "doubleslap", level: 1 },
         { id: "perish song", level: 51 },
         { id: "swagger", level: 58 },
      ],
      abilities: ["waterabsorb", "damp"],
   },

   Hoppip: {
      id: "hoppip",
      name: "Hoppip",
      types: ["Grass", "Flying"],
      baseStats: {
         hp: 35,
         attack: 35,
         defense: 40,
         spAttack: 35,
         spDefense: 55,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/187.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/187.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "synthesis", level: 4 },
         { id: "tailwhip", level: 6 },
         { id: "tackle", level: 8 },
         { id: "poisonpowder", level: 10 },
      ],
      abilities: ["chlorophyll", "leafguard"],
   },

   Skiploom: {
      id: "skiploom",
      name: "Skiploom",
      types: ["Grass", "Flying"],
      baseStats: {
         hp: 55,
         attack: 45,
         defense: 50,
         spAttack: 45,
         spDefense: 65,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/188.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/188.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "synthesis", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "tackle", level: 1 },
         { id: "poisonpowder", level: 1 },
      ],
      abilities: ["chlorophyll", "leafguard"],
   },

   Jumpluff: {
      id: "jumpluff",
      name: "Jumpluff",
      types: ["Grass", "Flying"],
      baseStats: {
         hp: 75,
         attack: 55,
         defense: 70,
         spAttack: 55,
         spDefense: 95,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/189.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/189.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "synthesis", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "tackle", level: 1 },
         { id: "poisonpowder", level: 1 },
      ],
      abilities: ["chlorophyll", "leafguard"],
   },

   Aipom: {
      id: "aipom",
      name: "Aipom",
      types: ["Normal"],
      baseStats: {
         hp: 55,
         attack: 70,
         defense: 55,
         spAttack: 40,
         spDefense: 55,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/190.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/190.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "sandattack", level: 4 },
         { id: "astonish", level: 8 },
         { id: "batonpass", level: 11 },
      ],
      abilities: ["runaway", "pickup"],
   },

   Sunkern: {
      id: "sunkern",
      name: "Sunkern",
      types: ["Grass"],
      baseStats: {
         hp: 30,
         attack: 30,
         defense: 30,
         spAttack: 30,
         spDefense: 30,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/191.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/191.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "growth", level: 4 },
         { id: "ingrain", level: 7 },
         { id: "grasswhistle", level: 10 },
         { id: "megadrain", level: 13 },
      ],
      abilities: ["chlorophyll", "solarpower"],
   },

   Sunflora: {
      id: "sunflora",
      name: "Sunflora",
      types: ["Grass"],
      baseStats: {
         hp: 75,
         attack: 75,
         defense: 55,
         spAttack: 105,
         spDefense: 85,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/192.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/192.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "pound", level: 1 },
         { id: "growth", level: 1 },
         { id: "ingrain", level: 1 },
         { id: "grasswhistle", level: 1 },
      ],
      abilities: ["chlorophyll", "solarpower"],
   },

   // Generation 3 Pokemon
   Treecko: {
      id: "treecko",
      name: "Treecko",
      types: ["Grass"],
      baseStats: {
         hp: 40,
         attack: 45,
         defense: 35,
         spAttack: 65,
         spDefense: 55,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/252.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/252.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "leer", level: 1 },
         { id: "absorb", level: 6 },
         { id: "quickattack", level: 11 },
         { id: "pursuit", level: 16 },
      ],
      abilities: ["overgrow"],
   },

   Grovyle: {
      id: "grovyle",
      name: "Grovyle",
      types: ["Grass"],
      baseStats: {
         hp: 50,
         attack: 65,
         defense: 45,
         spAttack: 85,
         spDefense: 65,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/253.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/253.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "leer", level: 1 },
         { id: "absorb", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "pursuit", level: 1 },
      ],
      abilities: ["overgrow"],
   },

   Sceptile: {
      id: "sceptile",
      name: "Sceptile",
      types: ["Grass"],
      baseStats: {
         hp: 70,
         attack: 85,
         defense: 65,
         spAttack: 105,
         spDefense: 85,
         speed: 120,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/254.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/254.gif",
      learnset: [
         { id: "nightslash", level: 1 },
         { id: "pound", level: 1 },
         { id: "leer", level: 1 },
         { id: "absorb", level: 1 },
         { id: "quickattack", level: 1 },
      ],
      abilities: ["overgrow"],
   },

   Torchic: {
      id: "torchic",
      name: "Torchic",
      types: ["Fire"],
      baseStats: {
         hp: 45,
         attack: 60,
         defense: 40,
         spAttack: 70,
         spDefense: 50,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/255.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/255.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "growl", level: 1 },
         { id: "ember", level: 7 },
         { id: "peck", level: 10 },
         { id: "sandattack", level: 16 },
      ],
      abilities: ["blaze"],
   },

   Combusken: {
      id: "combusken",
      name: "Combusken",
      types: ["Fire", "Fighting"],
      baseStats: {
         hp: 60,
         attack: 85,
         defense: 60,
         spAttack: 85,
         spDefense: 60,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/256.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/256.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "growl", level: 1 },
         { id: "ember", level: 1 },
         { id: "peck", level: 1 },
         { id: "sandattack", level: 1 },
      ],
      abilities: ["blaze"],
   },

   Blaziken: {
      id: "blaziken",
      name: "Blaziken",
      types: ["Fire", "Fighting"],
      baseStats: {
         hp: 80,
         attack: 120,
         defense: 70,
         spAttack: 110,
         spDefense: 70,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/257.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/257.gif",
      learnset: [
         { id: "firepunch", level: 1 },
         { id: "scratch", level: 1 },
         { id: "growl", level: 1 },
         { id: "ember", level: 1 },
         { id: "peck", level: 1 },
      ],
      abilities: ["blaze"],
   },

   Mudkip: {
      id: "mudkip",
      name: "Mudkip",
      types: ["Water"],
      baseStats: {
         hp: 50,
         attack: 70,
         defense: 50,
         spAttack: 50,
         spDefense: 50,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/258.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/258.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "mudslap", level: 6 },
         { id: "watergun", level: 10 },
         { id: "bide", level: 15 },
      ],
      abilities: ["torrent"],
   },

   Marshtomp: {
      id: "marshtomp",
      name: "Marshtomp",
      types: ["Water", "Ground"],
      baseStats: {
         hp: 70,
         attack: 85,
         defense: 70,
         spAttack: 60,
         spDefense: 70,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/259.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/259.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "mudslap", level: 1 },
         { id: "watergun", level: 1 },
         { id: "bide", level: 1 },
      ],
      abilities: ["torrent"],
   },

   Swampert: {
      id: "swampert",
      name: "Swampert",
      types: ["Water", "Ground"],
      baseStats: {
         hp: 100,
         attack: 110,
         defense: 90,
         spAttack: 85,
         spDefense: 90,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/260.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/260.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "mudslap", level: 1 },
         { id: "watergun", level: 1 },
         { id: "bide", level: 1 },
      ],
      abilities: ["torrent"],
   },

   // More Generation 3 Pokemon
   Poochyena: {
      id: "poochyena",
      name: "Poochyena",
      types: ["Dark"],
      baseStats: {
         hp: 35,
         attack: 55,
         defense: 35,
         spAttack: 30,
         spDefense: 30,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/261.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/261.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "howl", level: 1 },
         { id: "bite", level: 4 },
         { id: "roar", level: 7 },
         { id: "swagger", level: 10 },
      ],
      abilities: ["runaway", "quickfeet"],
   },

   Mightyena: {
      id: "mightyena",
      name: "Mightyena",
      types: ["Dark"],
      baseStats: {
         hp: 70,
         attack: 90,
         defense: 70,
         spAttack: 60,
         spDefense: 60,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/262.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/262.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "howl", level: 1 },
         { id: "bite", level: 1 },
         { id: "crunch", level: 20 },
         { id: "scaryface", level: 25 },
      ],
      abilities: ["intimidate", "moxie"],
   },

   Zigzagoon: {
      id: "zigzagoon",
      name: "Zigzagoon",
      types: ["Normal"],
      baseStats: {
         hp: 38,
         attack: 30,
         defense: 41,
         spAttack: 30,
         spDefense: 41,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/263.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/263.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "tailwhip", level: 5 },
         { id: "sandattack", level: 9 },
         { id: "headbutt", level: 13 },
      ],
      abilities: ["pickup", "gluttony"],
   },

   Linoone: {
      id: "linoone",
      name: "Linoone",
      types: ["Normal"],
      baseStats: {
         hp: 78,
         attack: 70,
         defense: 61,
         spAttack: 50,
         spDefense: 61,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/264.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/264.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "sandattack", level: 1 },
         { id: "slash", level: 23 },
      ],
      abilities: ["pickup", "gluttony"],
   },

   Wurmple: {
      id: "wurmple",
      name: "Wurmple",
      types: ["Bug"],
      baseStats: {
         hp: 45,
         attack: 45,
         defense: 35,
         spAttack: 20,
         spDefense: 30,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/265.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/265.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "stringshot", level: 1 },
         { id: "poisonsting", level: 5 },
      ],
      abilities: ["shielddust"],
   },

   Beautifly: {
      id: "beautifly",
      name: "Beautifly",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 60,
         attack: 70,
         defense: 50,
         spAttack: 100,
         spDefense: 50,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/267.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/267.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "gust", level: 1 },
         { id: "stunspore", level: 13 },
         { id: "morningsun", level: 17 },
         { id: "silverwind", level: 20 },
      ],
      abilities: ["swarm"],
   },

   Dustox: {
      id: "dustox",
      name: "Dustox",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 60,
         attack: 50,
         defense: 70,
         spAttack: 50,
         spDefense: 90,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/269.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/269.gif",
      learnset: [
         { id: "confusion", level: 1 },
         { id: "gust", level: 1 },
         { id: "poisonpowder", level: 13 },
         { id: "moonlight", level: 17 },
         { id: "toxic", level: 20 },
      ],
      abilities: ["shielddust"],
   },

   Lotad: {
      id: "lotad",
      name: "Lotad",
      types: ["Water", "Grass"],
      baseStats: {
         hp: 40,
         attack: 30,
         defense: 30,
         spAttack: 40,
         spDefense: 50,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/270.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/270.gif",
      learnset: [
         { id: "astonish", level: 1 },
         { id: "growl", level: 3 },
         { id: "absorb", level: 6 },
         { id: "naturepower", level: 9 },
         { id: "mist", level: 12 },
      ],
      abilities: ["swiftswim", "raindish"],
   },

   Lombre: {
      id: "lombre",
      name: "Lombre",
      types: ["Water", "Grass"],
      baseStats: {
         hp: 60,
         attack: 50,
         defense: 50,
         spAttack: 60,
         spDefense: 70,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/271.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/271.gif",
      learnset: [
         { id: "astonish", level: 1 },
         { id: "growl", level: 1 },
         { id: "absorb", level: 1 },
         { id: "naturepower", level: 1 },
         { id: "watergun", level: 16 },
      ],
      abilities: ["swiftswim", "raindish"],
   },

   Ludicolo: {
      id: "ludicolo",
      name: "Ludicolo",
      types: ["Water", "Grass"],
      baseStats: {
         hp: 80,
         attack: 70,
         defense: 70,
         spAttack: 90,
         spDefense: 100,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/272.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/272.gif",
      learnset: [
         { id: "astonish", level: 1 },
         { id: "growl", level: 1 },
         { id: "absorb", level: 1 },
         { id: "megadrain", level: 1 },
         { id: "hydropump", level: 1 },
      ],
      abilities: ["swiftswim", "raindish"],
   },

   Seedot: {
      id: "seedot",
      name: "Seedot",
      types: ["Grass"],
      baseStats: {
         hp: 40,
         attack: 40,
         defense: 50,
         spAttack: 30,
         spDefense: 30,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/273.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/273.gif",
      learnset: [
         { id: "bide", level: 1 },
         { id: "harden", level: 3 },
         { id: "growth", level: 7 },
         { id: "naturepower", level: 13 },
         { id: "synthesis", level: 17 },
      ],
      abilities: ["chlorophyll", "earlybird"],
   },

   Nuzleaf: {
      id: "nuzleaf",
      name: "Nuzleaf",
      types: ["Grass", "Dark"],
      baseStats: {
         hp: 70,
         attack: 70,
         defense: 40,
         spAttack: 60,
         spDefense: 40,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/274.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/274.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "harden", level: 1 },
         { id: "growth", level: 1 },
         { id: "torment", level: 16 },
         { id: "feintattack", level: 20 },
      ],
      abilities: ["chlorophyll", "earlybird"],
   },

   Shiftry: {
      id: "shiftry",
      name: "Shiftry",
      types: ["Grass", "Dark"],
      baseStats: {
         hp: 90,
         attack: 100,
         defense: 60,
         spAttack: 90,
         spDefense: 60,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/275.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/275.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "harden", level: 1 },
         { id: "growth", level: 1 },
         { id: "torment", level: 1 },
         { id: "leafblade", level: 1 },
      ],
      abilities: ["chlorophyll", "windRider"],
   },

   Taillow: {
      id: "taillow",
      name: "Taillow",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 40,
         attack: 55,
         defense: 30,
         spAttack: 30,
         spDefense: 30,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/276.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/276.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "growl", level: 1 },
         { id: "focusenergy", level: 4 },
         { id: "quickattack", level: 8 },
         { id: "wingattack", level: 13 },
      ],
      abilities: ["guts"],
   },

   Swellow: {
      id: "swellow",
      name: "Swellow",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 60,
         attack: 85,
         defense: 60,
         spAttack: 75,
         spDefense: 50,
         speed: 125,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/277.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/277.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "growl", level: 1 },
         { id: "focusenergy", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "aerialace", level: 23 },
      ],
      abilities: ["guts"],
   },

   Wingull: {
      id: "wingull",
      name: "Wingull",
      types: ["Water", "Flying"],
      baseStats: {
         hp: 40,
         attack: 30,
         defense: 30,
         spAttack: 55,
         spDefense: 30,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/278.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/278.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "watergun", level: 1 },
         { id: "supersonic", level: 7 },
         { id: "wingattack", level: 13 },
         { id: "mist", level: 21 },
      ],
      abilities: ["keeneye"],
   },

   Pelipper: {
      id: "pelipper",
      name: "Pelipper",
      types: ["Water", "Flying"],
      baseStats: {
         hp: 60,
         attack: 50,
         defense: 100,
         spAttack: 95,
         spDefense: 70,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/279.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/279.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "watergun", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "wingattack", level: 1 },
         { id: "hydropump", level: 33 },
      ],
      abilities: ["keeneye"],
   },

   Ralts: {
      id: "ralts",
      name: "Ralts",
      types: ["Psychic", "Fairy"],
      baseStats: {
         hp: 28,
         attack: 25,
         defense: 25,
         spAttack: 45,
         spDefense: 35,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/280.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/280.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "confusion", level: 6 },
         { id: "doubleteam", level: 11 },
         { id: "teleport", level: 16 },
         { id: "luckychant", level: 21 },
      ],
      abilities: ["synchronize", "trace"],
   },

   Kirlia: {
      id: "kirlia",
      name: "Kirlia",
      types: ["Psychic", "Fairy"],
      baseStats: {
         hp: 38,
         attack: 35,
         defense: 35,
         spAttack: 65,
         spDefense: 55,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/281.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/281.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "confusion", level: 1 },
         { id: "doubleteam", level: 1 },
         { id: "teleport", level: 1 },
         { id: "calmmind", level: 26 },
      ],
      abilities: ["synchronize", "trace"],
   },

   Gardevoir: {
      id: "gardevoir",
      name: "Gardevoir",
      types: ["Psychic", "Fairy"],
      baseStats: {
         hp: 68,
         attack: 65,
         defense: 65,
         spAttack: 125,
         spDefense: 115,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/282.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/282.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "confusion", level: 1 },
         { id: "doubleteam", level: 1 },
         { id: "teleport", level: 1 },
         { id: "psychic", level: 33 },
      ],
      abilities: ["synchronize", "trace"],
   },

   Slakoth: {
      id: "slakoth",
      name: "Slakoth",
      types: ["Normal"],
      baseStats: {
         hp: 60,
         attack: 60,
         defense: 60,
         spAttack: 35,
         spDefense: 35,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/287.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/287.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "yawn", level: 1 },
         { id: "encore", level: 7 },
         { id: "slackoff", level: 13 },
         { id: "feintattack", level: 19 },
      ],
      abilities: ["truant"],
   },

   Vigoroth: {
      id: "vigoroth",
      name: "Vigoroth",
      types: ["Normal"],
      baseStats: {
         hp: 80,
         attack: 80,
         defense: 80,
         spAttack: 55,
         spDefense: 55,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/288.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/288.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "focusenergy", level: 1 },
         { id: "encore", level: 1 },
         { id: "uproar", level: 23 },
         { id: "endure", level: 29 },
      ],
      abilities: ["vitalspirit"],
   },

   Slaking: {
      id: "slaking",
      name: "Slaking",
      types: ["Normal"],
      baseStats: {
         hp: 150,
         attack: 160,
         defense: 100,
         spAttack: 95,
         spDefense: 65,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/289.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/289.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "yawn", level: 1 },
         { id: "encore", level: 1 },
         { id: "slackoff", level: 1 },
         { id: "gigaimpact", level: 37 },
      ],
      abilities: ["truant"],
   },

   Nincada: {
      id: "nincada",
      name: "Nincada",
      types: ["Bug", "Ground"],
      baseStats: {
         hp: 31,
         attack: 45,
         defense: 90,
         spAttack: 30,
         spDefense: 30,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/290.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/290.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "harden", level: 1 },
         { id: "leechlife", level: 5 },
         { id: "sandattack", level: 9 },
         { id: "furycutter", level: 14 },
      ],
      abilities: ["compoundeyes"],
   },

   Ninjask: {
      id: "ninjask",
      name: "Ninjask",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 61,
         attack: 90,
         defense: 45,
         spAttack: 50,
         spDefense: 50,
         speed: 160,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/291.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/291.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "harden", level: 1 },
         { id: "leechlife", level: 1 },
         { id: "sandattack", level: 1 },
         { id: "doubleteam", level: 20 },
      ],
      abilities: ["speedboost"],
   },

   Shedinja: {
      id: "shedinja",
      name: "Shedinja",
      types: ["Bug", "Ghost"],
      baseStats: {
         hp: 1,
         attack: 90,
         defense: 45,
         spAttack: 30,
         spDefense: 30,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/292.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/292.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "harden", level: 1 },
         { id: "leechlife", level: 1 },
         { id: "sandattack", level: 1 },
         { id: "shadowsneak", level: 20 },
      ],
      abilities: ["wonderguard"],
   },

   Whismur: {
      id: "whismur",
      name: "Whismur",
      types: ["Normal"],
      baseStats: {
         hp: 64,
         attack: 51,
         defense: 23,
         spAttack: 51,
         spDefense: 23,
         speed: 28,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/293.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/293.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "uproar", level: 5 },
         { id: "astonish", level: 11 },
         { id: "howl", level: 15 },
         { id: "supersonic", level: 21 },
      ],
      abilities: ["soundproof"],
   },

   Loudred: {
      id: "loudred",
      name: "Loudred",
      types: ["Normal"],
      baseStats: {
         hp: 84,
         attack: 71,
         defense: 43,
         spAttack: 71,
         spDefense: 43,
         speed: 48,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/294.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/294.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "uproar", level: 1 },
         { id: "astonish", level: 1 },
         { id: "howl", level: 1 },
         { id: "bite", level: 23 },
      ],
      abilities: ["soundproof"],
   },

   Exploud: {
      id: "exploud",
      name: "Exploud",
      types: ["Normal"],
      baseStats: {
         hp: 104,
         attack: 91,
         defense: 63,
         spAttack: 91,
         spDefense: 73,
         speed: 68,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/295.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/295.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "uproar", level: 1 },
         { id: "astonish", level: 1 },
         { id: "howl", level: 1 },
         { id: "boomburst", level: 37 },
      ],
      abilities: ["soundproof"],
   },

   Makuhita: {
      id: "makuhita",
      name: "Makuhita",
      types: ["Fighting"],
      baseStats: {
         hp: 72,
         attack: 60,
         defense: 30,
         spAttack: 20,
         spDefense: 30,
         speed: 25,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/296.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/296.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "focusenergy", level: 1 },
         { id: "sandattack", level: 4 },
         { id: "armthrust", level: 7 },
         { id: "vitalthrow", level: 10 },
      ],
      abilities: ["thickfat", "guts"],
   },

   Hariyama: {
      id: "hariyama",
      name: "Hariyama",
      types: ["Fighting"],
      baseStats: {
         hp: 144,
         attack: 120,
         defense: 60,
         spAttack: 40,
         spDefense: 60,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/297.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/297.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "focusenergy", level: 1 },
         { id: "sandattack", level: 1 },
         { id: "armthrust", level: 1 },
         { id: "bellydrum", level: 26 },
      ],
      abilities: ["thickfat", "guts"],
   },

   Azurill: {
      id: "azurill",
      name: "Azurill",
      types: ["Normal", "Fairy"],
      baseStats: {
         hp: 50,
         attack: 20,
         defense: 40,
         spAttack: 20,
         spDefense: 40,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/298.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/298.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "watergun", level: 1 },
         { id: "tailwhip", level: 2 },
         { id: "waterball", level: 7 },
         { id: "charm", level: 10 },
      ],
      abilities: ["thickfat", "hugePower"],
   },

   // Generation 4 Pokemon
   Turtwig: {
      id: "turtwig",
      name: "Turtwig",
      types: ["Grass"],
      baseStats: {
         hp: 55,
         attack: 68,
         defense: 64,
         spAttack: 45,
         spDefense: 55,
         speed: 31,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/387.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/387.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "withdraw", level: 5 },
         { id: "absorb", level: 9 },
         { id: "razorleaf", level: 13 },
         { id: "curse", level: 17 },
      ],
      abilities: ["overgrow"],
   },

   Grotle: {
      id: "grotle",
      name: "Grotle",
      types: ["Grass"],
      baseStats: {
         hp: 75,
         attack: 89,
         defense: 85,
         spAttack: 55,
         spDefense: 65,
         speed: 36,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/388.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/388.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "withdraw", level: 1 },
         { id: "absorb", level: 1 },
         { id: "razorleaf", level: 1 },
         { id: "bite", level: 22 },
      ],
      abilities: ["overgrow"],
   },

   Torterra: {
      id: "torterra",
      name: "Torterra",
      types: ["Grass", "Ground"],
      baseStats: {
         hp: 95,
         attack: 109,
         defense: 105,
         spAttack: 75,
         spDefense: 85,
         speed: 56,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/389.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/389.gif",
      learnset: [
         { id: "woodhammer", level: 1 },
         { id: "tackle", level: 1 },
         { id: "withdraw", level: 1 },
         { id: "absorb", level: 1 },
         { id: "earthquake", level: 33 },
      ],
      abilities: ["overgrow"],
   },

   Chimchar: {
      id: "chimchar",
      name: "Chimchar",
      types: ["Fire"],
      baseStats: {
         hp: 44,
         attack: 58,
         defense: 44,
         spAttack: 58,
         spDefense: 44,
         speed: 61,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/390.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/390.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "ember", level: 7 },
         { id: "taunt", level: 9 },
         { id: "furyswipes", level: 15 },
      ],
      abilities: ["blaze"],
   },

   Monferno: {
      id: "monferno",
      name: "Monferno",
      types: ["Fire", "Fighting"],
      baseStats: {
         hp: 64,
         attack: 78,
         defense: 52,
         spAttack: 78,
         spDefense: 52,
         speed: 81,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/391.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/391.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "ember", level: 1 },
         { id: "taunt", level: 1 },
         { id: "machpunch", level: 19 },
      ],
      abilities: ["blaze"],
   },

   Infernape: {
      id: "infernape",
      name: "Infernape",
      types: ["Fire", "Fighting"],
      baseStats: {
         hp: 76,
         attack: 104,
         defense: 71,
         spAttack: 104,
         spDefense: 71,
         speed: 108,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/392.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/392.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "ember", level: 1 },
         { id: "taunt", level: 1 },
         { id: "closecomcat", level: 42 },
      ],
      abilities: ["blaze"],
   },

   Piplup: {
      id: "piplup",
      name: "Piplup",
      types: ["Water"],
      baseStats: {
         hp: 53,
         attack: 51,
         defense: 53,
         spAttack: 61,
         spDefense: 56,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/393.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/393.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "growl", level: 4 },
         { id: "bubble", level: 8 },
         { id: "waterball", level: 11 },
         { id: "peck", level: 15 },
      ],
      abilities: ["torrent"],
   },

   Prinplup: {
      id: "prinplup",
      name: "Prinplup",
      types: ["Water"],
      baseStats: {
         hp: 64,
         attack: 66,
         defense: 68,
         spAttack: 81,
         spDefense: 76,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/394.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/394.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "growl", level: 1 },
         { id: "bubble", level: 1 },
         { id: "waterball", level: 1 },
         { id: "metalclaw", level: 19 },
      ],
      abilities: ["torrent"],
   },

   Empoleon: {
      id: "empoleon",
      name: "Empoleon",
      types: ["Water", "Steel"],
      baseStats: {
         hp: 84,
         attack: 86,
         defense: 88,
         spAttack: 111,
         spDefense: 101,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/395.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/395.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "growl", level: 1 },
         { id: "bubble", level: 1 },
         { id: "waterball", level: 1 },
         { id: "hydropump", level: 39 },
      ],
      abilities: ["torrent"],
   },

   // GENERATION 1 MISSING POKEMON
   caterpie: {
      id: "caterpie",
      name: "Caterpie",
      types: ["Bug"],
      baseStats: {
         hp: 45,
         attack: 30,
         defense: 35,
         spAttack: 20,
         spDefense: 20,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/10.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "stringshot", level: 1 },
         { id: "bugbite", level: 15 },
      ],
      abilities: ["shieldDust"],
   },

   metapod: {
      id: "metapod",
      name: "Metapod",
      types: ["Bug"],
      baseStats: {
         hp: 50,
         attack: 20,
         defense: 55,
         spAttack: 25,
         spDefense: 25,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/11.gif",
      learnset: [
         { id: "harden", level: 1 },
         { id: "tackle", level: 1 },
      ],
      abilities: ["shedSkin"],
   },

   butterfree: {
      id: "butterfree",
      name: "Butterfree",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 60,
         attack: 45,
         defense: 50,
         spAttack: 90,
         spDefense: 80,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/12.gif",
      learnset: [
         { id: "gust", level: 1 },
         { id: "confusion", level: 1 },
         { id: "sleeppowder", level: 15 },
         { id: "psybeam", level: 20 },
         { id: "bugbuzz", level: 25 },
         { id: "psychic", level: 30 },
      ],
      abilities: ["compoundEyes"],
   },

   weedle: {
      id: "weedle",
      name: "Weedle",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 40,
         attack: 35,
         defense: 30,
         spAttack: 20,
         spDefense: 20,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/13.gif",
      learnset: [
         { id: "poisonsting", level: 1 },
         { id: "stringshot", level: 1 },
      ],
      abilities: ["shieldDust"],
   },

   kakuna: {
      id: "kakuna",
      name: "Kakuna",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 45,
         attack: 25,
         defense: 50,
         spAttack: 25,
         spDefense: 25,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/14.gif",
      learnset: [{ id: "harden", level: 1 }],
      abilities: ["shedSkin"],
   },

   beedrill: {
      id: "beedrill",
      name: "Beedrill",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 65,
         attack: 90,
         defense: 40,
         spAttack: 45,
         spDefense: 80,
         speed: 75,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/15.gif",
      learnset: [
         { id: "twineedle", level: 1 },
         { id: "furyattack", level: 1 },
         { id: "rage", level: 15 },
         { id: "poisonjab", level: 20 },
         { id: "agility", level: 25 },
         { id: "endeavor", level: 30 },
      ],
      abilities: ["swarm"],
   },

   pidgey: {
      id: "pidgey",
      name: "Pidgey",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 40,
         attack: 45,
         defense: 40,
         spAttack: 35,
         spDefense: 35,
         speed: 56,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/16.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "sandattack", level: 5 },
         { id: "gust", level: 9 },
         { id: "quickattack", level: 13 },
         { id: "whirlwind", level: 17 },
      ],
      abilities: ["keenEye"],
   },

   pidgeotto: {
      id: "pidgeotto",
      name: "Pidgeotto",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 63,
         attack: 60,
         defense: 55,
         spAttack: 50,
         spDefense: 50,
         speed: 71,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/17.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "sandattack", level: 1 },
         { id: "gust", level: 1 },
         { id: "quickattack", level: 13 },
         { id: "wingattack", level: 20 },
         { id: "agility", level: 29 },
      ],
      abilities: ["keenEye"],
   },

   pidgeot: {
      id: "pidgeot",
      name: "Pidgeot",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 83,
         attack: 80,
         defense: 75,
         spAttack: 70,
         spDefense: 70,
         speed: 101,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/18.gif",
      learnset: [
         { id: "hurricane", level: 1 },
         { id: "tackle", level: 1 },
         { id: "sandattack", level: 1 },
         { id: "gust", level: 1 },
         { id: "quickattack", level: 13 },
         { id: "wingattack", level: 20 },
         { id: "agility", level: 29 },
         { id: "hurricane", level: 38 },
      ],
      abilities: ["keenEye"],
   },

   rattata: {
      id: "rattata",
      name: "Rattata",
      types: ["Normal"],
      baseStats: {
         hp: 30,
         attack: 56,
         defense: 35,
         spAttack: 25,
         spDefense: 35,
         speed: 72,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/19.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "quickattack", level: 4 },
         { id: "hyperfang", level: 7 },
         { id: "focusenergy", level: 10 },
         { id: "bite", level: 13 },
      ],
      abilities: ["runAway", "guts"],
   },

   raticate: {
      id: "raticate",
      name: "Raticate",
      types: ["Normal"],
      baseStats: {
         hp: 55,
         attack: 81,
         defense: 60,
         spAttack: 50,
         spDefense: 70,
         speed: 97,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/20.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "hyperfang", level: 1 },
         { id: "scaryface", level: 14 },
         { id: "crunch", level: 20 },
         { id: "superfang", level: 26 },
      ],
      abilities: ["runAway", "guts"],
   },

   spearow: {
      id: "spearow",
      name: "Spearow",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 40,
         attack: 60,
         defense: 30,
         spAttack: 31,
         spDefense: 31,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/21.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/21.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "growl", level: 1 },
         { id: "leer", level: 4 },
         { id: "furyattack", level: 8 },
         { id: "pursuit", level: 12 },
         { id: "aerialace", level: 16 },
      ],
      abilities: ["keenEye"],
   },

   fearow: {
      id: "fearow",
      name: "Fearow",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 65,
         attack: 90,
         defense: 65,
         spAttack: 61,
         spDefense: 61,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/22.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "growl", level: 1 },
         { id: "leer", level: 1 },
         { id: "furyattack", level: 1 },
         { id: "pursuit", level: 13 },
         { id: "aerialace", level: 17 },
         { id: "drillpeck", level: 25 },
         { id: "agility", level: 33 },
      ],
      abilities: ["keenEye"],
   },

   ekans: {
      id: "ekans",
      name: "Ekans",
      types: ["Poison"],
      baseStats: {
         hp: 35,
         attack: 60,
         defense: 44,
         spAttack: 40,
         spDefense: 54,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/23.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/23.gif",
      learnset: [
         { id: "wrap", level: 1 },
         { id: "leer", level: 1 },
         { id: "poisonsting", level: 4 },
         { id: "bite", level: 9 },
         { id: "glare", level: 12 },
         { id: "screech", level: 17 },
      ],
      abilities: ["intimidate", "shedSkin"],
   },

   arbok: {
      id: "arbok",
      name: "Arbok",
      types: ["Poison"],
      baseStats: {
         hp: 60,
         attack: 95,
         defense: 69,
         spAttack: 65,
         spDefense: 79,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/24.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/24.gif",
      learnset: [
         { id: "wrap", level: 1 },
         { id: "leer", level: 1 },
         { id: "poisonsting", level: 1 },
         { id: "bite", level: 1 },
         { id: "glare", level: 12 },
         { id: "screech", level: 17 },
         { id: "acid", level: 20 },
         { id: "crunch", level: 28 },
      ],
      abilities: ["intimidate", "shedSkin"],
   },

   // MORE GENERATION 1 POKEMON CONTINUE...
   sandshrew: {
      id: "sandshrew",
      name: "Sandshrew",
      types: ["Ground"],
      baseStats: {
         hp: 50,
         attack: 75,
         defense: 85,
         spAttack: 20,
         spDefense: 30,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/27.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "defensecurl", level: 1 },
         { id: "sandattack", level: 6 },
         { id: "poisonsting", level: 10 },
         { id: "slash", level: 17 },
         { id: "earthquake", level: 30 },
      ],
      abilities: ["sandVeil"],
   },

   sandslash: {
      id: "sandslash",
      name: "Sandslash",
      types: ["Ground"],
      baseStats: {
         hp: 75,
         attack: 100,
         defense: 110,
         spAttack: 45,
         spDefense: 55,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/28.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/28.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "defensecurl", level: 1 },
         { id: "sandattack", level: 1 },
         { id: "poisonsting", level: 10 },
         { id: "slash", level: 17 },
         { id: "earthquake", level: 30 },
         { id: "furycutter", level: 33 },
      ],
      abilities: ["sandVeil"],
   },

   nidoranF: {
      id: "nidoranF",
      name: "Nidoran♀",
      types: ["Poison"],
      baseStats: {
         hp: 55,
         attack: 47,
         defense: 52,
         spAttack: 40,
         spDefense: 40,
         speed: 41,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/29.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "tackle", level: 1 },
         { id: "scratch", level: 7 },
         { id: "poisonsting", level: 9 },
         { id: "doublekick", level: 13 },
      ],
      abilities: ["poisonPoint", "rivalry"],
   },

   nidorina: {
      id: "nidorina",
      name: "Nidorina",
      types: ["Poison"],
      baseStats: {
         hp: 70,
         attack: 62,
         defense: 67,
         spAttack: 55,
         spDefense: 55,
         speed: 56,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/30.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "tackle", level: 1 },
         { id: "scratch", level: 1 },
         { id: "poisonsting", level: 9 },
         { id: "doublekick", level: 13 },
         { id: "bite", level: 20 },
      ],
      abilities: ["poisonPoint", "rivalry"],
   },

   nidoqueen: {
      id: "nidoqueen",
      name: "Nidoqueen",
      types: ["Poison", "Ground"],
      baseStats: {
         hp: 90,
         attack: 92,
         defense: 87,
         spAttack: 75,
         spDefense: 85,
         speed: 76,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/31.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "doublekick", level: 1 },
         { id: "poisonsting", level: 1 },
         { id: "bodyslam", level: 22 },
         { id: "earthquake", level: 30 },
         { id: "superpower", level: 38 },
      ],
      abilities: ["poisonPoint", "rivalry"],
   },

   nidoranM: {
      id: "nidoranM",
      name: "Nidoran♂",
      types: ["Poison"],
      baseStats: {
         hp: 46,
         attack: 57,
         defense: 40,
         spAttack: 40,
         spDefense: 40,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/32.gif",
      learnset: [
         { id: "leer", level: 1 },
         { id: "peck", level: 1 },
         { id: "focusenergy", level: 7 },
         { id: "doublekick", level: 9 },
         { id: "poisonsting", level: 13 },
      ],
      abilities: ["poisonPoint", "rivalry"],
   },

   nidorino: {
      id: "nidorino",
      name: "Nidorino",
      types: ["Poison"],
      baseStats: {
         hp: 61,
         attack: 72,
         defense: 57,
         spAttack: 55,
         spDefense: 55,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/33.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/33.gif",
      learnset: [
         { id: "leer", level: 1 },
         { id: "peck", level: 1 },
         { id: "focusenergy", level: 1 },
         { id: "doublekick", level: 9 },
         { id: "poisonsting", level: 13 },
         { id: "hornattack", level: 20 },
      ],
      abilities: ["poisonPoint", "rivalry"],
   },

   clefairy: {
      id: "clefairy",
      name: "Clefairy",
      types: ["Fairy"],
      baseStats: {
         hp: 70,
         attack: 45,
         defense: 48,
         spAttack: 60,
         spDefense: 65,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/35.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "growl", level: 1 },
         { id: "encore", level: 4 },
         { id: "sing", level: 8 },
         { id: "doubleslap", level: 12 },
         { id: "dazzlinggleam", level: 20 },
      ],
      abilities: ["cuteCharm", "magicGuard"],
   },

   clefable: {
      id: "clefable",
      name: "Clefable",
      types: ["Fairy"],
      baseStats: {
         hp: 95,
         attack: 70,
         defense: 73,
         spAttack: 95,
         spDefense: 90,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/36.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/36.gif",
      learnset: [
         { id: "sing", level: 1 },
         { id: "doubleslap", level: 1 },
         { id: "metronome", level: 1 },
         { id: "dazzlinggleam", level: 1 },
         { id: "moonblast", level: 30 },
         { id: "moonlight", level: 35 },
      ],
      abilities: ["cuteCharm", "magicGuard"],
   },

   vulpix: {
      id: "vulpix",
      name: "Vulpix",
      types: ["Fire"],
      baseStats: {
         hp: 38,
         attack: 41,
         defense: 40,
         spAttack: 50,
         spDefense: 65,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/37.gif",
      learnset: [
         { id: "ember", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "roar", level: 4 },
         { id: "quickattack", level: 7 },
         { id: "confuseray", level: 10 },
         { id: "flamethrower", level: 25 },
      ],
      abilities: ["flashFire"],
   },

   ninetales: {
      id: "ninetales",
      name: "Ninetales",
      types: ["Fire"],
      baseStats: {
         hp: 73,
         attack: 76,
         defense: 75,
         spAttack: 81,
         spDefense: 100,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/38.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/38.gif",
      learnset: [
         { id: "ember", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "confuseray", level: 1 },
         { id: "safeguard", level: 1 },
         { id: "flamethrower", level: 1 },
         { id: "fireblast", level: 35 },
         { id: "nastyplot", level: 42 },
      ],
      abilities: ["flashFire"],
   },

   jigglypuff: {
      id: "jigglypuff",
      name: "Jigglypuff",
      types: ["Normal", "Fairy"],
      baseStats: {
         hp: 115,
         attack: 45,
         defense: 20,
         spAttack: 45,
         spDefense: 25,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/39.gif",
      learnset: [
         { id: "sing", level: 1 },
         { id: "pound", level: 1 },
         { id: "defensecurl", level: 3 },
         { id: "rollout", level: 6 },
         { id: "round", level: 9 },
         { id: "hypervoice", level: 32 },
      ],
      abilities: ["cuteCharm", "competitive"],
   },

   wigglytuff: {
      id: "wigglytuff",
      name: "Wigglytuff",
      types: ["Normal", "Fairy"],
      baseStats: {
         hp: 140,
         attack: 70,
         defense: 45,
         spAttack: 85,
         spDefense: 50,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/40.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/40.gif",
      learnset: [
         { id: "sing", level: 1 },
         { id: "defensecurl", level: 1 },
         { id: "doubleedge", level: 1 },
         { id: "hypervoice", level: 1 },
         { id: "dazzlinggleam", level: 30 },
      ],
      abilities: ["cuteCharm", "competitive"],
   },

   zubat: {
      id: "zubat",
      name: "Zubat",
      types: ["Poison", "Flying"],
      baseStats: {
         hp: 40,
         attack: 45,
         defense: 35,
         spAttack: 30,
         spDefense: 40,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/41.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/41.gif",
      learnset: [
         { id: "leechlife", level: 1 },
         { id: "supersonic", level: 5 },
         { id: "astonish", level: 9 },
         { id: "bite", level: 13 },
         { id: "wingattack", level: 17 },
         { id: "confuseray", level: 21 },
      ],
      abilities: ["innerFocus"],
   },

   golbat: {
      id: "golbat",
      name: "Golbat",
      types: ["Poison", "Flying"],
      baseStats: {
         hp: 75,
         attack: 80,
         defense: 70,
         spAttack: 65,
         spDefense: 75,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/42.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/42.gif",
      learnset: [
         { id: "leechlife", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "astonish", level: 1 },
         { id: "bite", level: 13 },
         { id: "wingattack", level: 17 },
         { id: "confuseray", level: 21 },
         { id: "poisonfang", level: 27 },
         { id: "haze", level: 34 },
      ],
      abilities: ["innerFocus"],
   },

   oddish: {
      id: "oddish",
      name: "Oddish",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 45,
         attack: 50,
         defense: 55,
         spAttack: 75,
         spDefense: 65,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/43.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/43.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "growth", level: 5 },
         { id: "acidarmor", level: 9 },
         { id: "poisonpowder", level: 13 },
         { id: "stunspore", level: 14 },
         { id: "sleeppowder", level: 15 },
      ],
      abilities: ["chlorophyll"],
   },

   gloom: {
      id: "gloom",
      name: "Gloom",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 60,
         attack: 65,
         defense: 70,
         spAttack: 85,
         spDefense: 75,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/44.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/44.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "growth", level: 1 },
         { id: "acidarmor", level: 1 },
         { id: "poisonpowder", level: 13 },
         { id: "stunspore", level: 14 },
         { id: "sleeppowder", level: 15 },
         { id: "acid", level: 24 },
      ],
      abilities: ["chlorophyll"],
   },

   vileplume: {
      id: "vileplume",
      name: "Vileplume",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 75,
         attack: 80,
         defense: 85,
         spAttack: 110,
         spDefense: 90,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/45.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/45.gif",
      learnset: [
         { id: "aromatherapy", level: 1 },
         { id: "megadrain", level: 1 },
         { id: "poisonpowder", level: 1 },
         { id: "stunspore", level: 1 },
         { id: "sleeppowder", level: 1 },
         { id: "petalstorm", level: 24 },
         { id: "sludgebomb", level: 30 },
      ],
      abilities: ["chlorophyll"],
   },

   paras: {
      id: "paras",
      name: "Paras",
      types: ["Bug", "Grass"],
      baseStats: {
         hp: 35,
         attack: 70,
         defense: 55,
         spAttack: 45,
         spDefense: 55,
         speed: 25,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/46.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/46.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "stunspore", level: 6 },
         { id: "poisonpowder", level: 6 },
         { id: "leechlife", level: 11 },
         { id: "spore", level: 17 },
         { id: "slash", level: 22 },
      ],
      abilities: ["effectSpore", "drySign"],
   },

   parasect: {
      id: "parasect",
      name: "Parasect",
      types: ["Bug", "Grass"],
      baseStats: {
         hp: 60,
         attack: 95,
         defense: 80,
         spAttack: 60,
         spDefense: 80,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/47.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/47.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "stunspore", level: 1 },
         { id: "poisonpowder", level: 1 },
         { id: "leechlife", level: 11 },
         { id: "spore", level: 17 },
         { id: "slash", level: 22 },
         { id: "gigadrain", level: 30 },
         { id: "xscissor", level: 39 },
      ],
      abilities: ["effectSpore", "drySign"],
   },

   venonat: {
      id: "venonat",
      name: "Venonat",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 60,
         attack: 55,
         defense: 50,
         spAttack: 40,
         spDefense: 55,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/48.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/48.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "disable", level: 1 },
         { id: "foresight", level: 5 },
         { id: "supersonic", level: 11 },
         { id: "confusion", level: 13 },
         { id: "poisonpowder", level: 17 },
      ],
      abilities: ["compoundEyes", "tintedLens"],
   },

   venomoth: {
      id: "venomoth",
      name: "Venomoth",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 70,
         attack: 65,
         defense: 60,
         spAttack: 90,
         spDefense: 75,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/49.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "disable", level: 1 },
         { id: "foresight", level: 1 },
         { id: "supersonic", level: 11 },
         { id: "confusion", level: 13 },
         { id: "poisonpowder", level: 17 },
         { id: "leechlife", level: 23 },
         { id: "psychic", level: 36 },
      ],
      abilities: ["shieldDust", "tintedLens"],
   },

   // Diglett line
   diglett: {
      id: "diglett",
      name: "Diglett",
      types: ["Ground"],
      baseStats: {
         hp: 10,
         attack: 55,
         defense: 25,
         spAttack: 35,
         spDefense: 45,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/50.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/50.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "earthquake", level: 26 },
         { id: "slash", level: 33 },
      ],
      abilities: ["sandVeil", "arenatrap"],
   },

   dugtrio: {
      id: "dugtrio",
      name: "Dugtrio",
      types: ["Ground"],
      baseStats: {
         hp: 35,
         attack: 100,
         defense: 50,
         spAttack: 50,
         spDefense: 70,
         speed: 120,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/51.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/51.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "earthquake", level: 26 },
         { id: "slash", level: 33 },
      ],
      abilities: ["sandVeil", "arenatrap"],
   },

   // Meowth line
   meowth: {
      id: "meowth",
      name: "Meowth",
      types: ["Normal"],
      baseStats: {
         hp: 40,
         attack: 45,
         defense: 35,
         spAttack: 40,
         spDefense: 40,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/52.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "bite", level: 11 },
         { id: "slash", level: 20 },
      ],
      abilities: ["pickup", "technician"],
   },

   persian: {
      id: "persian",
      name: "Persian",
      types: ["Normal"],
      baseStats: {
         hp: 65,
         attack: 70,
         defense: 60,
         spAttack: 65,
         spDefense: 65,
         speed: 115,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/53.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/53.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "bite", level: 11 },
         { id: "slash", level: 20 },
      ],
      abilities: ["limber", "technician"],
   },

   // Psyduck line
   psyduck: {
      id: "psyduck",
      name: "Psyduck",
      types: ["Water"],
      baseStats: {
         hp: 50,
         attack: 52,
         defense: 48,
         spAttack: 65,
         spDefense: 50,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/54.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "confusion", level: 18 },
         { id: "psychic", level: 31 },
         { id: "hydropump", level: 44 },
      ],
      abilities: ["damp", "cloudNine"],
   },

   golduck: {
      id: "golduck",
      name: "Golduck",
      types: ["Water"],
      baseStats: {
         hp: 80,
         attack: 82,
         defense: 78,
         spAttack: 95,
         spDefense: 80,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/55.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/55.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "confusion", level: 1 },
         { id: "psychic", level: 31 },
         { id: "hydropump", level: 44 },
      ],
      abilities: ["damp", "cloudNine"],
   },

   // Mankey line
   mankey: {
      id: "mankey",
      name: "Mankey",
      types: ["Fighting"],
      baseStats: {
         hp: 40,
         attack: 80,
         defense: 35,
         spAttack: 35,
         spDefense: 45,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/56.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/56.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "lowkick", level: 9 },
         { id: "crosschop", level: 25 },
         { id: "closecombat", level: 37 },
      ],
      abilities: ["vitalSpirit", "angerPoint"],
   },

   primeape: {
      id: "primeape",
      name: "Primeape",
      types: ["Fighting"],
      baseStats: {
         hp: 65,
         attack: 105,
         defense: 60,
         spAttack: 60,
         spDefense: 70,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/57.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/57.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "lowkick", level: 1 },
         { id: "crosschop", level: 25 },
         { id: "closecombat", level: 37 },
      ],
      abilities: ["vitalSpirit", "angerPoint"],
   },

   // Growlithe line
   growlithe: {
      id: "growlithe",
      name: "Growlithe",
      types: ["Fire"],
      baseStats: {
         hp: 55,
         attack: 70,
         defense: 45,
         spAttack: 70,
         spDefense: 50,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/58.gif",
      learnset: [
         { id: "bite", level: 1 },
         { id: "ember", level: 7 },
         { id: "flamethrower", level: 21 },
         { id: "crunch", level: 28 },
      ],
      abilities: ["intimidate", "flashFire"],
   },

   arcanine: {
      id: "arcanine",
      name: "Arcanine",
      types: ["Fire"],
      baseStats: {
         hp: 90,
         attack: 110,
         defense: 80,
         spAttack: 100,
         spDefense: 80,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/59.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/59.gif",
      learnset: [
         { id: "bite", level: 1 },
         { id: "ember", level: 1 },
         { id: "flamethrower", level: 1 },
         { id: "crunch", level: 1 },
         { id: "extremespeed", level: 1 },
      ],
      abilities: ["intimidate", "flashFire"],
   },

   // Poliwag line
   poliwag: {
      id: "poliwag",
      name: "Poliwag",
      types: ["Water"],
      baseStats: {
         hp: 40,
         attack: 50,
         defense: 40,
         spAttack: 40,
         spDefense: 40,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/60.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/60.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "hypnosis", level: 8 },
         { id: "bodyslam", level: 15 },
         { id: "surf", level: 27 },
      ],
      abilities: ["waterAbsorb", "damp"],
   },

   poliwhirl: {
      id: "poliwhirl",
      name: "Poliwhirl",
      types: ["Water"],
      baseStats: {
         hp: 65,
         attack: 65,
         defense: 65,
         spAttack: 50,
         spDefense: 50,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/61.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/61.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "bodyslam", level: 15 },
         { id: "surf", level: 27 },
      ],
      abilities: ["waterAbsorb", "damp"],
   },

   poliwrath: {
      id: "poliwrath",
      name: "Poliwrath",
      types: ["Water", "Fighting"],
      baseStats: {
         hp: 90,
         attack: 95,
         defense: 95,
         spAttack: 70,
         spDefense: 90,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/62.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/62.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "bodyslam", level: 1 },
         { id: "surf", level: 1 },
         { id: "dynamicpunch", level: 1 },
      ],
      abilities: ["waterAbsorb", "damp"],
   },

   // Abra line
   abra: {
      id: "abra",
      name: "Abra",
      types: ["Psychic"],
      baseStats: {
         hp: 25,
         attack: 20,
         defense: 15,
         spAttack: 105,
         spDefense: 55,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/63.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/63.gif",
      learnset: [{ id: "teleport", level: 1 }],
      abilities: ["synchronize", "innerFocus"],
   },

   kadabra: {
      id: "kadabra",
      name: "Kadabra",
      types: ["Psychic"],
      baseStats: {
         hp: 40,
         attack: 35,
         defense: 30,
         spAttack: 120,
         spDefense: 70,
         speed: 105,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/64.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/64.gif",
      learnset: [
         { id: "teleport", level: 1 },
         { id: "confusion", level: 16 },
         { id: "psychic", level: 21 },
         { id: "recover", level: 31 },
      ],
      abilities: ["synchronize", "innerFocus"],
   },

   alakazam: {
      id: "alakazam",
      name: "Alakazam",
      types: ["Psychic"],
      baseStats: {
         hp: 55,
         attack: 50,
         defense: 45,
         spAttack: 135,
         spDefense: 95,
         speed: 120,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/65.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/65.gif",
      learnset: [
         { id: "teleport", level: 1 },
         { id: "confusion", level: 1 },
         { id: "psychic", level: 21 },
         { id: "recover", level: 31 },
      ],
      abilities: ["synchronize", "innerFocus"],
   },

   // Machop line
   machop: {
      id: "machop",
      name: "Machop",
      types: ["Fighting"],
      baseStats: {
         hp: 70,
         attack: 80,
         defense: 50,
         spAttack: 35,
         spDefense: 35,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/66.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/66.gif",
      learnset: [
         { id: "lowkick", level: 1 },
         { id: "seismictoss", level: 19 },
         { id: "submission", level: 25 },
         { id: "crosschop", level: 46 },
      ],
      abilities: ["guts", "noGuard"],
   },

   machoke: {
      id: "machoke",
      name: "Machoke",
      types: ["Fighting"],
      baseStats: {
         hp: 80,
         attack: 100,
         defense: 70,
         spAttack: 50,
         spDefense: 60,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/67.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/67.gif",
      learnset: [
         { id: "lowkick", level: 1 },
         { id: "seismictoss", level: 19 },
         { id: "submission", level: 25 },
         { id: "crosschop", level: 46 },
      ],
      abilities: ["guts", "noGuard"],
   },

   machamp: {
      id: "machamp",
      name: "Machamp",
      types: ["Fighting"],
      baseStats: {
         hp: 90,
         attack: 130,
         defense: 80,
         spAttack: 65,
         spDefense: 85,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/68.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/68.gif",
      learnset: [
         { id: "lowkick", level: 1 },
         { id: "seismictoss", level: 1 },
         { id: "submission", level: 25 },
         { id: "crosschop", level: 46 },
         { id: "dynamicpunch", level: 1 },
      ],
      abilities: ["guts", "noGuard"],
   },

   // Bellsprout line
   bellsprout: {
      id: "bellsprout",
      name: "Bellsprout",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 50,
         attack: 75,
         defense: 35,
         spAttack: 70,
         spDefense: 30,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/69.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/69.gif",
      learnset: [
         { id: "vinewhip", level: 1 },
         { id: "acid", level: 6 },
         { id: "sleeppowder", level: 11 },
         { id: "razorleaf", level: 15 },
      ],
      abilities: ["chlorophyll"],
   },

   weepinbell: {
      id: "weepinbell",
      name: "Weepinbell",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 65,
         attack: 90,
         defense: 50,
         spAttack: 85,
         spDefense: 45,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/70.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/70.gif",
      learnset: [
         { id: "vinewhip", level: 1 },
         { id: "acid", level: 1 },
         { id: "sleeppowder", level: 11 },
         { id: "razorleaf", level: 15 },
      ],
      abilities: ["chlorophyll"],
   },

   victreebel: {
      id: "victreebel",
      name: "Victreebel",
      types: ["Grass", "Poison"],
      baseStats: {
         hp: 80,
         attack: 105,
         defense: 65,
         spAttack: 100,
         spDefense: 70,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/71.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/71.gif",
      learnset: [
         { id: "vinewhip", level: 1 },
         { id: "acid", level: 1 },
         { id: "sleeppowder", level: 1 },
         { id: "razorleaf", level: 1 },
         { id: "leafblade", level: 1 },
      ],
      abilities: ["chlorophyll"],
   },

   // Tentacool line
   tentacool: {
      id: "tentacool",
      name: "Tentacool",
      types: ["Water", "Poison"],
      baseStats: {
         hp: 40,
         attack: 40,
         defense: 35,
         spAttack: 50,
         spDefense: 100,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/72.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/72.gif",
      learnset: [
         { id: "poison", level: 1 },
         { id: "watergun", level: 6 },
         { id: "toxic", level: 12 },
         { id: "surf", level: 19 },
      ],
      abilities: ["clearBody", "liquidOoze"],
   },

   tentacruel: {
      id: "tentacruel",
      name: "Tentacruel",
      types: ["Water", "Poison"],
      baseStats: {
         hp: 80,
         attack: 70,
         defense: 65,
         spAttack: 80,
         spDefense: 120,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/73.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/73.gif",
      learnset: [
         { id: "poison", level: 1 },
         { id: "watergun", level: 1 },
         { id: "toxic", level: 12 },
         { id: "surf", level: 19 },
         { id: "sludgebomb", level: 30 },
      ],
      abilities: ["clearBody", "liquidOoze"],
   },

   // Geodude line
   geodude: {
      id: "geodude",
      name: "Geodude",
      types: ["Rock", "Ground"],
      baseStats: {
         hp: 40,
         attack: 80,
         defense: 100,
         spAttack: 30,
         spDefense: 30,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/74.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/74.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "rockthrow", level: 6 },
         { id: "earthquake", level: 22 },
         { id: "stoneedge", level: 36 },
      ],
      abilities: ["rockHead", "sturdy"],
   },

   graveler: {
      id: "graveler",
      name: "Graveler",
      types: ["Rock", "Ground"],
      baseStats: {
         hp: 55,
         attack: 95,
         defense: 115,
         spAttack: 45,
         spDefense: 45,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/75.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/75.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "rockthrow", level: 1 },
         { id: "earthquake", level: 22 },
         { id: "stoneedge", level: 36 },
      ],
      abilities: ["rockHead", "sturdy"],
   },

   golem: {
      id: "golem",
      name: "Golem",
      types: ["Rock", "Ground"],
      baseStats: {
         hp: 80,
         attack: 120,
         defense: 130,
         spAttack: 55,
         spDefense: 65,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/76.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/76.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "rockthrow", level: 1 },
         { id: "earthquake", level: 22 },
         { id: "stoneedge", level: 36 },
         { id: "explosion", level: 1 },
      ],
      abilities: ["rockHead", "sturdy"],
   },

   // Ponyta line
   ponyta: {
      id: "ponyta",
      name: "Ponyta",
      types: ["Fire"],
      baseStats: {
         hp: 50,
         attack: 85,
         defense: 55,
         spAttack: 65,
         spDefense: 65,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/77.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/77.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "ember", level: 4 },
         { id: "stomp", level: 9 },
         { id: "flamethrower", level: 21 },
      ],
      abilities: ["runAway", "flashFire"],
   },

   rapidash: {
      id: "rapidash",
      name: "Rapidash",
      types: ["Fire"],
      baseStats: {
         hp: 65,
         attack: 100,
         defense: 70,
         spAttack: 80,
         spDefense: 80,
         speed: 105,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/78.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "ember", level: 1 },
         { id: "stomp", level: 9 },
         { id: "flamethrower", level: 21 },
         { id: "megahorn", level: 1 },
      ],
      abilities: ["runAway", "flashFire"],
   },

   // Slowpoke line
   slowpoke: {
      id: "slowpoke",
      name: "Slowpoke",
      types: ["Water", "Psychic"],
      baseStats: {
         hp: 90,
         attack: 65,
         defense: 65,
         spAttack: 40,
         spDefense: 40,
         speed: 15,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/79.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/79.gif",
      learnset: [
         { id: "confusion", level: 1 },
         { id: "watergun", level: 6 },
         { id: "headbutt", level: 15 },
         { id: "psychic", level: 29 },
      ],
      abilities: ["oblivious", "ownTempo"],
   },

   slowbro: {
      id: "slowbro",
      name: "Slowbro",
      types: ["Water", "Psychic"],
      baseStats: {
         hp: 95,
         attack: 75,
         defense: 110,
         spAttack: 100,
         spDefense: 80,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/80.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/80.gif",
      learnset: [
         { id: "confusion", level: 1 },
         { id: "watergun", level: 1 },
         { id: "headbutt", level: 15 },
         { id: "psychic", level: 29 },
         { id: "surf", level: 1 },
      ],
      abilities: ["oblivious", "ownTempo"],
   },

   // Magnemite line
   magnemite: {
      id: "magnemite",
      name: "Magnemite",
      types: ["Electric", "Steel"],
      baseStats: {
         hp: 25,
         attack: 35,
         defense: 70,
         spAttack: 95,
         spDefense: 55,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/81.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/81.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "thundershock", level: 6 },
         { id: "sonicboom", level: 11 },
         { id: "thunderbolt", level: 21 },
      ],
      abilities: ["magnetPull", "sturdy"],
   },

   magneton: {
      id: "magneton",
      name: "Magneton",
      types: ["Electric", "Steel"],
      baseStats: {
         hp: 50,
         attack: 60,
         defense: 95,
         spAttack: 120,
         spDefense: 70,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/82.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "sonicboom", level: 11 },
         { id: "thunderbolt", level: 21 },
         { id: "zapcannon", level: 30 },
      ],
      abilities: ["magnetPull", "sturdy"],
   },

   // Farfetch'd (single stage)
   farfetchd: {
      id: "farfetchd",
      name: "Farfetch'd",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 52,
         attack: 90,
         defense: 55,
         spAttack: 58,
         spDefense: 62,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/83.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/83.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "slash", level: 7 },
         { id: "airslash", level: 19 },
         { id: "agility", level: 25 },
      ],
      abilities: ["keenEye", "innerFocus"],
   },

   // Doduo line
   doduo: {
      id: "doduo",
      name: "Doduo",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 35,
         attack: 85,
         defense: 45,
         spAttack: 35,
         spDefense: 35,
         speed: 75,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/84.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/84.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "quickattack", level: 5 },
         { id: "drillpeck", level: 20 },
         { id: "agility", level: 24 },
      ],
      abilities: ["runAway", "earlyBird"],
   },

   dodrio: {
      id: "dodrio",
      name: "Dodrio",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 60,
         attack: 110,
         defense: 70,
         spAttack: 60,
         spDefense: 60,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/85.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/85.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "drillpeck", level: 20 },
         { id: "agility", level: 24 },
         { id: "triattack", level: 1 },
      ],
      abilities: ["runAway", "earlyBird"],
   },

   // Seel line
   seel: {
      id: "seel",
      name: "Seel",
      types: ["Water"],
      baseStats: {
         hp: 65,
         attack: 45,
         defense: 55,
         spAttack: 45,
         spDefense: 70,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/86.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/86.gif",
      learnset: [
         { id: "headbutt", level: 1 },
         { id: "icebeam", level: 16 },
         { id: "aurora", level: 21 },
         { id: "surf", level: 32 },
      ],
      abilities: ["thickFat", "hydration"],
   },

   dewgong: {
      id: "dewgong",
      name: "Dewgong",
      types: ["Water", "Ice"],
      baseStats: {
         hp: 90,
         attack: 70,
         defense: 80,
         spAttack: 70,
         spDefense: 95,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/87.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/87.gif",
      learnset: [
         { id: "headbutt", level: 1 },
         { id: "icebeam", level: 1 },
         { id: "aurora", level: 21 },
         { id: "surf", level: 32 },
         { id: "blizzard", level: 1 },
      ],
      abilities: ["thickFat", "hydration"],
   },

   // Grimer line
   grimer: {
      id: "grimer",
      name: "Grimer",
      types: ["Poison"],
      baseStats: {
         hp: 80,
         attack: 80,
         defense: 50,
         spAttack: 40,
         spDefense: 50,
         speed: 25,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/88.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/88.gif",
      learnset: [
         { id: "poison", level: 1 },
         { id: "sludge", level: 8 },
         { id: "toxic", level: 16 },
         { id: "sludgebomb", level: 23 },
      ],
      abilities: ["stench", "stickyHold"],
   },

   muk: {
      id: "muk",
      name: "Muk",
      types: ["Poison"],
      baseStats: {
         hp: 105,
         attack: 105,
         defense: 75,
         spAttack: 65,
         spDefense: 100,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/89.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/89.gif",
      learnset: [
         { id: "poison", level: 1 },
         { id: "sludge", level: 1 },
         { id: "toxic", level: 16 },
         { id: "sludgebomb", level: 23 },
         { id: "gunkshot", level: 1 },
      ],
      abilities: ["stench", "stickyHold"],
   },

   // Shellder line
   shellder: {
      id: "shellder",
      name: "Shellder",
      types: ["Water"],
      baseStats: {
         hp: 30,
         attack: 65,
         defense: 100,
         spAttack: 45,
         spDefense: 25,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/90.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/90.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "watergun", level: 9 },
         { id: "clamp", level: 17 },
         { id: "icebeam", level: 25 },
      ],
      abilities: ["shellArmor", "skillLink"],
   },

   cloyster: {
      id: "cloyster",
      name: "Cloyster",
      types: ["Water", "Ice"],
      baseStats: {
         hp: 50,
         attack: 95,
         defense: 180,
         spAttack: 85,
         spDefense: 45,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/91.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/91.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "watergun", level: 1 },
         { id: "clamp", level: 1 },
         { id: "icebeam", level: 1 },
         { id: "spikes", level: 1 },
      ],
      abilities: ["shellArmor", "skillLink"],
   },

   // Gastly line
   gastly: {
      id: "gastly",
      name: "Gastly",
      types: ["Ghost", "Poison"],
      baseStats: {
         hp: 30,
         attack: 35,
         defense: 30,
         spAttack: 100,
         spDefense: 35,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/92.gif",
      learnset: [
         { id: "lick", level: 1 },
         { id: "hypnosis", level: 8 },
         { id: "nightmare", level: 13 },
         { id: "shadowball", level: 19 },
      ],
      abilities: ["levitate"],
   },

   haunter: {
      id: "haunter",
      name: "Haunter",
      types: ["Ghost", "Poison"],
      baseStats: {
         hp: 45,
         attack: 50,
         defense: 45,
         spAttack: 115,
         spDefense: 55,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/93.gif",
      learnset: [
         { id: "lick", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "nightmare", level: 13 },
         { id: "shadowball", level: 19 },
         { id: "dreameater", level: 25 },
      ],
      abilities: ["levitate"],
   },

   gengar: {
      id: "gengar",
      name: "Gengar",
      types: ["Ghost", "Poison"],
      baseStats: {
         hp: 60,
         attack: 65,
         defense: 60,
         spAttack: 130,
         spDefense: 75,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/94.gif",
      learnset: [
         { id: "lick", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "nightmare", level: 1 },
         { id: "shadowball", level: 19 },
         { id: "dreameater", level: 25 },
         { id: "shadowpunch", level: 1 },
      ],
      abilities: ["cursedBody"],
   },

   // Onix (single stage)
   onix: {
      id: "onix",
      name: "Onix",
      types: ["Rock", "Ground"],
      baseStats: {
         hp: 35,
         attack: 45,
         defense: 160,
         spAttack: 30,
         spDefense: 45,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/95.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/95.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "bind", level: 7 },
         { id: "rockthrow", level: 10 },
         { id: "earthquake", level: 36 },
      ],
      abilities: ["rockHead", "sturdy"],
   },

   // Drowzee line
   drowzee: {
      id: "drowzee",
      name: "Drowzee",
      types: ["Psychic"],
      baseStats: {
         hp: 60,
         attack: 48,
         defense: 45,
         spAttack: 43,
         spDefense: 90,
         speed: 42,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/96.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/96.gif",
      learnset: [
         { id: "hypnosis", level: 1 },
         { id: "confusion", level: 12 },
         { id: "headbutt", level: 17 },
         { id: "psychic", level: 32 },
      ],
      abilities: ["insomnia", "forewarn"],
   },

   hypno: {
      id: "hypno",
      name: "Hypno",
      types: ["Psychic"],
      baseStats: {
         hp: 85,
         attack: 73,
         defense: 70,
         spAttack: 73,
         spDefense: 115,
         speed: 67,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/97.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/97.gif",
      learnset: [
         { id: "hypnosis", level: 1 },
         { id: "confusion", level: 1 },
         { id: "headbutt", level: 17 },
         { id: "psychic", level: 32 },
         { id: "dreameater", level: 1 },
      ],
      abilities: ["insomnia", "forewarn"],
   },

   // Krabby line
   krabby: {
      id: "krabby",
      name: "Krabby",
      types: ["Water"],
      baseStats: {
         hp: 30,
         attack: 105,
         defense: 90,
         spAttack: 25,
         spDefense: 25,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/98.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/98.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "vicegrip", level: 5 },
         { id: "guillotine", level: 34 },
         { id: "crabhammer", level: 42 },
      ],
      abilities: ["hyperCutter", "shellArmor"],
   },

   kingler: {
      id: "kingler",
      name: "Kingler",
      types: ["Water"],
      baseStats: {
         hp: 55,
         attack: 130,
         defense: 115,
         spAttack: 50,
         spDefense: 50,
         speed: 75,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/99.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/99.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "vicegrip", level: 1 },
         { id: "guillotine", level: 34 },
         { id: "crabhammer", level: 42 },
      ],
      abilities: ["hyperCutter", "shellArmor"],
   },

   // Voltorb line
   voltorb: {
      id: "voltorb",
      name: "Voltorb",
      types: ["Electric"],
      baseStats: {
         hp: 40,
         attack: 30,
         defense: 50,
         spAttack: 55,
         spDefense: 55,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/100.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "thundershock", level: 8 },
         { id: "selfdestruct", level: 15 },
         { id: "explosion", level: 43 },
      ],
      abilities: ["soundproof", "static"],
   },

   electrode: {
      id: "electrode",
      name: "Electrode",
      types: ["Electric"],
      baseStats: {
         hp: 60,
         attack: 50,
         defense: 70,
         spAttack: 80,
         spDefense: 80,
         speed: 150,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/101.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/101.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "selfdestruct", level: 15 },
         { id: "explosion", level: 43 },
         { id: "gyroball", level: 1 },
      ],
      abilities: ["soundproof", "static"],
   },

   // Exeggcute line
   exeggcute: {
      id: "exeggcute",
      name: "Exeggcute",
      types: ["Grass", "Psychic"],
      baseStats: {
         hp: 60,
         attack: 40,
         defense: 80,
         spAttack: 60,
         spDefense: 45,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/102.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/102.gif",
      learnset: [
         { id: "barrage", level: 1 },
         { id: "hypnosis", level: 7 },
         { id: "confusion", level: 11 },
         { id: "psychic", level: 25 },
      ],
      abilities: ["chlorophyll"],
   },

   exeggutor: {
      id: "exeggutor",
      name: "Exeggutor",
      types: ["Grass", "Psychic"],
      baseStats: {
         hp: 95,
         attack: 95,
         defense: 85,
         spAttack: 125,
         spDefense: 75,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/103.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/103.gif",
      learnset: [
         { id: "barrage", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "confusion", level: 1 },
         { id: "psychic", level: 1 },
         { id: "solarbeam", level: 1 },
      ],
      abilities: ["chlorophyll"],
   },

   // Cubone line
   cubone: {
      id: "cubone",
      name: "Cubone",
      types: ["Ground"],
      baseStats: {
         hp: 50,
         attack: 50,
         defense: 95,
         spAttack: 40,
         spDefense: 50,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/104.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/104.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "boneclub", level: 5 },
         { id: "bonemerang", level: 13 },
         { id: "thrash", level: 25 },
      ],
      abilities: ["rockHead", "lightningrod"],
   },

   marowak: {
      id: "marowak",
      name: "Marowak",
      types: ["Ground"],
      baseStats: {
         hp: 60,
         attack: 80,
         defense: 110,
         spAttack: 50,
         spDefense: 80,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/105.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/105.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "boneclub", level: 1 },
         { id: "bonemerang", level: 13 },
         { id: "thrash", level: 25 },
         { id: "earthquake", level: 1 },
      ],
      abilities: ["rockHead", "lightningrod"],
   },

   // Hitmon family
   hitmonlee: {
      id: "hitmonlee",
      name: "Hitmonlee",
      types: ["Fighting"],
      baseStats: {
         hp: 50,
         attack: 120,
         defense: 53,
         spAttack: 35,
         spDefense: 110,
         speed: 87,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/106.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/106.gif",
      learnset: [
         { id: "doublekick", level: 1 },
         { id: "meditate", level: 6 },
         { id: "rollingkick", level: 11 },
         { id: "jumpkick", level: 16 },
         { id: "highjumpkick", level: 21 },
      ],
      abilities: ["limber", "reckless"],
   },

   hitmonchan: {
      id: "hitmonchan",
      name: "Hitmonchan",
      types: ["Fighting"],
      baseStats: {
         hp: 50,
         attack: 105,
         defense: 79,
         spAttack: 35,
         spDefense: 110,
         speed: 76,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/107.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/107.gif",
      learnset: [
         { id: "cometpunch", level: 1 },
         { id: "agility", level: 7 },
         { id: "firepunch", level: 16 },
         { id: "icepunch", level: 16 },
         { id: "thunderpunch", level: 16 },
      ],
      abilities: ["keenEye", "ironFist"],
   },

   // Lickitung (single stage)
   lickitung: {
      id: "lickitung",
      name: "Lickitung",
      types: ["Normal"],
      baseStats: {
         hp: 90,
         attack: 55,
         defense: 75,
         spAttack: 60,
         spDefense: 75,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/108.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/108.gif",
      learnset: [
         { id: "lick", level: 1 },
         { id: "supersonic", level: 7 },
         { id: "stomp", level: 13 },
         { id: "bodyslam", level: 19 },
      ],
      abilities: ["ownTempo", "oblivious"],
   },

   // Koffing line
   koffing: {
      id: "koffing",
      name: "Koffing",
      types: ["Poison"],
      baseStats: {
         hp: 40,
         attack: 65,
         defense: 95,
         spAttack: 60,
         spDefense: 45,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/109.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/109.gif",
      learnset: [
         { id: "poison", level: 1 },
         { id: "tackle", level: 1 },
         { id: "smokescreen", level: 9 },
         { id: "selfdestruct", level: 17 },
         { id: "sludge", level: 21 },
      ],
      abilities: ["levitate"],
   },

   weezing: {
      id: "weezing",
      name: "Weezing",
      types: ["Poison"],
      baseStats: {
         hp: 65,
         attack: 90,
         defense: 120,
         spAttack: 85,
         spDefense: 70,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/110.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/110.gif",
      learnset: [
         { id: "poison", level: 1 },
         { id: "tackle", level: 1 },
         { id: "smokescreen", level: 9 },
         { id: "selfdestruct", level: 17 },
         { id: "sludge", level: 21 },
         { id: "explosion", level: 1 },
      ],
      abilities: ["levitate"],
   },

   // Rhyhorn line
   rhyhorn: {
      id: "rhyhorn",
      name: "Rhyhorn",
      types: ["Ground", "Rock"],
      baseStats: {
         hp: 80,
         attack: 85,
         defense: 95,
         spAttack: 30,
         spDefense: 30,
         speed: 25,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/111.gif",
      learnset: [
         { id: "horn", level: 1 },
         { id: "stomp", level: 9 },
         { id: "fury", level: 14 },
         { id: "hornattack", level: 19 },
         { id: "earthquake", level: 46 },
      ],
      abilities: ["lightningrod", "rockHead"],
   },

   rhydon: {
      id: "rhydon",
      name: "Rhydon",
      types: ["Ground", "Rock"],
      baseStats: {
         hp: 105,
         attack: 130,
         defense: 120,
         spAttack: 45,
         spDefense: 45,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/112.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/112.gif",
      learnset: [
         { id: "horn", level: 1 },
         { id: "stomp", level: 1 },
         { id: "fury", level: 14 },
         { id: "hornattack", level: 19 },
         { id: "earthquake", level: 46 },
         { id: "megahorn", level: 1 },
      ],
      abilities: ["lightningrod", "rockHead"],
   },

   // Chansey (single stage)
   chansey: {
      id: "chansey",
      name: "Chansey",
      types: ["Normal"],
      baseStats: {
         hp: 250,
         attack: 5,
         defense: 5,
         spAttack: 35,
         spDefense: 105,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/113.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "softboiled", level: 5 },
         { id: "doubleslap", level: 9 },
         { id: "minimize", level: 13 },
         { id: "sing", level: 17 },
         { id: "eggbomb", level: 23 },
      ],
      abilities: ["naturalCure", "sereneGrace"],
   },

   // Tangela (single stage)
   tangela: {
      id: "tangela",
      name: "Tangela",
      types: ["Grass"],
      baseStats: {
         hp: 65,
         attack: 55,
         defense: 115,
         spAttack: 100,
         spDefense: 40,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/114.gif",
      learnset: [
         { id: "constrict", level: 1 },
         { id: "bind", level: 4 },
         { id: "absorb", level: 10 },
         { id: "poisonpowder", level: 13 },
         { id: "vinewhip", level: 19 },
         { id: "sleeppowder", level: 25 },
      ],
      abilities: ["chlorophyll", "leafGuard"],
   },

   // Kangaskhan (single stage)
   kangaskhan: {
      id: "kangaskhan",
      name: "Kangaskhan",
      types: ["Normal"],
      baseStats: {
         hp: 105,
         attack: 95,
         defense: 80,
         spAttack: 40,
         spDefense: 80,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/115.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/115.gif",
      learnset: [
         { id: "cometpunch", level: 1 },
         { id: "rage", level: 7 },
         { id: "bite", level: 13 },
         { id: "tailwhip", level: 19 },
         { id: "megapunch", level: 25 },
         { id: "leer", level: 31 },
      ],
      abilities: ["earlyBird", "scrappy"],
   },

   // Horsea line
   horsea: {
      id: "horsea",
      name: "Horsea",
      types: ["Water"],
      baseStats: {
         hp: 30,
         attack: 40,
         defense: 70,
         spAttack: 70,
         spDefense: 25,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/116.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/116.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "smokescreen", level: 8 },
         { id: "leer", level: 15 },
         { id: "watergun", level: 22 },
         { id: "agility", level: 29 },
         { id: "hydropump", level: 36 },
      ],
      abilities: ["swiftSwim", "sniper"],
   },

   seadra: {
      id: "seadra",
      name: "Seadra",
      types: ["Water"],
      baseStats: {
         hp: 55,
         attack: 65,
         defense: 95,
         spAttack: 95,
         spDefense: 45,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/117.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/117.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "smokescreen", level: 1 },
         { id: "leer", level: 15 },
         { id: "watergun", level: 22 },
         { id: "agility", level: 29 },
         { id: "hydropump", level: 36 },
      ],
      abilities: ["poisonPoint", "sniper"],
   },

   // Goldeen line
   goldeen: {
      id: "goldeen",
      name: "Goldeen",
      types: ["Water"],
      baseStats: {
         hp: 45,
         attack: 67,
         defense: 60,
         spAttack: 35,
         spDefense: 50,
         speed: 63,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/118.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/118.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "tailwhip", level: 10 },
         { id: "supersonic", level: 15 },
         { id: "hornattack", level: 24 },
         { id: "agility", level: 29 },
         { id: "waterfall", level: 38 },
      ],
      abilities: ["swiftSwim", "waterVeil"],
   },

   seaking: {
      id: "seaking",
      name: "Seaking",
      types: ["Water"],
      baseStats: {
         hp: 80,
         attack: 92,
         defense: 65,
         spAttack: 65,
         spDefense: 80,
         speed: 68,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/119.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/119.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "supersonic", level: 15 },
         { id: "hornattack", level: 24 },
         { id: "agility", level: 29 },
         { id: "waterfall", level: 38 },
         { id: "megahorn", level: 1 },
      ],
      abilities: ["swiftSwim", "waterVeil"],
   },

   // Staryu line
   staryu: {
      id: "staryu",
      name: "Staryu",
      types: ["Water"],
      baseStats: {
         hp: 30,
         attack: 45,
         defense: 55,
         spAttack: 70,
         spDefense: 55,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/120.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "harden", level: 7 },
         { id: "watergun", level: 13 },
         { id: "rapidspin", level: 19 },
         { id: "recover", level: 25 },
         { id: "psychic", level: 31 },
      ],
      abilities: ["illuminate", "naturalCure"],
   },

   starmie: {
      id: "starmie",
      name: "Starmie",
      types: ["Water", "Psychic"],
      baseStats: {
         hp: 60,
         attack: 75,
         defense: 85,
         spAttack: 100,
         spDefense: 85,
         speed: 115,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/121.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/121.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "harden", level: 1 },
         { id: "watergun", level: 1 },
         { id: "rapidspin", level: 1 },
         { id: "recover", level: 1 },
         { id: "psychic", level: 1 },
         { id: "surf", level: 1 },
      ],
      abilities: ["illuminate", "naturalCure"],
   },

   // Mr. Mime (single stage)
   mrmime: {
      id: "mrmime",
      name: "Mr. Mime",
      types: ["Psychic", "Fairy"],
      baseStats: {
         hp: 40,
         attack: 45,
         defense: 65,
         spAttack: 100,
         spDefense: 120,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/122.gif",
      learnset: [
         { id: "confusion", level: 1 },
         { id: "barrier", level: 6 },
         { id: "lightscreen", level: 11 },
         { id: "doubleslap", level: 16 },
         { id: "meditate", level: 21 },
         { id: "psychic", level: 26 },
      ],
      abilities: ["soundproof", "filter"],
   },

   // Scyther (single stage in Gen 1)
   scyther: {
      id: "scyther",
      name: "Scyther",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 70,
         attack: 110,
         defense: 80,
         spAttack: 55,
         spDefense: 80,
         speed: 105,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/123.gif",
      learnset: [
         { id: "quickattack", level: 1 },
         { id: "leer", level: 6 },
         { id: "focusenergy", level: 11 },
         { id: "doubleteam", level: 16 },
         { id: "slash", level: 21 },
         { id: "swordsdance", level: 26 },
      ],
      abilities: ["swarm", "technician"],
   },

   // Jynx (single stage)
   jynx: {
      id: "jynx",
      name: "Jynx",
      types: ["Ice", "Psychic"],
      baseStats: {
         hp: 65,
         attack: 50,
         defense: 35,
         spAttack: 115,
         spDefense: 95,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/124.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/124.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "lovelykiss", level: 9 },
         { id: "doubleslap", level: 13 },
         { id: "icebeam", level: 21 },
         { id: "bodyslam", level: 25 },
         { id: "psychic", level: 35 },
      ],
      abilities: ["oblivious", "forewarn"],
   },

   // Electabuzz (single stage)
   electabuzz: {
      id: "electabuzz",
      name: "Electabuzz",
      types: ["Electric"],
      baseStats: {
         hp: 65,
         attack: 83,
         defense: 57,
         spAttack: 95,
         spDefense: 85,
         speed: 105,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/125.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/125.gif",
      learnset: [
         { id: "quickattack", level: 1 },
         { id: "leer", level: 9 },
         { id: "thunderpunch", level: 17 },
         { id: "lightscreen", level: 25 },
         { id: "thunderbolt", level: 33 },
         { id: "thunder", level: 41 },
      ],
      abilities: ["static"],
   },

   // Magmar (single stage)
   magmar: {
      id: "magmar",
      name: "Magmar",
      types: ["Fire"],
      baseStats: {
         hp: 65,
         attack: 95,
         defense: 57,
         spAttack: 100,
         spDefense: 85,
         speed: 93,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/126.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/126.gif",
      learnset: [
         { id: "ember", level: 1 },
         { id: "leer", level: 7 },
         { id: "confuseray", level: 13 },
         { id: "firepunch", level: 19 },
         { id: "smokescreen", level: 25 },
         { id: "flamethrower", level: 33 },
      ],
      abilities: ["flameBody"],
   },

   // Pinsir (single stage)
   pinsir: {
      id: "pinsir",
      name: "Pinsir",
      types: ["Bug"],
      baseStats: {
         hp: 65,
         attack: 125,
         defense: 100,
         spAttack: 55,
         spDefense: 70,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/127.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/127.gif",
      learnset: [
         { id: "vicegrip", level: 1 },
         { id: "focusenergy", level: 7 },
         { id: "bind", level: 13 },
         { id: "seismictoss", level: 19 },
         { id: "guillotine", level: 25 },
         { id: "swordsdance", level: 31 },
      ],
      abilities: ["hyperCutter", "moldBreaker"],
   },

   // Tauros (single stage)
   tauros: {
      id: "tauros",
      name: "Tauros",
      types: ["Normal"],
      baseStats: {
         hp: 75,
         attack: 100,
         defense: 95,
         spAttack: 40,
         spDefense: 70,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/128.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/128.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 4 },
         { id: "rage", level: 8 },
         { id: "hornattack", level: 13 },
         { id: "stomp", level: 19 },
         { id: "thrash", level: 26 },
      ],
      abilities: ["intimidate", "angerPoint"],
   },

   // Magikarp line
   magikarp: {
      id: "magikarp",
      name: "Magikarp",
      types: ["Water"],
      baseStats: {
         hp: 20,
         attack: 10,
         defense: 55,
         spAttack: 15,
         spDefense: 20,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/129.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "tackle", level: 15 },
         { id: "flail", level: 30 },
      ],
      abilities: ["swiftSwim"],
   },

   gyarados: {
      id: "gyarados",
      name: "Gyarados",
      types: ["Water", "Flying"],
      baseStats: {
         hp: 95,
         attack: 125,
         defense: 79,
         spAttack: 60,
         spDefense: 100,
         speed: 81,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/130.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/130.gif",
      learnset: [
         { id: "thrash", level: 1 },
         { id: "bite", level: 1 },
         { id: "dragonrage", level: 1 },
         { id: "leer", level: 1 },
         { id: "hydropump", level: 32 },
         { id: "hyperbeam", level: 41 },
      ],
      abilities: ["intimidate"],
   },

   // Lapras (single stage)
   lapras: {
      id: "lapras",
      name: "Lapras",
      types: ["Water", "Ice"],
      baseStats: {
         hp: 130,
         attack: 85,
         defense: 80,
         spAttack: 85,
         spDefense: 95,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/131.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/131.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "growl", level: 1 },
         { id: "sing", level: 7 },
         { id: "mist", level: 14 },
         { id: "bodyslam", level: 21 },
         { id: "icebeam", level: 28 },
      ],
      abilities: ["waterAbsorb", "shellArmor"],
   },

   // Ditto (single stage)
   ditto: {
      id: "ditto",
      name: "Ditto",
      types: ["Normal"],
      baseStats: {
         hp: 48,
         attack: 48,
         defense: 48,
         spAttack: 48,
         spDefense: 48,
         speed: 48,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
      learnset: [{ id: "transform", level: 1 }],
      abilities: ["limber"],
   },

   // Eevee evolutions
   eevee: {
      id: "eevee",
      name: "Eevee",
      types: ["Normal"],
      baseStats: {
         hp: 55,
         attack: 55,
         defense: 50,
         spAttack: 45,
         spDefense: 65,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/133.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 8 },
         { id: "quickattack", level: 16 },
         { id: "bite", level: 23 },
         { id: "focusenergy", level: 30 },
         { id: "takedown", level: 36 },
      ],
      abilities: ["runAway", "adaptability"],
   },

   vaporeon: {
      id: "vaporeon",
      name: "Vaporeon",
      types: ["Water"],
      baseStats: {
         hp: 130,
         attack: 65,
         defense: 60,
         spAttack: 110,
         spDefense: 95,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/134.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/134.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "watergun", level: 1 },
         { id: "quickattack", level: 16 },
         { id: "bite", level: 23 },
         { id: "aurorabeam", level: 30 },
         { id: "surf", level: 42 },
      ],
      abilities: ["waterAbsorb"],
   },

   jolteon: {
      id: "jolteon",
      name: "Jolteon",
      types: ["Electric"],
      baseStats: {
         hp: 65,
         attack: 65,
         defense: 60,
         spAttack: 110,
         spDefense: 95,
         speed: 130,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/135.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/135.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "quickattack", level: 16 },
         { id: "doublekick", level: 23 },
         { id: "agility", level: 30 },
         { id: "thunder", level: 42 },
      ],
      abilities: ["voltAbsorb"],
   },

   flareon: {
      id: "flareon",
      name: "Flareon",
      types: ["Fire"],
      baseStats: {
         hp: 65,
         attack: 130,
         defense: 60,
         spAttack: 95,
         spDefense: 110,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/136.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/136.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "ember", level: 1 },
         { id: "quickattack", level: 16 },
         { id: "bite", level: 23 },
         { id: "leer", level: 30 },
         { id: "flamethrower", level: 42 },
      ],
      abilities: ["flashFire"],
   },

   // Porygon (single stage)
   porygon: {
      id: "porygon",
      name: "Porygon",
      types: ["Normal"],
      baseStats: {
         hp: 65,
         attack: 60,
         defense: 70,
         spAttack: 85,
         spDefense: 75,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/137.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/137.gif",
      learnset: [
         { id: "conversion", level: 1 },
         { id: "tackle", level: 1 },
         { id: "sharpen", level: 9 },
         { id: "psybeam", level: 12 },
         { id: "recover", level: 20 },
         { id: "agility", level: 24 },
      ],
      abilities: ["trace", "download"],
   },

   // Omanyte line (Fossil Pokemon)
   omanyte: {
      id: "omanyte",
      name: "Omanyte",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 35,
         attack: 40,
         defense: 100,
         spAttack: 90,
         spDefense: 55,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/138.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/138.gif",
      learnset: [
         { id: "constrict", level: 1 },
         { id: "withdraw", level: 1 },
         { id: "bite", level: 19 },
         { id: "watergun", level: 25 },
         { id: "leer", level: 31 },
         { id: "spike", level: 37 },
      ],
      abilities: ["swiftSwim", "shellArmor"],
   },

   omastar: {
      id: "omastar",
      name: "Omastar",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 70,
         attack: 60,
         defense: 125,
         spAttack: 115,
         spDefense: 70,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/139.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/139.gif",
      learnset: [
         { id: "constrict", level: 1 },
         { id: "withdraw", level: 1 },
         { id: "bite", level: 1 },
         { id: "watergun", level: 25 },
         { id: "leer", level: 31 },
         { id: "spike", level: 37 },
         { id: "hydropump", level: 1 },
      ],
      abilities: ["swiftSwim", "shellArmor"],
   },

   // Kabuto line (Fossil Pokemon)
   kabuto: {
      id: "kabuto",
      name: "Kabuto",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 30,
         attack: 80,
         defense: 90,
         spAttack: 55,
         spDefense: 45,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/140.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/140.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "harden", level: 1 },
         { id: "absorb", level: 10 },
         { id: "slash", level: 19 },
         { id: "leer", level: 28 },
         { id: "hydropump", level: 37 },
      ],
      abilities: ["swiftSwim", "battleArmor"],
   },

   kabutops: {
      id: "kabutops",
      name: "Kabutops",
      types: ["Rock", "Water"],
      baseStats: {
         hp: 60,
         attack: 115,
         defense: 105,
         spAttack: 65,
         spDefense: 70,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/141.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/141.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "harden", level: 1 },
         { id: "absorb", level: 1 },
         { id: "slash", level: 19 },
         { id: "leer", level: 28 },
         { id: "hydropump", level: 37 },
         { id: "nightslash", level: 1 },
      ],
      abilities: ["swiftSwim", "battleArmor"],
   },

   // Aerodactyl (Fossil Pokemon)
   aerodactyl: {
      id: "aerodactyl",
      name: "Aerodactyl",
      types: ["Rock", "Flying"],
      baseStats: {
         hp: 80,
         attack: 105,
         defense: 65,
         spAttack: 60,
         spDefense: 75,
         speed: 130,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/142.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/142.gif",
      learnset: [
         { id: "wing", level: 1 },
         { id: "agility", level: 8 },
         { id: "bite", level: 15 },
         { id: "supersonic", level: 22 },
         { id: "ancientpower", level: 29 },
         { id: "takedown", level: 36 },
      ],
      abilities: ["rockHead", "pressure"],
   },

   // Snorlax (single stage)
   snorlax: {
      id: "snorlax",
      name: "Snorlax",
      types: ["Normal"],
      baseStats: {
         hp: 160,
         attack: 110,
         defense: 65,
         spAttack: 65,
         spDefense: 110,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/143.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "amnesia", level: 8 },
         { id: "bodyslam", level: 15 },
         { id: "harden", level: 22 },
         { id: "rest", level: 29 },
         { id: "hyperbeam", level: 36 },
      ],
      abilities: ["immunity", "thickFat"],
   },

   // Legendary Birds
   articuno: {
      id: "articuno",
      name: "Articuno",
      types: ["Ice", "Flying"],
      baseStats: {
         hp: 90,
         attack: 85,
         defense: 100,
         spAttack: 95,
         spDefense: 125,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/144.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/144.gif",
      learnset: [
         { id: "gust", level: 1 },
         { id: "powder", level: 1 },
         { id: "mist", level: 13 },
         { id: "aurorabeam", level: 25 },
         { id: "agility", level: 37 },
         { id: "icebeam", level: 49 },
      ],
      abilities: ["pressure"],
   },

   zapdos: {
      id: "zapdos",
      name: "Zapdos",
      types: ["Electric", "Flying"],
      baseStats: {
         hp: 90,
         attack: 90,
         defense: 85,
         spAttack: 125,
         spDefense: 90,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/145.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "drillpeck", level: 25 },
         { id: "agility", level: 37 },
         { id: "thunder", level: 49 },
         { id: "lightscreen", level: 61 },
      ],
      abilities: ["pressure"],
   },

   moltres: {
      id: "moltres",
      name: "Moltres",
      types: ["Fire", "Flying"],
      baseStats: {
         hp: 90,
         attack: 100,
         defense: 90,
         spAttack: 125,
         spDefense: 85,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/146.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/146.gif",
      learnset: [
         { id: "wing", level: 1 },
         { id: "ember", level: 1 },
         { id: "leer", level: 1 },
         { id: "firespin", level: 25 },
         { id: "agility", level: 37 },
         { id: "flamethrower", level: 49 },
      ],
      abilities: ["pressure"],
   },

   // Dratini line (Pseudo-legendary)
   dratini: {
      id: "dratini",
      name: "Dratini",
      types: ["Dragon"],
      baseStats: {
         hp: 41,
         attack: 64,
         defense: 45,
         spAttack: 50,
         spDefense: 50,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/147.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/147.gif",
      learnset: [
         { id: "wrap", level: 1 },
         { id: "leer", level: 1 },
         { id: "thunderwave", level: 10 },
         { id: "twister", level: 20 },
         { id: "dragonrage", level: 30 },
         { id: "slam", level: 40 },
      ],
      abilities: ["shedSkin"],
   },

   dragonair: {
      id: "dragonair",
      name: "Dragonair",
      types: ["Dragon"],
      baseStats: {
         hp: 61,
         attack: 84,
         defense: 65,
         spAttack: 70,
         spDefense: 70,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/148.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/148.gif",
      learnset: [
         { id: "wrap", level: 1 },
         { id: "leer", level: 1 },
         { id: "thunderwave", level: 10 },
         { id: "twister", level: 20 },
         { id: "dragonrage", level: 30 },
         { id: "slam", level: 40 },
         { id: "agility", level: 50 },
      ],
      abilities: ["shedSkin"],
   },

   dragonite: {
      id: "dragonite",
      name: "Dragonite",
      types: ["Dragon", "Flying"],
      baseStats: {
         hp: 91,
         attack: 134,
         defense: 95,
         spAttack: 100,
         spDefense: 100,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/149.gif",
      learnset: [
         { id: "wrap", level: 1 },
         { id: "leer", level: 1 },
         { id: "thunderwave", level: 1 },
         { id: "twister", level: 1 },
         { id: "wing", level: 1 },
         { id: "dragonrage", level: 30 },
         { id: "slam", level: 40 },
         { id: "agility", level: 50 },
         { id: "hyperbeam", level: 60 },
      ],
      abilities: ["innerFocus"],
   },

   // Mewtwo and Mew (Legendary)
   mewtwo: {
      id: "mewtwo",
      name: "Mewtwo",
      types: ["Psychic"],
      baseStats: {
         hp: 106,
         attack: 110,
         defense: 90,
         spAttack: 154,
         spDefense: 90,
         speed: 130,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/150.gif",
      learnset: [
         { id: "confusion", level: 1 },
         { id: "disable", level: 1 },
         { id: "barrier", level: 22 },
         { id: "psychic", level: 33 },
         { id: "recover", level: 44 },
         { id: "mist", level: 55 },
         { id: "amnesia", level: 66 },
      ],
      abilities: ["pressure"],
   },

   mew: {
      id: "mew",
      name: "Mew",
      types: ["Psychic"],
      baseStats: {
         hp: 100,
         attack: 100,
         defense: 100,
         spAttack: 100,
         spDefense: 100,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/151.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "transform", level: 10 },
         { id: "megapunch", level: 20 },
         { id: "metronome", level: 30 },
         { id: "psychic", level: 40 },
         { id: "ancientpower", level: 50 },
      ],
      abilities: ["synchronize"],
   },

   // GENERATION 2 POKEMON (JOHTO REGION)

   // Chikorita line (Grass starter)
   chikorita: {
      id: "chikorita",
      name: "Chikorita",
      types: ["Grass"],
      baseStats: {
         hp: 45,
         attack: 49,
         defense: 65,
         spAttack: 49,
         spDefense: 65,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/152.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/152.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "razorleaf", level: 8 },
         { id: "reflect", level: 12 },
         { id: "poisonpowder", level: 15 },
         { id: "synthesis", level: 22 },
      ],
      abilities: ["overgrow"],
   },

   bayleef: {
      id: "bayleef",
      name: "Bayleef",
      types: ["Grass"],
      baseStats: {
         hp: 60,
         attack: 62,
         defense: 80,
         spAttack: 63,
         spDefense: 80,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/153.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/153.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "razorleaf", level: 1 },
         { id: "reflect", level: 12 },
         { id: "poisonpowder", level: 15 },
         { id: "synthesis", level: 23 },
         { id: "bodyslam", level: 31 },
      ],
      abilities: ["overgrow"],
   },

   meganium: {
      id: "meganium",
      name: "Meganium",
      types: ["Grass"],
      baseStats: {
         hp: 80,
         attack: 82,
         defense: 100,
         spAttack: 83,
         spDefense: 100,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/154.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/154.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "razorleaf", level: 1 },
         { id: "reflect", level: 1 },
         { id: "poisonpowder", level: 15 },
         { id: "synthesis", level: 23 },
         { id: "bodyslam", level: 32 },
         { id: "solarbeam", level: 46 },
      ],
      abilities: ["overgrow"],
   },

   // Cyndaquil line (Fire starter)
   cyndaquil: {
      id: "cyndaquil",
      name: "Cyndaquil",
      types: ["Fire"],
      baseStats: {
         hp: 39,
         attack: 52,
         defense: 43,
         spAttack: 60,
         spDefense: 50,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/155.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/155.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "leer", level: 1 },
         { id: "smokescreen", level: 6 },
         { id: "ember", level: 12 },
         { id: "quickattack", level: 19 },
         { id: "flamewheel", level: 27 },
      ],
      abilities: ["blaze"],
   },

   quilava: {
      id: "quilava",
      name: "Quilava",
      types: ["Fire"],
      baseStats: {
         hp: 58,
         attack: 64,
         defense: 58,
         spAttack: 80,
         spDefense: 65,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/156.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/156.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "leer", level: 1 },
         { id: "smokescreen", level: 1 },
         { id: "ember", level: 12 },
         { id: "quickattack", level: 20 },
         { id: "flamewheel", level: 31 },
         { id: "swift", level: 42 },
      ],
      abilities: ["blaze"],
   },

   typhlosion: {
      id: "typhlosion",
      name: "Typhlosion",
      types: ["Fire"],
      baseStats: {
         hp: 78,
         attack: 84,
         defense: 78,
         spAttack: 109,
         spDefense: 85,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/157.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/157.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "leer", level: 1 },
         { id: "smokescreen", level: 1 },
         { id: "ember", level: 1 },
         { id: "quickattack", level: 20 },
         { id: "flamewheel", level: 31 },
         { id: "swift", level: 45 },
         { id: "flamethrower", level: 60 },
      ],
      abilities: ["blaze"],
   },

   // Totodile line (Water starter)
   totodile: {
      id: "totodile",
      name: "Totodile",
      types: ["Water"],
      baseStats: {
         hp: 50,
         attack: 65,
         defense: 64,
         spAttack: 44,
         spDefense: 48,
         speed: 43,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/158.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/158.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "watergun", level: 7 },
         { id: "rage", level: 13 },
         { id: "bite", level: 20 },
         { id: "slash", level: 27 },
      ],
      abilities: ["torrent"],
   },

   croconaw: {
      id: "croconaw",
      name: "Croconaw",
      types: ["Water"],
      baseStats: {
         hp: 65,
         attack: 80,
         defense: 80,
         spAttack: 59,
         spDefense: 63,
         speed: 58,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/159.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/159.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "watergun", level: 1 },
         { id: "rage", level: 13 },
         { id: "bite", level: 21 },
         { id: "slash", level: 28 },
         { id: "screech", level: 38 },
      ],
      abilities: ["torrent"],
   },

   feraligatr: {
      id: "feraligatr",
      name: "Feraligatr",
      types: ["Water"],
      baseStats: {
         hp: 85,
         attack: 105,
         defense: 100,
         spAttack: 79,
         spDefense: 83,
         speed: 78,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/160.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/160.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "watergun", level: 1 },
         { id: "rage", level: 1 },
         { id: "bite", level: 21 },
         { id: "slash", level: 28 },
         { id: "screech", level: 38 },
         { id: "hydropump", level: 58 },
      ],
      abilities: ["torrent"],
   },

   // Sentret line (Normal)
   sentret: {
      id: "sentret",
      name: "Sentret",
      types: ["Normal"],
      baseStats: {
         hp: 35,
         attack: 46,
         defense: 34,
         spAttack: 35,
         spDefense: 45,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/161.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/161.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "defensecurl", level: 4 },
         { id: "quickattack", level: 7 },
         { id: "fury", level: 13 },
         { id: "slam", level: 19 },
         { id: "rest", level: 25 },
      ],
      abilities: ["runAway", "keenEye"],
   },

   furret: {
      id: "furret",
      name: "Furret",
      types: ["Normal"],
      baseStats: {
         hp: 85,
         attack: 76,
         defense: 64,
         spAttack: 45,
         spDefense: 55,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/162.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/162.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "defensecurl", level: 1 },
         { id: "quickattack", level: 1 },
         { id: "fury", level: 13 },
         { id: "slam", level: 20 },
         { id: "rest", level: 27 },
         { id: "amnesia", level: 34 },
      ],
      abilities: ["runAway", "keenEye"],
   },

   // Hoothoot line (Normal/Flying)
   hoothoot: {
      id: "hoothoot",
      name: "Hoothoot",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 60,
         attack: 30,
         defense: 30,
         spAttack: 36,
         spDefense: 56,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/163.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/163.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "foresight", level: 6 },
         { id: "peck", level: 11 },
         { id: "hypnosis", level: 16 },
         { id: "reflect", level: 22 },
      ],
      abilities: ["insomnia", "keenEye"],
   },

   noctowl: {
      id: "noctowl",
      name: "Noctowl",
      types: ["Normal", "Flying"],
      baseStats: {
         hp: 100,
         attack: 50,
         defense: 50,
         spAttack: 86,
         spDefense: 96,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/164.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/164.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "foresight", level: 1 },
         { id: "peck", level: 11 },
         { id: "hypnosis", level: 16 },
         { id: "reflect", level: 25 },
         { id: "takedown", level: 33 },
      ],
      abilities: ["insomnia", "keenEye"],
   },

   // Ledyba line (Bug/Flying)
   ledyba: {
      id: "ledyba",
      name: "Ledyba",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 40,
         attack: 20,
         defense: 30,
         spAttack: 40,
         spDefense: 80,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/165.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/165.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "supersonic", level: 8 },
         { id: "comet", level: 15 },
         { id: "lightscreen", level: 22 },
         { id: "reflect", level: 22 },
         { id: "safeguard", level: 29 },
      ],
      abilities: ["swarm", "earlyBird"],
   },

   ledian: {
      id: "ledian",
      name: "Ledian",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 55,
         attack: 35,
         defense: 50,
         spAttack: 55,
         spDefense: 110,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/166.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/166.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "comet", level: 15 },
         { id: "lightscreen", level: 24 },
         { id: "reflect", level: 24 },
         { id: "safeguard", level: 33 },
         { id: "batonpass", level: 42 },
      ],
      abilities: ["swarm", "earlyBird"],
   },

   // Spinarak line (Bug/Poison)
   spinarak: {
      id: "spinarak",
      name: "Spinarak",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 40,
         attack: 60,
         defense: 40,
         spAttack: 40,
         spDefense: 40,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/167.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/167.gif",
      learnset: [
         { id: "poisonsting", level: 1 },
         { id: "stringshot", level: 1 },
         { id: "constrict", level: 6 },
         { id: "absorb", level: 11 },
         { id: "infestation", level: 17 },
         { id: "scaryface", level: 23 },
      ],
      abilities: ["swarm", "insomnia"],
   },

   ariados: {
      id: "ariados",
      name: "Ariados",
      types: ["Bug", "Poison"],
      baseStats: {
         hp: 70,
         attack: 90,
         defense: 70,
         spAttack: 60,
         spDefense: 70,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/168.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/168.gif",
      learnset: [
         { id: "poisonsting", level: 1 },
         { id: "stringshot", level: 1 },
         { id: "constrict", level: 1 },
         { id: "absorb", level: 11 },
         { id: "infestation", level: 17 },
         { id: "scaryface", level: 25 },
         { id: "furyswipes", level: 34 },
      ],
      abilities: ["swarm", "insomnia"],
   },

   // Crobat (evolution of Zubat line)
   crobat: {
      id: "crobat",
      name: "Crobat",
      types: ["Poison", "Flying"],
      baseStats: {
         hp: 85,
         attack: 90,
         defense: 80,
         spAttack: 70,
         spDefense: 80,
         speed: 130,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/169.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/169.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "astonish", level: 1 },
         { id: "bite", level: 1 },
         { id: "wing", level: 23 },
         { id: "confuseray", level: 30 },
         { id: "aircutter", level: 42 },
      ],
      abilities: ["innerFocus"],
   },

   // Chinchou line (Water/Electric)
   chinchou: {
      id: "chinchou",
      name: "Chinchou",
      types: ["Water", "Electric"],
      baseStats: {
         hp: 75,
         attack: 38,
         defense: 38,
         spAttack: 56,
         spDefense: 56,
         speed: 67,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/170.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/170.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "supersonic", level: 5 },
         { id: "flail", level: 13 },
         { id: "watergun", level: 17 },
         { id: "spark", level: 25 },
      ],
      abilities: ["voltAbsorb", "illuminate"],
   },

   lanturn: {
      id: "lanturn",
      name: "Lanturn",
      types: ["Water", "Electric"],
      baseStats: {
         hp: 125,
         attack: 58,
         defense: 58,
         spAttack: 76,
         spDefense: 76,
         speed: 67,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/171.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/171.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "supersonic", level: 1 },
         { id: "flail", level: 13 },
         { id: "watergun", level: 17 },
         { id: "spark", level: 25 },
         { id: "confuseray", level: 33 },
      ],
      abilities: ["voltAbsorb", "illuminate"],
   },

   // Pichu (baby Pikachu)
   pichu: {
      id: "pichu",
      name: "Pichu",
      types: ["Electric"],
      baseStats: {
         hp: 20,
         attack: 40,
         defense: 15,
         spAttack: 35,
         spDefense: 35,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/172.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/172.gif",
      learnset: [
         { id: "thundershock", level: 1 },
         { id: "charm", level: 1 },
         { id: "tailwhip", level: 6 },
         { id: "thunder", level: 8 },
         { id: "nastyplot", level: 11 },
      ],
      abilities: ["static"],
   },

   // Cleffa (baby Clefairy)
   cleffa: {
      id: "cleffa",
      name: "Cleffa",
      types: ["Fairy"],
      baseStats: {
         hp: 50,
         attack: 25,
         defense: 28,
         spAttack: 45,
         spDefense: 55,
         speed: 15,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/173.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/173.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "charm", level: 1 },
         { id: "encore", level: 4 },
         { id: "sing", level: 8 },
         { id: "sweetkiss", level: 13 },
      ],
      abilities: ["cutecharm", "magicguard"],
   },

   // Igglybuff (baby Jigglypuff)
   igglybuff: {
      id: "igglybuff",
      name: "Igglybuff",
      types: ["Normal", "Fairy"],
      baseStats: {
         hp: 90,
         attack: 30,
         defense: 15,
         spAttack: 40,
         spDefense: 20,
         speed: 15,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/174.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/174.gif",
      learnset: [
         { id: "sing", level: 1 },
         { id: "charm", level: 1 },
         { id: "defensecurl", level: 4 },
         { id: "pound", level: 9 },
         { id: "sweetkiss", level: 14 },
      ],
      abilities: ["cutecharm", "competitive"],
   },

   // Togepi line (Fairy)
   togepi: {
      id: "togepi",
      name: "Togepi",
      types: ["Fairy"],
      baseStats: {
         hp: 35,
         attack: 20,
         defense: 65,
         spAttack: 40,
         spDefense: 65,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/175.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/175.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "charm", level: 1 },
         { id: "metronome", level: 7 },
         { id: "sweetkiss", level: 18 },
         { id: "yawn", level: 25 },
         { id: "encore", level: 31 },
      ],
      abilities: ["hustle", "sereneGrace"],
   },

   togetic: {
      id: "togetic",
      name: "Togetic",
      types: ["Fairy", "Flying"],
      baseStats: {
         hp: 55,
         attack: 40,
         defense: 85,
         spAttack: 80,
         spDefense: 105,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/176.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/176.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "charm", level: 1 },
         { id: "metronome", level: 1 },
         { id: "sweetkiss", level: 18 },
         { id: "yawn", level: 27 },
         { id: "encore", level: 35 },
         { id: "safeguard", level: 42 },
      ],
      abilities: ["hustle", "sereneGrace"],
   },

   // Natu line (Psychic/Flying)
   natu: {
      id: "natu",
      name: "Natu",
      types: ["Psychic", "Flying"],
      baseStats: {
         hp: 40,
         attack: 50,
         defense: 45,
         spAttack: 70,
         spDefense: 45,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/177.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/177.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "leer", level: 1 },
         { id: "nightshade", level: 10 },
         { id: "teleport", level: 20 },
         { id: "wish", level: 30 },
         { id: "psychic", level: 40 },
      ],
      abilities: ["synchronize", "earlyBird"],
   },

   xatu: {
      id: "xatu",
      name: "Xatu",
      types: ["Psychic", "Flying"],
      baseStats: {
         hp: 65,
         attack: 75,
         defense: 70,
         spAttack: 95,
         spDefense: 70,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/178.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/178.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "leer", level: 1 },
         { id: "nightshade", level: 1 },
         { id: "teleport", level: 20 },
         { id: "wish", level: 35 },
         { id: "psychic", level: 50 },
         { id: "confuseray", level: 60 },
      ],
      abilities: ["synchronize", "earlyBird"],
   },

   // Mareep line (Electric)
   mareep: {
      id: "mareep",
      name: "Mareep",
      types: ["Electric"],
      baseStats: {
         hp: 55,
         attack: 40,
         defense: 40,
         spAttack: 65,
         spDefense: 45,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/179.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/179.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "thundershock", level: 9 },
         { id: "thunderwave", level: 16 },
         { id: "cottonspore", level: 23 },
         { id: "lightscreen", level: 30 },
      ],
      abilities: ["static"],
   },

   flaaffy: {
      id: "flaaffy",
      name: "Flaaffy",
      types: ["Electric"],
      baseStats: {
         hp: 70,
         attack: 55,
         defense: 55,
         spAttack: 80,
         spDefense: 60,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/180.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/180.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "thunderwave", level: 18 },
         { id: "cottonspore", level: 27 },
         { id: "lightscreen", level: 36 },
         { id: "thunder", level: 42 },
      ],
      abilities: ["static"],
   },

   ampharos: {
      id: "ampharos",
      name: "Ampharos",
      types: ["Electric"],
      baseStats: {
         hp: 90,
         attack: 75,
         defense: 85,
         spAttack: 115,
         spDefense: 90,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/181.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/181.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "thundershock", level: 1 },
         { id: "thunderwave", level: 1 },
         { id: "cottonspore", level: 27 },
         { id: "lightscreen", level: 42 },
         { id: "thunder", level: 57 },
         { id: "thunderpunch", level: 1 },
      ],
      abilities: ["static"],
   },

   // Bellossom (evolution of Gloom)
   bellossom: {
      id: "bellossom",
      name: "Bellossom",
      types: ["Grass"],
      baseStats: {
         hp: 75,
         attack: 80,
         defense: 95,
         spAttack: 90,
         spDefense: 100,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/182.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/182.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "sweetscent", level: 1 },
         { id: "stunspore", level: 1 },
         { id: "sleeppowder", level: 1 },
         { id: "megadrain", level: 44 },
         { id: "petalblizzard", level: 55 },
      ],
      abilities: ["chlorophyll"],
   },

   // Marill line (Water/Fairy)
   marill: {
      id: "marill",
      name: "Marill",
      types: ["Water", "Fairy"],
      baseStats: {
         hp: 70,
         attack: 20,
         defense: 50,
         spAttack: 20,
         spDefense: 50,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/183.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/183.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "defensecurl", level: 3 },
         { id: "tailwhip", level: 6 },
         { id: "watergun", level: 10 },
         { id: "rollout", level: 15 },
         { id: "bubblebeam", level: 21 },
      ],
      abilities: ["thickFat", "hugePower"],
   },

   azumarill: {
      id: "azumarill",
      name: "Azumarill",
      types: ["Water", "Fairy"],
      baseStats: {
         hp: 100,
         attack: 50,
         defense: 80,
         spAttack: 60,
         spDefense: 80,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/184.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/184.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "defensecurl", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "watergun", level: 10 },
         { id: "rollout", level: 15 },
         { id: "bubblebeam", level: 25 },
         { id: "hydropump", level: 42 },
      ],
      abilities: ["thickFat", "hugePower"],
   },

   // Sudowoodo (Rock)
   sudowoodo: {
      id: "sudowoodo",
      name: "Sudowoodo",
      types: ["Rock"],
      baseStats: {
         hp: 70,
         attack: 100,
         defense: 115,
         spAttack: 30,
         spDefense: 65,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/185.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/185.gif",
      learnset: [
         { id: "rockthrow", level: 1 },
         { id: "mimic", level: 1 },
         { id: "flail", level: 9 },
         { id: "lowkick", level: 17 },
         { id: "rockslide", level: 25 },
         { id: "block", level: 33 },
      ],
      abilities: ["sturdy", "rockHead"],
   },

   // Politoed (evolution of Poliwhirl)
   politoed: {
      id: "politoed",
      name: "Politoed",
      types: ["Water"],
      baseStats: {
         hp: 90,
         attack: 75,
         defense: 75,
         spAttack: 90,
         spDefense: 100,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/186.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/186.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "hypnosis", level: 1 },
         { id: "doubleslap", level: 1 },
         { id: "perishsong", level: 1 },
         { id: "bubblebeam", level: 35 },
         { id: "hydropump", level: 51 },
      ],
      abilities: ["waterAbsorb", "damp"],
   },

   // Hoppip line (Grass/Flying)
   hoppip: {
      id: "hoppip",
      name: "Hoppip",
      types: ["Grass", "Flying"],
      baseStats: {
         hp: 35,
         attack: 35,
         defense: 40,
         spAttack: 35,
         spDefense: 55,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/187.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/187.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "synthesis", level: 5 },
         { id: "tailwhip", level: 5 },
         { id: "tackle", level: 9 },
         { id: "poisonpowder", level: 13 },
         { id: "stunspore", level: 14 },
      ],
      abilities: ["chlorophyll", "leafGuard"],
   },

   skiploom: {
      id: "skiploom",
      name: "Skiploom",
      types: ["Grass", "Flying"],
      baseStats: {
         hp: 55,
         attack: 45,
         defense: 50,
         spAttack: 45,
         spDefense: 65,
         speed: 80,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/188.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/188.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "synthesis", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "tackle", level: 9 },
         { id: "poisonpowder", level: 13 },
         { id: "stunspore", level: 14 },
         { id: "sleeppowder", level: 16 },
      ],
      abilities: ["chlorophyll", "leafGuard"],
   },

   jumpluff: {
      id: "jumpluff",
      name: "Jumpluff",
      types: ["Grass", "Flying"],
      baseStats: {
         hp: 75,
         attack: 55,
         defense: 70,
         spAttack: 55,
         spDefense: 95,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/189.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/189.gif",
      learnset: [
         { id: "splash", level: 1 },
         { id: "synthesis", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "tackle", level: 1 },
         { id: "poisonpowder", level: 13 },
         { id: "stunspore", level: 14 },
         { id: "sleeppowder", level: 16 },
         { id: "megadrain", level: 33 },
      ],
      abilities: ["chlorophyll", "leafGuard"],
   },

   // Aipom (Normal)
   aipom: {
      id: "aipom",
      name: "Aipom",
      types: ["Normal"],
      baseStats: {
         hp: 55,
         attack: 70,
         defense: 55,
         spAttack: 40,
         spDefense: 55,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/190.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/190.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "sandattack", level: 6 },
         { id: "astonish", level: 11 },
         { id: "furyswipes", level: 16 },
         { id: "swift", level: 21 },
      ],
      abilities: ["runAway", "pickup"],
   },

   // Sunkern line (Grass)
   sunkern: {
      id: "sunkern",
      name: "Sunkern",
      types: ["Grass"],
      baseStats: {
         hp: 30,
         attack: 30,
         defense: 30,
         spAttack: 30,
         spDefense: 30,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/191.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/191.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "growth", level: 4 },
         { id: "megadrain", level: 10 },
         { id: "ingrain", level: 19 },
         { id: "sunnyday", level: 31 },
         { id: "synthesis", level: 36 },
      ],
      abilities: ["chlorophyll", "solarPower"],
   },

   sunflora: {
      id: "sunflora",
      name: "Sunflora",
      types: ["Grass"],
      baseStats: {
         hp: 75,
         attack: 75,
         defense: 55,
         spAttack: 105,
         spDefense: 85,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/192.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/192.gif",
      learnset: [
         { id: "absorb", level: 1 },
         { id: "pound", level: 1 },
         { id: "growth", level: 1 },
         { id: "megadrain", level: 10 },
         { id: "ingrain", level: 19 },
         { id: "petalblizzard", level: 31 },
         { id: "sunnyday", level: 31 },
         { id: "solarbeam", level: 43 },
      ],
      abilities: ["chlorophyll", "solarPower"],
   },

   // Yanma (Bug/Flying)
   yanma: {
      id: "yanma",
      name: "Yanma",
      types: ["Bug", "Flying"],
      baseStats: {
         hp: 65,
         attack: 65,
         defense: 45,
         spAttack: 75,
         spDefense: 45,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/193.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/193.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "foresight", level: 1 },
         { id: "quickattack", level: 7 },
         { id: "doubleteam", level: 13 },
         { id: "sonicboom", level: 19 },
         { id: "detect", level: 25 },
      ],
      abilities: ["speedBoost", "compoundEyes"],
   },

   // Wooper line (Water/Ground)
   wooper: {
      id: "wooper",
      name: "Wooper",
      types: ["Water", "Ground"],
      baseStats: {
         hp: 55,
         attack: 45,
         defense: 45,
         spAttack: 25,
         spDefense: 25,
         speed: 15,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/194.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/194.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "slam", level: 11 },
         { id: "amnesia", level: 16 },
         { id: "earthquake", level: 21 },
         { id: "mist", level: 31 },
      ],
      abilities: ["damp", "waterAbsorb"],
   },

   quagsire: {
      id: "quagsire",
      name: "Quagsire",
      types: ["Water", "Ground"],
      baseStats: {
         hp: 95,
         attack: 85,
         defense: 85,
         spAttack: 65,
         spDefense: 65,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/195.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/195.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "slam", level: 11 },
         { id: "amnesia", level: 16 },
         { id: "earthquake", level: 23 },
         { id: "mist", level: 35 },
         { id: "hydropump", level: 47 },
      ],
      abilities: ["damp", "waterAbsorb"],
   },

   // Espeon (Eevee evolution)
   espeon: {
      id: "espeon",
      name: "Espeon",
      types: ["Psychic"],
      baseStats: {
         hp: 65,
         attack: 65,
         defense: 60,
         spAttack: 130,
         spDefense: 95,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/196.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/196.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "confusion", level: 1 },
         { id: "quickattack", level: 16 },
         { id: "swift", level: 23 },
         { id: "psybeam", level: 30 },
         { id: "psychic", level: 42 },
      ],
      abilities: ["synchronize"],
   },

   // Umbreon (Eevee evolution)
   umbreon: {
      id: "umbreon",
      name: "Umbreon",
      types: ["Dark"],
      baseStats: {
         hp: 95,
         attack: 65,
         defense: 110,
         spAttack: 60,
         spDefense: 130,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/197.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/197.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "pursuit", level: 1 },
         { id: "quickattack", level: 16 },
         { id: "confuseray", level: 23 },
         { id: "faintattack", level: 30 },
         { id: "screech", level: 42 },
      ],
      abilities: ["synchronize"],
   },

   // Murkrow (Dark/Flying)
   murkrow: {
      id: "murkrow",
      name: "Murkrow",
      types: ["Dark", "Flying"],
      baseStats: {
         hp: 60,
         attack: 85,
         defense: 42,
         spAttack: 85,
         spDefense: 42,
         speed: 91,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/198.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/198.gif",
      learnset: [
         { id: "peck", level: 1 },
         { id: "astonish", level: 1 },
         { id: "pursuit", level: 11 },
         { id: "haze", level: 16 },
         { id: "nightshade", level: 26 },
         { id: "faintattack", level: 31 },
      ],
      abilities: ["insomnia", "superLuck"],
   },

   // Slowking (evolution of Slowpoke)
   slowking: {
      id: "slowking",
      name: "Slowking",
      types: ["Water", "Psychic"],
      baseStats: {
         hp: 95,
         attack: 75,
         defense: 80,
         spAttack: 100,
         spDefense: 110,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/199.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/199.gif",
      learnset: [
         { id: "curse", level: 1 },
         { id: "yawn", level: 1 },
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "watergun", level: 6 },
         { id: "confusion", level: 15 },
         { id: "headbutt", level: 20 },
         { id: "psychic", level: 37 },
      ],
      abilities: ["oblivious", "ownTempo"],
   },

   // Misdreavus (Ghost)
   misdreavus: {
      id: "misdreavus",
      name: "Misdreavus",
      types: ["Ghost"],
      baseStats: {
         hp: 60,
         attack: 60,
         defense: 60,
         spAttack: 85,
         spDefense: 85,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/200.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/200.gif",
      learnset: [
         { id: "growl", level: 1 },
         { id: "psywave", level: 6 },
         { id: "spite", level: 11 },
         { id: "astonish", level: 17 },
         { id: "confuseray", level: 23 },
         { id: "meanlook", level: 30 },
      ],
      abilities: ["levitate"],
   },

   // Unown (Psychic)
   unown: {
      id: "unown",
      name: "Unown",
      types: ["Psychic"],
      baseStats: {
         hp: 48,
         attack: 72,
         defense: 48,
         spAttack: 72,
         spDefense: 48,
         speed: 48,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/201.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/201.gif",
      learnset: [{ id: "hiddenpower", level: 1 }],
      abilities: ["levitate"],
   },

   // Wobbuffet (Psychic)
   wobbuffet: {
      id: "wobbuffet",
      name: "Wobbuffet",
      types: ["Psychic"],
      baseStats: {
         hp: 190,
         attack: 33,
         defense: 58,
         spAttack: 33,
         spDefense: 58,
         speed: 33,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/202.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/202.gif",
      learnset: [
         { id: "counter", level: 1 },
         { id: "mirrorcoat", level: 1 },
         { id: "safeguard", level: 1 },
         { id: "destinybond", level: 1 },
      ],
      abilities: ["shadowTag"],
   },

   // Girafarig (Normal/Psychic)
   girafarig: {
      id: "girafarig",
      name: "Girafarig",
      types: ["Normal", "Psychic"],
      baseStats: {
         hp: 70,
         attack: 80,
         defense: 65,
         spAttack: 90,
         spDefense: 65,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/203.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/203.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "astonish", level: 7 },
         { id: "confusion", level: 13 },
         { id: "stomp", level: 19 },
         { id: "psybeam", level: 31 },
      ],
      abilities: ["innerFocus", "earlyBird"],
   },

   // Pineco line (Bug)
   pineco: {
      id: "pineco",
      name: "Pineco",
      types: ["Bug"],
      baseStats: {
         hp: 50,
         attack: 65,
         defense: 90,
         spAttack: 35,
         spDefense: 35,
         speed: 15,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/204.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/204.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "protect", level: 8 },
         { id: "selfdestruct", level: 15 },
         { id: "takedown", level: 22 },
         { id: "spikes", level: 29 },
         { id: "explosion", level: 36 },
      ],
      abilities: ["sturdy"],
   },

   forretress: {
      id: "forretress",
      name: "Forretress",
      types: ["Bug", "Steel"],
      baseStats: {
         hp: 75,
         attack: 90,
         defense: 140,
         spAttack: 60,
         spDefense: 60,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/205.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/205.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "protect", level: 1 },
         { id: "selfdestruct", level: 15 },
         { id: "takedown", level: 22 },
         { id: "spikes", level: 29 },
         { id: "explosion", level: 39 },
         { id: "zapcannon", level: 46 },
      ],
      abilities: ["sturdy"],
   },

   // Dunsparce (Normal)
   dunsparce: {
      id: "dunsparce",
      name: "Dunsparce",
      types: ["Normal"],
      baseStats: {
         hp: 100,
         attack: 70,
         defense: 70,
         spAttack: 65,
         spDefense: 65,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/206.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/206.gif",
      learnset: [
         { id: "rage", level: 1 },
         { id: "defensecurl", level: 5 },
         { id: "rollout", level: 13 },
         { id: "spite", level: 18 },
         { id: "pursuit", level: 26 },
         { id: "screech", level: 30 },
      ],
      abilities: ["sereneGrace", "runAway"],
   },

   // Gligar (Ground/Flying)
   gligar: {
      id: "gligar",
      name: "Gligar",
      types: ["Ground", "Flying"],
      baseStats: {
         hp: 65,
         attack: 75,
         defense: 105,
         spAttack: 35,
         spDefense: 65,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/207.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/207.gif",
      learnset: [
         { id: "poisonsting", level: 1 },
         { id: "sandattack", level: 6 },
         { id: "harden", level: 13 },
         { id: "quickattack", level: 20 },
         { id: "furyattack", level: 28 },
         { id: "slash", level: 36 },
      ],
      abilities: ["hyperCutter", "sandVeil"],
   },

   // Steelix (evolution of Onix)
   steelix: {
      id: "steelix",
      name: "Steelix",
      types: ["Steel", "Ground"],
      baseStats: {
         hp: 75,
         attack: 85,
         defense: 200,
         spAttack: 55,
         spDefense: 65,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/208.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/208.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "screech", level: 1 },
         { id: "bind", level: 1 },
         { id: "rockthrow", level: 9 },
         { id: "rage", level: 13 },
         { id: "slam", level: 21 },
         { id: "sandstorm", level: 33 },
         { id: "ironhead", level: 41 },
      ],
      abilities: ["rockHead", "sturdy"],
   },

   // Snubbull line (Fairy)
   snubbull: {
      id: "snubbull",
      name: "Snubbull",
      types: ["Fairy"],
      baseStats: {
         hp: 60,
         attack: 80,
         defense: 50,
         spAttack: 40,
         spDefense: 40,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/209.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/209.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "scaryface", level: 1 },
         { id: "tailwhip", level: 4 },
         { id: "charm", level: 8 },
         { id: "bite", level: 13 },
         { id: "lick", level: 19 },
      ],
      abilities: ["intimidate", "runAway"],
   },

   granbull: {
      id: "granbull",
      name: "Granbull",
      types: ["Fairy"],
      baseStats: {
         hp: 90,
         attack: 120,
         defense: 75,
         spAttack: 60,
         spDefense: 60,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/210.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/210.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "scaryface", level: 1 },
         { id: "tailwhip", level: 1 },
         { id: "charm", level: 8 },
         { id: "bite", level: 13 },
         { id: "lick", level: 19 },
         { id: "crunch", level: 27 },
      ],
      abilities: ["intimidate", "quickFeet"],
   },

   // Qwilfish (Water/Poison)
   qwilfish: {
      id: "qwilfish",
      name: "Qwilfish",
      types: ["Water", "Poison"],
      baseStats: {
         hp: 65,
         attack: 95,
         defense: 85,
         spAttack: 55,
         spDefense: 55,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/211.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/211.gif",
      learnset: [
         { id: "spikes", level: 1 },
         { id: "tackle", level: 1 },
         { id: "poisonsting", level: 10 },
         { id: "harden", level: 10 },
         { id: "minimize", level: 19 },
         { id: "watergun", level: 28 },
         { id: "pinmissile", level: 37 },
      ],
      abilities: ["poisonPoint", "swiftSwim"],
   },

   // Scizor (evolution of Scyther)
   scizor: {
      id: "scizor",
      name: "Scizor",
      types: ["Bug", "Steel"],
      baseStats: {
         hp: 70,
         attack: 130,
         defense: 100,
         spAttack: 55,
         spDefense: 80,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/212.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/212.gif",
      learnset: [
         { id: "quickattack", level: 1 },
         { id: "leer", level: 1 },
         { id: "focusenergy", level: 1 },
         { id: "pursuit", level: 1 },
         { id: "falseswipe", level: 9 },
         { id: "agility", level: 14 },
         { id: "metalclaw", level: 23 },
         { id: "slash", level: 27 },
      ],
      abilities: ["swarm", "technician"],
   },

   // Shuckle (Bug/Rock)
   shuckle: {
      id: "shuckle",
      name: "Shuckle",
      types: ["Bug", "Rock"],
      baseStats: {
         hp: 20,
         attack: 10,
         defense: 230,
         spAttack: 10,
         spDefense: 230,
         speed: 5,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/213.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/213.gif",
      learnset: [
         { id: "constrict", level: 1 },
         { id: "withdraw", level: 1 },
         { id: "wrap", level: 9 },
         { id: "encore", level: 14 },
         { id: "safeguard", level: 23 },
         { id: "bide", level: 28 },
         { id: "rest", level: 37 },
      ],
      abilities: ["sturdy", "gluttony"],
   },

   // Heracross (Bug/Fighting)
   heracross: {
      id: "heracross",
      name: "Heracross",
      types: ["Bug", "Fighting"],
      baseStats: {
         hp: 80,
         attack: 125,
         defense: 75,
         spAttack: 40,
         spDefense: 95,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/214.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/214.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "leer", level: 1 },
         { id: "hornattack", level: 6 },
         { id: "endure", level: 12 },
         { id: "furyattack", level: 19 },
         { id: "brickbreak", level: 27 },
         { id: "takedown", level: 35 },
      ],
      abilities: ["swarm", "guts"],
   },

   // Sneasel (Dark/Ice)
   sneasel: {
      id: "sneasel",
      name: "Sneasel",
      types: ["Dark", "Ice"],
      baseStats: {
         hp: 55,
         attack: 95,
         defense: 55,
         spAttack: 35,
         spDefense: 75,
         speed: 115,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/215.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/215.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "taunt", level: 8 },
         { id: "quickattack", level: 15 },
         { id: "screech", level: 22 },
         { id: "faintattack", level: 29 },
         { id: "slash", level: 36 },
      ],
      abilities: ["innerFocus", "keenEye"],
   },

   // Teddiursa line (Normal)
   teddiursa: {
      id: "teddiursa",
      name: "Teddiursa",
      types: ["Normal"],
      baseStats: {
         hp: 60,
         attack: 80,
         defense: 50,
         spAttack: 50,
         spDefense: 50,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/216.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/216.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "lick", level: 8 },
         { id: "furyswipes", level: 15 },
         { id: "faintattack", level: 22 },
         { id: "slash", level: 29 },
         { id: "charm", level: 36 },
      ],
      abilities: ["pickup", "quickFeet"],
   },

   ursaring: {
      id: "ursaring",
      name: "Ursaring",
      types: ["Normal"],
      baseStats: {
         hp: 90,
         attack: 130,
         defense: 75,
         spAttack: 75,
         spDefense: 75,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/217.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/217.gif",
      learnset: [
         { id: "scratch", level: 1 },
         { id: "leer", level: 1 },
         { id: "lick", level: 1 },
         { id: "furyswipes", level: 15 },
         { id: "faintattack", level: 22 },
         { id: "slash", level: 30 },
         { id: "scaryface", level: 38 },
         { id: "thrash", level: 47 },
      ],
      abilities: ["guts", "quickFeet"],
   },

   // Slugma line (Fire)
   slugma: {
      id: "slugma",
      name: "Slugma",
      types: ["Fire"],
      baseStats: {
         hp: 40,
         attack: 40,
         defense: 40,
         spAttack: 70,
         spDefense: 40,
         speed: 20,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/218.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/218.gif",
      learnset: [
         { id: "smog", level: 1 },
         { id: "ember", level: 8 },
         { id: "rockthrow", level: 15 },
         { id: "harden", level: 22 },
         { id: "amnesia", level: 29 },
         { id: "flamethrower", level: 36 },
         { id: "rockslide", level: 43 },
      ],
      abilities: ["magmaArmor", "flameBody"],
   },

   magcargo: {
      id: "magcargo",
      name: "Magcargo",
      types: ["Fire", "Rock"],
      baseStats: {
         hp: 60,
         attack: 50,
         defense: 120,
         spAttack: 90,
         spDefense: 80,
         speed: 30,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/219.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/219.gif",
      learnset: [
         { id: "smog", level: 1 },
         { id: "ember", level: 1 },
         { id: "rockthrow", level: 15 },
         { id: "harden", level: 22 },
         { id: "amnesia", level: 29 },
         { id: "flamethrower", level: 36 },
         { id: "rockslide", level: 46 },
         { id: "bodyslam", level: 54 },
      ],
      abilities: ["magmaArmor", "flameBody"],
   },

   // Swinub line (Ice/Ground)
   swinub: {
      id: "swinub",
      name: "Swinub",
      types: ["Ice", "Ground"],
      baseStats: {
         hp: 50,
         attack: 50,
         defense: 40,
         spAttack: 30,
         spDefense: 30,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/220.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/220.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "odorsleuth", level: 1 },
         { id: "powder", level: 10 },
         { id: "endure", level: 19 },
         { id: "takedown", level: 28 },
         { id: "mist", level: 37 },
         { id: "blizzard", level: 46 },
      ],
      abilities: ["oblivious", "snowCloak"],
   },

   piloswine: {
      id: "piloswine",
      name: "Piloswine",
      types: ["Ice", "Ground"],
      baseStats: {
         hp: 100,
         attack: 100,
         defense: 80,
         spAttack: 60,
         spDefense: 60,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/221.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/221.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "odorsleuth", level: 1 },
         { id: "powder", level: 1 },
         { id: "endure", level: 19 },
         { id: "takedown", level: 28 },
         { id: "fury", level: 33 },
         { id: "mist", level: 42 },
         { id: "blizzard", level: 56 },
      ],
      abilities: ["oblivious", "snowCloak"],
   },

   // Corsola (Water/Rock)
   corsola: {
      id: "corsola",
      name: "Corsola",
      types: ["Water", "Rock"],
      baseStats: {
         hp: 65,
         attack: 55,
         defense: 95,
         spAttack: 65,
         spDefense: 95,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/222.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/222.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "harden", level: 7 },
         { id: "bubble", level: 13 },
         { id: "recover", level: 19 },
         { id: "bubblebeam", level: 25 },
         { id: "spike", level: 31 },
         { id: "rockblast", level: 37 },
      ],
      abilities: ["hustle", "naturalCure"],
   },

   // Remoraid line (Water)
   remoraid: {
      id: "remoraid",
      name: "Remoraid",
      types: ["Water"],
      baseStats: {
         hp: 35,
         attack: 65,
         defense: 35,
         spAttack: 65,
         spDefense: 35,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/223.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/223.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "lockon", level: 11 },
         { id: "bubblebeam", level: 22 },
         { id: "focusenergy", level: 22 },
         { id: "icebeam", level: 33 },
         { id: "hydropump", level: 44 },
      ],
      abilities: ["hustle", "sniper"],
   },

   octillery: {
      id: "octillery",
      name: "Octillery",
      types: ["Water"],
      baseStats: {
         hp: 75,
         attack: 105,
         defense: 75,
         spAttack: 105,
         spDefense: 75,
         speed: 45,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/224.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/224.gif",
      learnset: [
         { id: "watergun", level: 1 },
         { id: "constrict", level: 1 },
         { id: "psybeam", level: 1 },
         { id: "aurorabeam", level: 1 },
         { id: "bubblebeam", level: 25 },
         { id: "focusenergy", level: 25 },
         { id: "icebeam", level: 38 },
         { id: "hydropump", level: 54 },
      ],
      abilities: ["suctionCups", "sniper"],
   },

   // Delibird (Ice/Flying)
   delibird: {
      id: "delibird",
      name: "Delibird",
      types: ["Ice", "Flying"],
      baseStats: {
         hp: 45,
         attack: 55,
         defense: 45,
         spAttack: 65,
         spDefense: 45,
         speed: 75,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/225.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/225.gif",
      learnset: [{ id: "present", level: 1 }],
      abilities: ["vitalSpirit", "hustle"],
   },

   // Mantine (Water/Flying)
   mantine: {
      id: "mantine",
      name: "Mantine",
      types: ["Water", "Flying"],
      baseStats: {
         hp: 85,
         attack: 40,
         defense: 70,
         spAttack: 80,
         spDefense: 140,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/226.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/226.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "bubble", level: 1 },
         { id: "supersonic", level: 10 },
         { id: "bubblebeam", level: 18 },
         { id: "takedown", level: 25 },
         { id: "agility", level: 32 },
         { id: "wing", level: 40 },
      ],
      abilities: ["swiftSwim", "waterAbsorb"],
   },

   // Skarmory (Steel/Flying)
   skarmory: {
      id: "skarmory",
      name: "Skarmory",
      types: ["Steel", "Flying"],
      baseStats: {
         hp: 65,
         attack: 80,
         defense: 140,
         spAttack: 40,
         spDefense: 70,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/227.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/227.gif",
      learnset: [
         { id: "leer", level: 1 },
         { id: "peck", level: 1 },
         { id: "sandattack", level: 10 },
         { id: "swift", level: 18 },
         { id: "agility", level: 25 },
         { id: "furyattack", level: 32 },
         { id: "steelwing", level: 40 },
      ],
      abilities: ["keenEye", "sturdy"],
   },

   // Houndour line (Dark/Fire)
   houndour: {
      id: "houndour",
      name: "Houndour",
      types: ["Dark", "Fire"],
      baseStats: {
         hp: 45,
         attack: 60,
         defense: 30,
         spAttack: 80,
         spDefense: 50,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/228.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/228.gif",
      learnset: [
         { id: "leer", level: 1 },
         { id: "ember", level: 1 },
         { id: "howl", level: 7 },
         { id: "smog", level: 13 },
         { id: "roar", level: 19 },
         { id: "bite", level: 25 },
         { id: "faintattack", level: 31 },
      ],
      abilities: ["earlyBird", "flashFire"],
   },

   houndoom: {
      id: "houndoom",
      name: "Houndoom",
      types: ["Dark", "Fire"],
      baseStats: {
         hp: 75,
         attack: 90,
         defense: 50,
         spAttack: 110,
         spDefense: 80,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/229.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/229.gif",
      learnset: [
         { id: "leer", level: 1 },
         { id: "ember", level: 1 },
         { id: "howl", level: 1 },
         { id: "smog", level: 13 },
         { id: "roar", level: 19 },
         { id: "bite", level: 27 },
         { id: "faintattack", level: 35 },
         { id: "crunch", level: 43 },
      ],
      abilities: ["earlyBird", "flashFire"],
   },

   // Kingdra (evolution of Seadra)
   kingdra: {
      id: "kingdra",
      name: "Kingdra",
      types: ["Water", "Dragon"],
      baseStats: {
         hp: 75,
         attack: 95,
         defense: 95,
         spAttack: 95,
         spDefense: 95,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/230.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/230.gif",
      learnset: [
         { id: "bubble", level: 1 },
         { id: "smokescreen", level: 1 },
         { id: "leer", level: 1 },
         { id: "watergun", level: 1 },
         { id: "bubblebeam", level: 22 },
         { id: "focusenergy", level: 29 },
         { id: "hydropump", level: 40 },
         { id: "dragonpulse", level: 51 },
      ],
      abilities: ["swiftSwim", "sniper"],
   },

   // Phanpy line (Ground)
   phanpy: {
      id: "phanpy",
      name: "Phanpy",
      types: ["Ground"],
      baseStats: {
         hp: 90,
         attack: 60,
         defense: 60,
         spAttack: 40,
         spDefense: 40,
         speed: 40,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/231.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/231.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "defensecurl", level: 9 },
         { id: "flail", level: 17 },
         { id: "takedown", level: 25 },
         { id: "rollout", level: 33 },
         { id: "endure", level: 41 },
      ],
      abilities: ["pickup"],
   },

   donphan: {
      id: "donphan",
      name: "Donphan",
      types: ["Ground"],
      baseStats: {
         hp: 90,
         attack: 120,
         defense: 120,
         spAttack: 60,
         spDefense: 60,
         speed: 50,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/232.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/232.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 1 },
         { id: "hornattack", level: 1 },
         { id: "defensecurl", level: 9 },
         { id: "flail", level: 17 },
         { id: "furyattack", level: 25 },
         { id: "rollout", level: 33 },
         { id: "earthquake", level: 49 },
      ],
      abilities: ["sturdy"],
   },

   // Porygon2 (evolution of Porygon)
   porygon2: {
      id: "porygon2",
      name: "Porygon2",
      types: ["Normal"],
      baseStats: {
         hp: 85,
         attack: 80,
         defense: 90,
         spAttack: 105,
         spDefense: 95,
         speed: 60,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/233.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/233.gif",
      learnset: [
         { id: "conversion", level: 1 },
         { id: "tackle", level: 1 },
         { id: "conversion2", level: 1 },
         { id: "agility", level: 1 },
         { id: "psybeam", level: 12 },
         { id: "recover", level: 20 },
         { id: "defensecurl", level: 24 },
         { id: "discharge", level: 32 },
      ],
      abilities: ["trace", "download"],
   },

   // Stantler (Normal)
   stantler: {
      id: "stantler",
      name: "Stantler",
      types: ["Normal"],
      baseStats: {
         hp: 73,
         attack: 95,
         defense: 62,
         spAttack: 85,
         spDefense: 65,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/234.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/234.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "leer", level: 8 },
         { id: "astonish", level: 15 },
         { id: "hypnosis", level: 23 },
         { id: "stomp", level: 31 },
         { id: "confuseray", level: 40 },
         { id: "takedown", level: 49 },
      ],
      abilities: ["intimidate", "frisk"],
   },

   // Smeargle (Normal)
   smeargle: {
      id: "smeargle",
      name: "Smeargle",
      types: ["Normal"],
      baseStats: {
         hp: 55,
         attack: 20,
         defense: 35,
         spAttack: 20,
         spDefense: 45,
         speed: 75,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/235.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/235.gif",
      learnset: [
         { id: "sketch", level: 1 },
         { id: "sketch", level: 11 },
         { id: "sketch", level: 21 },
         { id: "sketch", level: 31 },
      ],
      abilities: ["ownTempo", "technician"],
   },

   // Tyrogue line (Fighting)
   tyrogue: {
      id: "tyrogue",
      name: "Tyrogue",
      types: ["Fighting"],
      baseStats: {
         hp: 35,
         attack: 35,
         defense: 35,
         spAttack: 35,
         spDefense: 35,
         speed: 35,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/236.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/236.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "helpinghand", level: 1 },
      ],
      abilities: ["guts", "steadfast"],
   },

   hitmontop: {
      id: "hitmontop",
      name: "Hitmontop",
      types: ["Fighting"],
      baseStats: {
         hp: 50,
         attack: 95,
         defense: 95,
         spAttack: 35,
         spDefense: 110,
         speed: 70,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/237.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/237.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "focusenergy", level: 1 },
         { id: "pursuit", level: 7 },
         { id: "quickattack", level: 13 },
         { id: "rapidspin", level: 19 },
         { id: "tripleattack", level: 25 },
         { id: "agility", level: 31 },
      ],
      abilities: ["intimidate", "technician"],
   },

   // Baby Pokemon
   smoochum: {
      id: "smoochum",
      name: "Smoochum",
      types: ["Ice", "Psychic"],
      baseStats: {
         hp: 45,
         attack: 30,
         defense: 15,
         spAttack: 85,
         spDefense: 65,
         speed: 65,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/238.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/238.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "lick", level: 1 },
         { id: "sweetkiss", level: 9 },
         { id: "powder", level: 13 },
         { id: "confusion", level: 21 },
         { id: "sing", level: 25 },
         { id: "meanlook", level: 33 },
      ],
      abilities: ["oblivious", "forewarn"],
   },

   elekid: {
      id: "elekid",
      name: "Elekid",
      types: ["Electric"],
      baseStats: {
         hp: 45,
         attack: 63,
         defense: 37,
         spAttack: 65,
         spDefense: 55,
         speed: 95,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/239.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/239.gif",
      learnset: [
         { id: "quickattack", level: 1 },
         { id: "leer", level: 1 },
         { id: "thunderpunch", level: 9 },
         { id: "lightscreen", level: 17 },
         { id: "swift", level: 25 },
         { id: "screech", level: 33 },
         { id: "thunderbolt", level: 41 },
      ],
      abilities: ["static"],
   },

   magby: {
      id: "magby",
      name: "Magby",
      types: ["Fire"],
      baseStats: {
         hp: 45,
         attack: 75,
         defense: 37,
         spAttack: 70,
         spDefense: 55,
         speed: 83,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/240.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/240.gif",
      learnset: [
         { id: "ember", level: 1 },
         { id: "leer", level: 7 },
         { id: "smog", level: 13 },
         { id: "firepunch", level: 19 },
         { id: "smokescreen", level: 25 },
         { id: "sunnyday", level: 31 },
         { id: "flamethrower", level: 37 },
      ],
      abilities: ["flameBody"],
   },

   // Miltank (Normal)
   miltank: {
      id: "miltank",
      name: "Miltank",
      types: ["Normal"],
      baseStats: {
         hp: 95,
         attack: 80,
         defense: 105,
         spAttack: 40,
         spDefense: 70,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/241.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/241.gif",
      learnset: [
         { id: "tackle", level: 1 },
         { id: "growl", level: 4 },
         { id: "defensecurl", level: 8 },
         { id: "stomp", level: 13 },
         { id: "milkdrink", level: 19 },
         { id: "bide", level: 26 },
         { id: "rollout", level: 34 },
      ],
      abilities: ["thickFat", "scrappy"],
   },

   // Blissey (evolution of Chansey)
   blissey: {
      id: "blissey",
      name: "Blissey",
      types: ["Normal"],
      baseStats: {
         hp: 255,
         attack: 10,
         defense: 10,
         spAttack: 75,
         spDefense: 135,
         speed: 55,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/242.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/242.gif",
      learnset: [
         { id: "pound", level: 1 },
         { id: "growl", level: 1 },
         { id: "tailwhip", level: 5 },
         { id: "refresh", level: 9 },
         { id: "softboiled", level: 12 },
         { id: "doubleslap", level: 16 },
         { id: "minimize", level: 20 },
         { id: "sing", level: 24 },
      ],
      abilities: ["naturalCure", "sereneGrace"],
   },

   // LEGENDARY POKEMON OF JOHTO

   // Legendary Beasts
   raikou: {
      id: "raikou",
      name: "Raikou",
      types: ["Electric"],
      baseStats: {
         hp: 90,
         attack: 85,
         defense: 75,
         spAttack: 115,
         spDefense: 100,
         speed: 115,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/243.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/243.gif",
      learnset: [
         { id: "bite", level: 1 },
         { id: "leer", level: 1 },
         { id: "thundershock", level: 11 },
         { id: "roar", level: 21 },
         { id: "quickattack", level: 31 },
         { id: "spark", level: 41 },
         { id: "reflect", level: 51 },
         { id: "crunch", level: 61 },
         { id: "thunder", level: 71 },
      ],
      abilities: ["pressure"],
   },

   entei: {
      id: "entei",
      name: "Entei",
      types: ["Fire"],
      baseStats: {
         hp: 115,
         attack: 115,
         defense: 85,
         spAttack: 90,
         spDefense: 75,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/244.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/244.gif",
      learnset: [
         { id: "bite", level: 1 },
         { id: "leer", level: 1 },
         { id: "ember", level: 11 },
         { id: "roar", level: 21 },
         { id: "firespin", level: 31 },
         { id: "stomp", level: 41 },
         { id: "flamethrower", level: 51 },
         { id: "swagger", level: 61 },
         { id: "fireblast", level: 71 },
      ],
      abilities: ["pressure"],
   },

   suicune: {
      id: "suicune",
      name: "Suicune",
      types: ["Water"],
      baseStats: {
         hp: 100,
         attack: 75,
         defense: 115,
         spAttack: 90,
         spDefense: 115,
         speed: 85,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/245.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/245.gif",
      learnset: [
         { id: "bite", level: 1 },
         { id: "leer", level: 1 },
         { id: "bubblebeam", level: 11 },
         { id: "rain", level: 21 },
         { id: "gust", level: 31 },
         { id: "aurorabeam", level: 41 },
         { id: "mist", level: 51 },
         { id: "mirrorcoat", level: 61 },
         { id: "hydropump", level: 71 },
      ],
      abilities: ["pressure"],
   },

   // Tower Duo
   lugia: {
      id: "lugia",
      name: "Lugia",
      types: ["Psychic", "Flying"],
      baseStats: {
         hp: 106,
         attack: 90,
         defense: 130,
         spAttack: 90,
         spDefense: 154,
         speed: 110,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/249.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/249.gif",
      learnset: [
         { id: "whirlwind", level: 1 },
         { id: "safeguard", level: 11 },
         { id: "gust", level: 22 },
         { id: "recover", level: 33 },
         { id: "hydropump", level: 44 },
         { id: "raindance", level: 55 },
         { id: "swift", level: 66 },
         { id: "whirlpool", level: 77 },
         { id: "ancientpower", level: 88 },
         { id: "aeroblast", level: 99 },
      ],
      abilities: ["pressure"],
   },

   hooh: {
      id: "hooh",
      name: "Ho-Oh",
      types: ["Fire", "Flying"],
      baseStats: {
         hp: 106,
         attack: 130,
         defense: 90,
         spAttack: 110,
         spDefense: 154,
         speed: 90,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/250.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/250.gif",
      learnset: [
         { id: "whirlwind", level: 1 },
         { id: "safeguard", level: 11 },
         { id: "gust", level: 22 },
         { id: "recover", level: 33 },
         { id: "fireblast", level: 44 },
         { id: "sunnyday", level: 55 },
         { id: "swift", level: 66 },
         { id: "ancientpower", level: 77 },
         { id: "sacredfire", level: 88 },
      ],
      abilities: ["pressure"],
   },

   // Mythical
   celebi: {
      id: "celebi",
      name: "Celebi",
      types: ["Psychic", "Grass"],
      baseStats: {
         hp: 100,
         attack: 100,
         defense: 100,
         spAttack: 100,
         spDefense: 100,
         speed: 100,
      },
      sprite:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/251.gif",
      spriteBack:
         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/251.gif",
      learnset: [
         { id: "leechseed", level: 1 },
         { id: "confusion", level: 1 },
         { id: "recover", level: 10 },
         { id: "healbell", level: 20 },
         { id: "safeguard", level: 30 },
         { id: "ancientpower", level: 40 },
         { id: "futuresight", level: 50 },
         { id: "batonpass", level: 60 },
         { id: "perishsong", level: 70 },
      ],
      abilities: ["naturalCure"],
   },
};
