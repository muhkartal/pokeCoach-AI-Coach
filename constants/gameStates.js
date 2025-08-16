export const GAME_VERSION = "2.0.0";

export const GAME_STATES = {
   LOADING: "loading",
   MAIN_MENU: "mainMenu",
   TEAM_BUILDER: "teamBuilder",
   BATTLE_SETUP: "battleSetup",
   BATTLE: "battle",
   BATTLE_END: "battleEnd",
   MULTIPLAYER_LOBBY: "multiplayerLobby",
   SETTINGS: "settings",
};

export const BATTLE_STATES = {
   INTRO: "intro",
   TURN_START: "turnStart",
   PLAYER_TURN: "playerTurn",
   ENEMY_TURN: "enemyTurn",
   EXECUTING_MOVE: "executingMove",
   TURN_END: "turnEnd",
   POKEMON_FAINTED: "pokemonFainted",
   SWITCHING: "switching",
   VICTORY: "victory",
   DEFEAT: "defeat",
};

export const STATUS_EFFECTS = {
   NONE: "none",
   BURN: "burn",
   POISON: "poison",
   TOXIC: "toxic",
   PARALYSIS: "paralysis",
   FREEZE: "freeze",
   SLEEP: "sleep",
};

export const WEATHER_TYPES = {
   CLEAR: "clear",
   RAIN: "rain",
   SUN: "sun",
   SANDSTORM: "sandstorm",
   HAIL: "hail",
};

export const BATTLE_FORMATS = {
   SINGLES_6V6: {
      id: "singles_6v6",
      name: "Singles 6v6",
      teamSize: 6,
      battleSize: 1,
      clauses: ["species", "sleep"],
   },
   SINGLES_3V3: {
      id: "singles_3v3",
      name: "Singles 3v3",
      teamSize: 3,
      battleSize: 1,
      clauses: ["species"],
   },
   DOUBLES_4V4: {
      id: "doubles_4v4",
      name: "Doubles 4v4",
      teamSize: 4,
      battleSize: 2,
      clauses: ["species"],
   },
};
