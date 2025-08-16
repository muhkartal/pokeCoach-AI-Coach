import { STATUS_EFFECTS } from '../constants/gameStates.js';

export class Pokemon {
   constructor(speciesData, level = 50) {
      this.id = Math.random().toString(36).substr(2, 9);
      this.species = speciesData.id;
      this.name = speciesData.name;
      this.types = [...speciesData.types];
      this.level = level;
      this.baseStats = { ...speciesData.baseStats };

      this.calculateStats();

      this.maxHp = this.stats.hp;
      this.hp = this.maxHp;

      this.status = null;
      this.volatileStatus = new Set();

      this.statStages = {
         attack: 0,
         defense: 0,
         spAttack: 0,
         spDefense: 0,
         speed: 0,
         accuracy: 0,
         evasion: 0,
      };

      this.moves = this.learnMoves(speciesData.learnset);
      this.ability = this.selectAbility(speciesData.abilities);
      this.heldItem = null;

      this.battleStats = {
         damageDealt: 0,
         damageTaken: 0,
         turnsActive: 0,
         knockouts: 0,
      };

      this.sprite = speciesData.sprite;
      this.spriteBack = speciesData.spriteBack;
      this.battle = null;
   }

   calculateStats() {
      this.stats = {};

      this.stats.hp = Math.floor(
         ((2 * this.baseStats.hp + 31 + 0) * this.level) / 100 + this.level + 10
      );

      ["attack", "defense", "spAttack", "spDefense", "speed"].forEach((stat) => {
         this.stats[stat] = Math.floor(
            ((2 * this.baseStats[stat] + 31 + 0) * this.level) / 100 + 5
         );
      });
   }

   learnMoves(learnset) {
      const availableMoves = learnset
         .filter((move) => move.level <= this.level)
         .sort((a, b) => b.level - a.level)
         .slice(0, 4);

      return availableMoves.map((moveData) => {
         const moveTemplate = window.MOVES_DATA[moveData.id];
         if (!moveTemplate) {
            console.error(`Move not found in MOVES_DATA: ${moveData.id}`);
            const move = { ...window.MOVES_DATA.tackle };
            move.pp = move.pp || 35;
            move.maxPp = move.pp;
            return move;
         }
         const move = { ...moveTemplate };
         move.pp = move.pp || 10;
         move.maxPp = move.pp;
         return move;
      });
   }

   selectAbility(abilities) {
      if (!abilities || abilities.length === 0) return null;
      const abilityId = abilities[Math.floor(Math.random() * abilities.length)];
      return {
         id: abilityId,
         data: window.ABILITIES_DATA[abilityId] || {},
      };
   }

   getBoostedStat(statName) {
      if (statName === "hp") return this.stats.hp;

      let value = this.stats[statName];
      const stage = this.statStages[statName] || 0;

      if (stage >= 0) {
         value *= (2 + stage) / 2;
      } else {
         value *= 2 / (2 - stage);
      }

      if (this.status === "burn" && statName === "attack") {
         value *= 0.5;
      }
      if (this.status === "paralysis" && statName === "speed") {
         value *= 0.5;
      }

      if (this.ability && this.ability.data && this.ability.data.onModifyStat) {
         value = this.ability.data.onModifyStat(statName, value, this, this.battle);
      }

      if (this.heldItem) {
         const item = window.ITEMS_DATA[this.heldItem.id];
         if (item.effect === "boost_stat" && item.stat === statName) {
            value *= item.value;
         }
      }

      return Math.floor(value);
   }

   boostStat(statName, stages) {
      const oldStage = this.statStages[statName];
      this.statStages[statName] = Math.max(-6, Math.min(6, oldStage + stages));
      return this.statStages[statName] - oldStage;
   }

   takeDamage(damage) {
      this.hp = Math.max(0, this.hp - damage);
      this.battleStats.damageTaken += damage;

      if (this.hp === 0) {
         this.faint();
      }

      return this.hp === 0;
   }

   heal(amount) {
      const actualHeal = Math.min(amount, this.maxHp - this.hp);
      this.hp += actualHeal;
      return actualHeal;
   }

   setStatus(status) {
      if (this.status || this.hp === 0) return false;

      if (status === "burn" && this.types.includes("Fire")) return false;
      if (
         (status === "poison" || status === "toxic") &&
         (this.types.includes("Poison") || this.types.includes("Steel"))
      )
         return false;
      if (status === "paralysis" && this.types.includes("Electric")) return false;
      if (status === "freeze" && this.types.includes("Ice")) return false;

      this.status = status;
      return true;
   }

   cureStatus() {
      this.status = null;
      this.toxicCounter = 0;
   }

   addVolatileStatus(status) {
      this.volatileStatus.add(status);
   }

   removeVolatileStatus(status) {
      this.volatileStatus.delete(status);
   }

   hasVolatileStatus(status) {
      return this.volatileStatus.has(status);
   }

   faint() {
      this.hp = 0;
      this.status = null;
      this.toxicCounter = 0;
      this.protectCount = 0;
      this.confusionTurns = 0;
      this.volatileStatus.clear();
      Object.keys(this.statStages).forEach((stat) => {
         this.statStages[stat] = 0;
      });
   }

   canUseMove(moveIndex) {
      if (this.hp === 0) return false;
      const move = this.moves[moveIndex];
      if (!move || move.pp <= 0) return false;

      if (this.heldItem && this.lockedMove && move.id !== this.lockedMove) {
         return false;
      }

      return true;
   }

   useMove(moveIndex) {
      const move = this.moves[moveIndex];
      if (move && move.pp > 0) {
         move.pp--;

         if (this.heldItem) {
            const item = window.ITEMS_DATA[this.heldItem.id];
            if (item.restriction === "lock_move") {
               this.lockedMove = move.id;
            }
         }

         return move;
      }
      return null;
   }

   resetBattleState() {
      this.statStages = {
         attack: 0,
         defense: 0,
         spAttack: 0,
         spDefense: 0,
         speed: 0,
         accuracy: 0,
         evasion: 0,
      };
      this.volatileStatus.clear();
      this.lockedMove = null;
      this.protectCount = 0;
      this.toxicCounter = 0;
      this.confusionTurns = 0;
      this.chargingMove = null;
   }
}
