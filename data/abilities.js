export const ABILITIES_DATA = {
   drought: {
      id: "drought",
      name: "Drought",
      description: "Turns the sunlight harsh when entering battle.",
      onSwitchIn: (battle, pokemon) => {
         battle.setWeather(window.WEATHER_TYPES.SUN, 5);
         return `${pokemon.name}'s Drought intensified the sun's rays!`;
      },
   },
   drizzle: {
      id: "drizzle",
      name: "Drizzle",
      description: "Makes it rain when entering battle.",
      onSwitchIn: (battle, pokemon) => {
         battle.setWeather(window.WEATHER_TYPES.RAIN, 5);
         return `${pokemon.name}'s Drizzle made it rain!`;
      },
   },
   sandstream: {
      id: "sandstream",
      name: "Sand Stream",
      description: "Summons a sandstorm when entering battle.",
      onSwitchIn: (battle, pokemon) => {
         battle.setWeather(window.WEATHER_TYPES.SANDSTORM, 5);
         return `${pokemon.name}'s Sand Stream whipped up a sandstorm!`;
      },
   },
   intimidate: {
      id: "intimidate",
      name: "Intimidate",
      description: "Lowers the foe's Attack stat.",
      onSwitchIn: (battle, pokemon) => {
         const targets = battle.getOpponents(pokemon);
         const messages = [];
         targets.forEach((target) => {
            if (
               target.ability?.id !== "clearbody" &&
               target.ability?.id !== "hypercutter"
            ) {
               target.boostStat("attack", -1);
               messages.push(`${target.name}'s Attack fell!`);
            }
         });
         return messages;
      },
   },
   speedboost: {
      id: "speedboost",
      name: "Speed Boost",
      description: "Raises Speed at the end of each turn.",
      onTurnEnd: (battle, pokemon) => {
         pokemon.boostStat("speed", 1);
         return `${pokemon.name}'s Speed Boost raised its Speed!`;
      },
   },
   levitate: {
      id: "levitate",
      name: "Levitate",
      description: "Gives immunity to Ground-type moves.",
      onBeforeReceiveDamage: (damage, move, attacker, defender) => {
         if (move.type === "Ground") {
            return {
               damage: 0,
               message: `${defender.name} avoids Ground moves with Levitate!`,
            };
         }
         return { damage };
      },
   },
   adaptability: {
      id: "adaptability",
      name: "Adaptability",
      description: "Powers up moves of the same type.",
      onCalculateDamage: (damage, move, pokemon) => {
         if (pokemon.types.includes(move.type)) {
            return damage * 1.33;
         }
         return damage;
      },
   },
   static: {
      id: "static",
      name: "Static",
      description: "Contact may paralyze the attacker.",
      onAfterBeingHit: (battle, pokemon, attacker, move) => {
         if (move.flags?.contact && Math.random() < 0.3) {
            attacker.setStatus("paralysis");
            return `${attacker.name} was paralyzed by ${pokemon.name}'s Static!`;
         }
      },
   },
   multiscale: {
      id: "multiscale",
      name: "Multiscale",
      description: "Reduces damage when HP is full.",
      onBeforeReceiveDamage: (damage, move, attacker, defender) => {
         if (defender.hp === defender.maxHp) {
            return {
               damage: Math.floor(damage * 0.5),
               message: `${defender.name}'s Multiscale reduced the damage!`,
            };
         }
         return { damage };
      },
   },
   regenerator: {
      id: "regenerator",
      name: "Regenerator",
      description: "Restores HP when switching out.",
      onSwitchOut: (battle, pokemon) => {
         const healAmount = Math.floor(pokemon.maxHp / 3);
         pokemon.heal(healAmount);
         return `${pokemon.name} restored HP with Regenerator!`;
      },
   },
   protean: {
      id: "protean",
      name: "Protean",
      description: "Changes type to match the move used.",
      onBeforeMove: (battle, pokemon, move) => {
         if (move.type && !pokemon.types.includes(move.type)) {
            pokemon.types = [move.type];
            return `${pokemon.name} became ${move.type} type!`;
         }
      },
   },
   prankster: {
      id: "prankster",
      name: "Prankster",
      description: "Gives priority to status moves.",
      onModifyPriority: (priority, move) => {
         if (move.category === "status") {
            return priority + 1;
         }
         return priority;
      },
   },
   sheerforce: {
      id: "sheerforce",
      name: "Sheer Force",
      description: "Removes secondary effects to increase move power.",
      onModifyMove: (move) => {
         if (move.secondary || move.secondaries) {
            move.power = Math.floor(move.power * 1.3);
            delete move.secondary;
            delete move.secondaries;
         }
         return move;
      },
   },
   chlorophyll: {
      id: "chlorophyll",
      name: "Chlorophyll",
      description: "Doubles Speed in harsh sunlight.",
      onModifyStat: (stat, value, pokemon, battle) => {
         if (stat === "speed" && battle.weather === window.WEATHER_TYPES.SUN) {
            return value * 2;
         }
         return value;
      },
   },
   swiftswim: {
      id: "swiftswim",
      name: "Swift Swim",
      description: "Doubles Speed in rain.",
      onModifyStat: (stat, value, pokemon, battle) => {
         if (stat === "speed" && battle.weather === window.WEATHER_TYPES.RAIN) {
            return value * 2;
         }
         return value;
      },
   },
   sandrush: {
      id: "sandrush",
      name: "Sand Rush",
      description: "Doubles Speed in a sandstorm.",
      onModifyStat: (stat, value, pokemon, battle) => {
         if (stat === "speed" && battle.weather === window.WEATHER_TYPES.SANDSTORM) {
            return value * 2;
         }
         return value;
      },
   },
   sturdy: {
      id: "sturdy",
      name: "Sturdy",
      description: "Cannot be knocked out with one hit when at full HP.",
      onBeforeReceiveDamage: (damage, move, attacker, defender) => {
         if (defender.hp === defender.maxHp && damage >= defender.hp) {
            return {
               damage: defender.hp - 1,
               message: `${defender.name} endured the hit with Sturdy!`,
            };
         }
         return { damage };
      },
   },
   overgrow: {
      id: "overgrow",
      name: "Overgrow",
      description: "Powers up Grass moves when HP is low.",
      onCalculateDamage: (damage, move, pokemon) => {
         if (move.type === "Grass" && pokemon.hp <= pokemon.maxHp / 3) {
            return damage * 1.5;
         }
         return damage;
      },
   },
   blaze: {
      id: "blaze",
      name: "Blaze",
      description: "Powers up Fire moves when HP is low.",
      onCalculateDamage: (damage, move, pokemon) => {
         if (move.type === "Fire" && pokemon.hp <= pokemon.maxHp / 3) {
            return damage * 1.5;
         }
         return damage;
      },
   },
   torrent: {
      id: "torrent",
      name: "Torrent",
      description: "Powers up Water moves when HP is low.",
      onCalculateDamage: (damage, move, pokemon) => {
         if (move.type === "Water" && pokemon.hp <= pokemon.maxHp / 3) {
            return damage * 1.5;
         }
         return damage;
      },
   },
   synchronize: {
      id: "synchronize",
      name: "Synchronize",
      description: "Passes status problems to the foe.",
      onAfterStatusInflicted: (battle, pokemon, status, source) => {
         if (source && ["burn", "poison", "paralysis"].includes(status)) {
            source.setStatus(status);
            return `${source.name} was affected by ${pokemon.name}'s Synchronize!`;
         }
      },
   },
   innerfocus: {
      id: "innerfocus",
      name: "Inner Focus",
      description: "Prevents flinching.",
      onBeforeVolatileStatus: (status, pokemon) => {
         if (status === "flinch") {
            return {
               prevented: true,
               message: `${pokemon.name}'s Inner Focus prevents flinching!`,
            };
         }
      },
   },
   clearbody: {
      id: "clearbody",
      name: "Clear Body",
      description: "Prevents stat reduction.",
      onBeforeStatChange: (stat, stages, pokemon, source) => {
         if (stages < 0 && source !== pokemon) {
            return {
               prevented: true,
               message: `${pokemon.name}'s Clear Body prevents stat loss!`,
            };
         }
      },
   },
   moxie: {
      id: "moxie",
      name: "Moxie",
      description: "Boosts Attack after knocking out a Pokemon.",
      onAfterKnockout: (battle, pokemon) => {
         pokemon.boostStat("attack", 1);
         return `${pokemon.name}'s Moxie raised its Attack!`;
      },
   },
   magicguard: {
      id: "magicguard",
      name: "Magic Guard",
      description: "Only takes damage from attacks.",
      onResidualDamage: (damage, source) => {
         if (source !== "attack") {
            return 0;
         }
         return damage;
      },
   },
   roughskin: {
      id: "roughskin",
      name: "Rough Skin",
      description: "Inflicts damage on contact.",
      onAfterBeingHit: (battle, pokemon, attacker, move) => {
         if (move.flags?.contact) {
            const damage = Math.floor(attacker.maxHp / 8);
            attacker.takeDamage(damage);
            return `${attacker.name} was hurt by ${pokemon.name}'s Rough Skin!`;
         }
      },
   },
   solarpower: {
      id: "solarpower",
      name: "Solar Power",
      description: "Boosts Sp. Atk in sun but loses HP.",
      onModifyStat: (stat, value, pokemon, battle) => {
         if (stat === "spAttack" && battle.weather === window.WEATHER_TYPES.SUN) {
            return value * 1.5;
         }
         return value;
      },
      onWeather: (battle, pokemon) => {
         if (battle.weather === window.WEATHER_TYPES.SUN) {
            const damage = Math.floor(pokemon.maxHp / 8);
            pokemon.takeDamage(damage);
            return `${pokemon.name} was hurt by the harsh sunlight!`;
         }
      },
   },
   raindish: {
      id: "raindish",
      name: "Rain Dish",
      description: "Restores HP in rain.",
      onWeather: (battle, pokemon) => {
         if (battle.weather === window.WEATHER_TYPES.RAIN) {
            const heal = Math.floor(pokemon.maxHp / 16);
            pokemon.heal(heal);
            return `${pokemon.name} restored HP with Rain Dish!`;
         }
      },
   },
   steadfast: {
      id: "steadfast",
      name: "Steadfast",
      description: "Raises Speed when flinched.",
      onFlinch: (battle, pokemon) => {
         pokemon.boostStat("speed", 1);
         return `${pokemon.name}'s Steadfast raised its Speed!`;
      },
   },
   lightmetal: {
      id: "lightmetal",
      name: "Light Metal",
      description: "Halves the Pokemon's weight.",
   },
};
