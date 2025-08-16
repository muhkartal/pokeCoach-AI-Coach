import { LoadingScreen } from './ui/LoadingScreen.js';
import { MainMenu } from './game/MainMenu.js';
import { TeamBuilder } from './game/TeamBuilder.js';
import { MultiplayerLobby } from './game/MultiplayerLobby.js';
import { Settings } from './ui/Settings.js';

export const App = () => {
   const [gameState, setGameState] = React.useState(window.GAME_STATES.LOADING);
   const [isLoading, setIsLoading] = React.useState(true);
   const [loadingProgress, setLoadingProgress] = React.useState(0);
   const [selectedTeam, setSelectedTeam] = React.useState([]);
   const [showSettings, setShowSettings] = React.useState(false);
   const [settings, setSettings] = React.useState(() => window.StorageUtils.loadSettings());
   const [gameStats, setGameStats] = React.useState({ 
      battlesWon: 0, 
      battlesLost: 0, 
      totalDamageDealt: 0, 
      playtimeMinutes: 0 
   });

   React.useEffect(() => {
      let progress = 0;
      const timer = setInterval(() => {
         progress += Math.random() * 20;
         setLoadingProgress(Math.min(progress, 100));
         
         if (progress >= 100) {
            clearInterval(timer);
            setTimeout(() => {
               setIsLoading(false);
               setGameState(window.GAME_STATES.MAIN_MENU);
            }, 500);
         }
      }, 200);

      return () => clearInterval(timer);
   }, []);

   const handleSettingsChange = (newSettings) => {
      const updatedSettings = { ...settings, ...newSettings };
      setSettings(updatedSettings);
      window.StorageUtils.saveSettings(updatedSettings);
   };

   const handleNewGame = () => {
      setGameState(window.GAME_STATES.TEAM_BUILDER);
   };

   const handleTeamConfirm = (team) => {
      setSelectedTeam(team);
      setGameState(window.GAME_STATES.BATTLE);
   };

   const handleBackToMenu = () => {
      setGameState(window.GAME_STATES.MAIN_MENU);
   };

   const handleMultiplayer = () => {
      setGameState(window.GAME_STATES.MULTIPLAYER);
   };

   const handleShowSettings = () => {
      setShowSettings(true);
   };

   const handleCloseSettings = () => {
      setShowSettings(false);
   };

   if (isLoading) {
      return React.createElement(LoadingScreen, {
         progress: loadingProgress,
         message: loadingProgress < 30 ? "Loading Pokemon data..." : 
                 loadingProgress < 60 ? "Initializing battle engine..." :
                 loadingProgress < 90 ? "Preparing arena..." : "Almost ready!"
      });
   }

   if (showSettings) {
      return React.createElement(Settings, {
         settings,
         onSettingsChange: handleSettingsChange,
         onClose: handleCloseSettings
      });
   }

   switch (gameState) {
      case window.GAME_STATES.MAIN_MENU:
         return React.createElement(MainMenu, {
            onNewGame: handleNewGame,
            onLoadGame: () => console.log('Load game not implemented yet'),
            onSettings: handleShowSettings,
            onMultiplayer: handleMultiplayer,
            gameStats
         });

      case window.GAME_STATES.TEAM_BUILDER:
         return React.createElement(TeamBuilder, {
            onConfirm: handleTeamConfirm,
            onBack: handleBackToMenu,
            format: window.BATTLE_FORMATS.SINGLES
         });

      case window.GAME_STATES.MULTIPLAYER:
         return React.createElement(MultiplayerLobby, {
            onBack: handleBackToMenu
         });

      case window.GAME_STATES.BATTLE:
         return React.createElement('div', {
            className: 'min-h-screen flex items-center justify-center bg-blue-600'
         }, [
            React.createElement('div', {
               key: 'battle-placeholder',
               className: 'text-center text-white'
            }, [
               React.createElement('h1', {
                  key: 'title',
                  className: 'text-4xl mb-4'
               }, 'Battle System'),
               React.createElement('p', {
                  key: 'message', 
                  className: 'text-xl mb-4'
               }, 'Battle components are working! Team selected with ' + selectedTeam.length + ' Pokemon'),
               React.createElement('button', {
                  key: 'back',
                  className: 'px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700',
                  onClick: handleBackToMenu
               }, 'Back to Menu')
            ])
         ]);

      default:
         return React.createElement('div', {
            className: 'min-h-screen flex items-center justify-center bg-red-600'
         }, 
            React.createElement('h1', {
               className: 'text-white text-4xl'
            }, 'Unknown Game State: ' + gameState)
         );
   }
};
