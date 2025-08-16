import { GAME_STATES, BATTLE_STATES, STATUS_EFFECTS, WEATHER_TYPES, BATTLE_FORMATS } from './constants/gameStates.js';
import { TYPE_EFFECTIVENESS, TYPE_COLORS } from './constants/typeEffectiveness.js';
import { POKEMON_DATA } from './data/pokemon.js';
import { MOVES_DATA } from './data/moves.js';
import { ABILITIES_DATA } from './data/abilities.js';
import { ITEMS_DATA } from './data/items.js';
import { Pokemon } from './classes/Pokemon.js';
import * as BattleUtils from './utils/battleUtils.js';
import * as GameUtils from './utils/gameUtils.js';
import * as StorageUtils from './utils/storageUtils.js';

const { useState, useEffect, useRef, useReducer, createContext, useContext, useMemo, useCallback, memo, Fragment, Suspense, lazy } = React;

window.GAME_STATES = GAME_STATES;
window.BATTLE_STATES = BATTLE_STATES;
window.STATUS_EFFECTS = STATUS_EFFECTS;
window.WEATHER_TYPES = WEATHER_TYPES;
window.BATTLE_FORMATS = BATTLE_FORMATS;
window.TYPE_EFFECTIVENESS = TYPE_EFFECTIVENESS;
window.TYPE_COLORS = TYPE_COLORS;
window.POKEMON_DATA = Object.assign({}, POKEMON_DATA);
window.MOVES_DATA = Object.assign({}, MOVES_DATA);
window.ABILITIES_DATA = Object.assign({}, ABILITIES_DATA);
window.ITEMS_DATA = Object.assign({}, ITEMS_DATA);

// Merge extended data if available
if (typeof window.EXTENDED_POKEMON_DATA !== "undefined") {
   Object.assign(window.POKEMON_DATA, window.EXTENDED_POKEMON_DATA);
   console.log("Extended Pokemon data loaded! Total Pokemon:", Object.keys(window.POKEMON_DATA).length);
}

if (typeof window.EXTENDED_MOVES_DATA !== "undefined") {
   Object.assign(window.MOVES_DATA, window.EXTENDED_MOVES_DATA);
   console.log("Extended Moves data loaded! Total Moves:", Object.keys(window.MOVES_DATA).length);
}
window.Pokemon = Pokemon;
window.BattleUtils = BattleUtils;
window.GameUtils = GameUtils;
window.StorageUtils = StorageUtils;
window.getDefaultSettings = StorageUtils.getDefaultSettings;

import('./components/App.js').then(({ App }) => {
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(React.createElement(App));
}).catch(error => {
   console.error('Failed to load main application:', error);
   document.getElementById('root').innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; font-family: 'Press Start 2P', cursive;">
         <h1 style="color: red; margin-bottom: 20px;">Loading Error</h1>
         <p>Failed to load Pokemon Battle Arena</p>
         <p style="font-size: 10px; margin-top: 20px;">Check console for details</p>
      </div>
   `;
});
