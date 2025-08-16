export const Settings = ({ settings, onSettingsChange, onClose }) => {
   const [activeTab, setActiveTab] = React.useState("general");

   const tabs = [
      { id: "general", label: "General" },
      { id: "battle", label: "Battle" },
      { id: "audio", label: "Audio" },
      { id: "display", label: "Display" }
   ];

   const renderGeneralSettings = () => React.createElement('div', {
      className: 'space-y-4'
   }, [
      React.createElement('div', { key: 'auto-advance' }, [
         React.createElement('label', {
            className: 'flex items-center gap-2 cursor-pointer'
         }, [
            React.createElement('input', {
               type: 'checkbox',
               checked: settings.autoAdvanceText,
               onChange: (e) => onSettingsChange({ autoAdvanceText: e.target.checked }),
               className: 'w-4 h-4'
            }),
            React.createElement('span', null, 'Auto-Advance Text')
         ])
      ]),

      React.createElement('div', { key: 'text-speed' }, [
         React.createElement('label', {
            className: 'block mb-2 font-medium'
         }, 'Text Speed'),
         React.createElement('select', {
            value: settings.textSpeed,
            onChange: (e) => onSettingsChange({ textSpeed: e.target.value }),
            className: 'w-full p-2 border-2 border-black rounded'
         }, [
            React.createElement('option', { value: 'slow' }, 'Slow'),
            React.createElement('option', { value: 'normal' }, 'Normal'),
            React.createElement('option', { value: 'fast' }, 'Fast')
         ])
      ]),

      React.createElement('div', { key: 'battle-speed' }, [
         React.createElement('label', {
            className: 'block mb-2 font-medium'
         }, 'Battle Speed'),
         React.createElement('select', {
            value: settings.battleSpeed,
            onChange: (e) => onSettingsChange({ battleSpeed: e.target.value }),
            className: 'w-full p-2 border-2 border-black rounded'
         }, [
            React.createElement('option', { value: 'normal' }, 'Normal'),
            React.createElement('option', { value: 'fast' }, 'Fast'),
            React.createElement('option', { value: 'ultra' }, 'Ultra Fast')
         ])
      ])
   ]);

   const renderBattleSettings = () => React.createElement('div', {
      className: 'space-y-4'
   }, [
      React.createElement('div', { key: 'damage-numbers' }, [
         React.createElement('label', {
            className: 'flex items-center gap-2 cursor-pointer'
         }, [
            React.createElement('input', {
               type: 'checkbox',
               checked: settings.showDamageNumbers,
               onChange: (e) => onSettingsChange({ showDamageNumbers: e.target.checked }),
               className: 'w-4 h-4'
            }),
            React.createElement('span', null, 'Show Damage Numbers')
         ])
      ]),

      React.createElement('div', { key: 'type-effectiveness' }, [
         React.createElement('label', {
            className: 'flex items-center gap-2 cursor-pointer'
         }, [
            React.createElement('input', {
               type: 'checkbox',
               checked: settings.showTypeEffectiveness,
               onChange: (e) => onSettingsChange({ showTypeEffectiveness: e.target.checked }),
               className: 'w-4 h-4'
            }),
            React.createElement('span', null, 'Show Type Effectiveness')
         ])
      ]),

      React.createElement('div', { key: 'coach-default' }, [
         React.createElement('label', {
            className: 'flex items-center gap-2 cursor-pointer'
         }, [
            React.createElement('input', {
               type: 'checkbox',
               checked: settings.showCoachByDefault,
               onChange: (e) => onSettingsChange({ showCoachByDefault: e.target.checked }),
               className: 'w-4 h-4'
            }),
            React.createElement('span', null, 'Show Coach by Default')
         ])
      ]),

      React.createElement('div', { key: 'coach-detail' }, [
         React.createElement('label', {
            className: 'block mb-2 font-medium'
         }, 'Coach Detail Level'),
         React.createElement('select', {
            value: settings.coachDetailLevel,
            onChange: (e) => onSettingsChange({ coachDetailLevel: e.target.value }),
            className: 'w-full p-2 border-2 border-black rounded'
         }, [
            React.createElement('option', { value: 'basic' }, 'Basic'),
            React.createElement('option', { value: 'detailed' }, 'Detailed'),
            React.createElement('option', { value: 'strategic' }, 'Strategic')
         ])
      ])
   ]);

   const renderAudioSettings = () => React.createElement('div', {
      className: 'space-y-4'
   }, [
      React.createElement('div', { key: 'sound-enabled' }, [
         React.createElement('label', {
            className: 'flex items-center gap-2 cursor-pointer'
         }, [
            React.createElement('input', {
               type: 'checkbox',
               checked: settings.soundEnabled,
               onChange: (e) => onSettingsChange({ soundEnabled: e.target.checked }),
               className: 'w-4 h-4'
            }),
            React.createElement('span', null, 'Sound Effects')
         ])
      ]),

      React.createElement('div', { key: 'music-enabled' }, [
         React.createElement('label', {
            className: 'flex items-center gap-2 cursor-pointer'
         }, [
            React.createElement('input', {
               type: 'checkbox',
               checked: settings.musicEnabled,
               onChange: (e) => onSettingsChange({ musicEnabled: e.target.checked }),
               className: 'w-4 h-4'
            }),
            React.createElement('span', null, 'Background Music')
         ])
      ])
   ]);

   const renderDisplaySettings = () => React.createElement('div', {
      className: 'space-y-4'
   }, [
      React.createElement('div', { key: 'theme' }, [
         React.createElement('label', {
            className: 'block mb-2 font-medium'
         }, 'Theme'),
         React.createElement('select', {
            value: settings.theme,
            onChange: (e) => onSettingsChange({ theme: e.target.value }),
            className: 'w-full p-2 border-2 border-black rounded'
         }, [
            React.createElement('option', { value: 'classic' }, 'Classic'),
            React.createElement('option', { value: 'modern' }, 'Modern'),
            React.createElement('option', { value: 'dark' }, 'Dark')
         ])
      ])
   ]);

   const renderTabContent = () => {
      switch (activeTab) {
         case "general": return renderGeneralSettings();
         case "battle": return renderBattleSettings();
         case "audio": return renderAudioSettings();
         case "display": return renderDisplaySettings();
         default: return renderGeneralSettings();
      }
   };

   return React.createElement('div', {
      className: 'settings-panel'
   }, [
      React.createElement('div', {
         key: 'header',
         className: 'flex justify-between items-center mb-6'
      }, [
         React.createElement('h2', {
            className: 'text-2xl font-bold'
         }, 'Settings'),
         React.createElement('button', {
            onClick: onClose,
            className: 'text-gray-500 hover:text-black text-2xl font-bold'
         }, '×')
      ]),

      React.createElement('div', {
         key: 'tabs',
         className: 'settings-tabs'
      }, tabs.map(tab => 
         React.createElement('button', {
            key: tab.id,
            className: `settings-tab ${activeTab === tab.id ? 'active' : ''}`,
            onClick: () => setActiveTab(tab.id)
         }, tab.label)
      )),

      React.createElement('div', {
         key: 'content',
         className: 'mt-6'
      }, renderTabContent()),

      React.createElement('div', {
         key: 'footer',
         className: 'mt-8 pt-4 border-t border-gray-200 flex justify-end gap-2'
      }, [
         React.createElement('button', {
            key: 'reset',
            onClick: () => {
               if (confirm('Reset all settings to default?')) {
                  onSettingsChange(window.getDefaultSettings());
               }
            },
            className: 'px-4 py-2 text-gray-600 hover:text-black transition-colors'
         }, 'Reset to Defaults'),
         React.createElement('button', {
            key: 'close',
            onClick: onClose,
            className: 'px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
         }, 'Close')
      ])
   ]);
};
