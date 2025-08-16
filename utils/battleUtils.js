import { TYPE_EFFECTIVENESS } from '../constants/typeEffectiveness.js';
import { WEATHER_TYPES } from '../constants/gameStates.js';

export function calculateTypeEffectiveness(moveType, defenderTypes) {
   let multiplier = 1;

   defenderTypes.forEach((defType) => {
      if (
         TYPE_EFFECTIVENESS[moveType] &&
         TYPE_EFFECTIVENESS[moveType][defType] !== undefined
      ) {
         multiplier *= TYPE_EFFECTIVENESS[moveType][defType];
      }
   });

   return multiplier;
}

export function calculateDamage(attacker, defender, move, battle) {
   if (!move.power || move.category === "status") {
      return {
         damage: 0,
         effectiveness: 1,
         critical: false,
         messages: [],
      };
   }

   const attackStat =
      move.category === "physical"
         ? attacker.getBoostedStat("attack")
         : attacker.getBoostedStat("spAttack");
   const defenseStat =
      move.category === "physical"
         ? attacker.getBoostedStat("defense")
         : attacker.getBoostedStat("spDefense");

   let damage = Math.floor(
      (((2 * attacker.level) / 5 + 2) * move.power * attackStat) / defenseStat / 50 + 2
   );

   const effectiveness = calculateTypeEffectiveness(move.type, defender.types);
   damage *= effectiveness;

   if (attacker.types.includes(move.type)) {
      damage *= 1.5;
   }

   let critChance = 0.0625;
   if (move.critRatio) critChance *= move.critRatio;
   const critical = Math.random() < critChance;
   if (critical) damage *= 1.5;

   if (battle.weather === WEATHER_TYPES.SUN) {
      if (move.type === "Fire") damage *= 1.5;
      if (move.type === "Water") damage *= 0.5;
   } else if (battle.weather === WEATHER_TYPES.RAIN) {
      if (move.type === "Water") damage *= 1.5;
      if (move.type === "Fire") damage *= 0.5;
   }

   damage *= 0.85 + Math.random() * 0.15;

   if (attacker.ability) {
      damage = applyAbilityDamageModifier(damage, move, attacker, defender, "attacker");
   }
   if (defender.ability) {
      damage = applyAbilityDamageModifier(damage, move, defender, attacker, "defender");
   }

   if (attacker.heldItem) {
      damage = applyItemDamageModifier(damage, move, attacker, "attacker");
   }
   if (defender.heldItem) {
      damage = applyItemDamageModifier(damage, move, defender, "defender");
   }

   return {
      damage: Math.max(1, Math.floor(damage)),
      effectiveness,
      critical,
      messages: [],
   };
}

export function applyAbilityDamageModifier(damage, move, pokemon, opponent, role) {
   if (!pokemon.ability || !pokemon.ability.id) {
      return damage;
   }

   const ability = window.ABILITIES_DATA[pokemon.ability.id];
   if (!ability) {
      return damage;
   }

   if (role === "attacker") {
      if (ability.id === "adaptability" && pokemon.types.includes(move.type)) {
         damage *= 1.33;
      }
      if (ability.id === "sheerforce" && (move.secondary || move.secondaries)) {
         damage *= 1.3;
      }
   } else {
      if (ability.id === "levitate" && move.type === "Ground") {
         damage = 0;
      }
      if (ability.id === "multiscale" && pokemon.hp === pokemon.maxHp) {
         damage *= 0.5;
      }
   }

   return damage;
}

export function applyItemDamageModifier(damage, move, pokemon, role) {
   if (!pokemon.heldItem) return damage;

   const item = window.ITEMS_DATA[pokemon.heldItem.id];
   if (!item) return damage;

   if (role === "attacker") {
      if (item.effect === "boost_type" && item.type === move.type) {
         damage *= item.value;
      }
      if (item.effect === "boost_critical" && Math.random() < 0.125) {
         damage *= 1.5;
      }
   }

   return damage;
}

export function estimateDamage(move, attacker, defender, effectiveness) {
   if (!move || !move.power) return 0;

   const level = attacker.level || 50;
   const attack =
      move.category === "physical"
         ? attacker.getBoostedStat("attack")
         : attacker.getBoostedStat("spAttack");
   const defense =
      move.category === "physical"
         ? defender.getBoostedStat("defense")
         : defender.getBoostedStat("spDefense");

   let damage = (((2 * level) / 5 + 2) * move.power * attack) / defense / 50 + 2;

   damage *= effectiveness || 1;

   if (attacker.types && attacker.types.includes(move.type)) {
      damage *= 1.5;
   }

   return Math.floor(damage * 0.925);
}

export function calculateBestTypeMatchup(attackerTypes, defenderTypes) {
   let best = 1;
   attackerTypes.forEach((atkType) => {
      defenderTypes.forEach((defType) => {
         const effectiveness = TYPE_EFFECTIVENESS[atkType]?.[defType] ?? 1;
         best = Math.max(best, effectiveness);
      });
   });
   return best;
}

export function calculateWorstTypeMatchup(defenderTypes, attackerTypes) {
   let worst = 1;
   attackerTypes.forEach((atkType) => {
      defenderTypes.forEach((defType) => {
         const effectiveness = TYPE_EFFECTIVENESS[atkType]?.[defType] ?? 1;
         worst = Math.min(worst, effectiveness);
      });
   });
   return worst;
}

export function getTypeAdvantageDescription(yourTypes, oppTypes) {
   const offensive = calculateBestTypeMatchup(yourTypes, oppTypes);
   const defensive = calculateWorstTypeMatchup(yourTypes, oppTypes);

   if (offensive > 1 && defensive >= 1) return "You have advantage";
   if (offensive <= 1 && defensive < 1) return "Opponent has advantage";
   if (offensive > 1 && defensive < 1) return "Mixed matchup";
   return "Neutral matchup";
}
