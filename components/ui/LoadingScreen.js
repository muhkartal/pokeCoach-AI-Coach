export const LoadingScreen = ({ progress = 0, message = "Loading..." }) => {
   return React.createElement('div', {
      className: 'loading-screen'
   }, [
      React.createElement('div', {
         key: 'logo',
         className: 'text-center mb-8'
      }, [
         React.createElement('h1', {
            key: 'title',
            className: 'text-6xl text-white mb-4',
            style: { textShadow: '3px 3px 0 #000' }
         }, 'Pokemon Battle'),
         React.createElement('h2', {
            key: 'subtitle',
            className: 'text-3xl text-gray-200 mb-8',
            style: { textShadow: '2px 2px 0 #000' }
         }, 'Ultimate Arena')
      ]),
      
      React.createElement('div', {
         key: 'pokeball',
         className: 'loading-pokeball mb-8',
         style: {
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(to bottom, #ff6b6b 50%, #ffffff 50%)',
            border: '5px solid #000',
            margin: '0 auto',
            position: 'relative',
            animation: 'pokeball-shake 1s ease-in-out infinite'
         }
      }, [
         React.createElement('div', {
            key: 'pokeball-center',
            style: {
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               width: '20px',
               height: '20px',
               background: '#ffffff',
               border: '3px solid #000',
               borderRadius: '50%'
            }
         }),
         React.createElement('div', {
            key: 'pokeball-line',
            style: {
               position: 'absolute',
               top: '50%',
               left: '0',
               right: '0',
               height: '5px',
               background: '#000',
               transform: 'translateY(-50%)'
            }
         })
      ]),

      React.createElement('div', {
         key: 'progress',
         className: 'w-80 mx-auto mb-4'
      }, [
         React.createElement('div', {
            key: 'progress-bg',
            className: 'w-full bg-gray-700 rounded-full h-4 border-2 border-black'
         }, 
            React.createElement('div', {
               className: 'bg-yellow-400 h-full rounded-full transition-all duration-300',
               style: { width: `${Math.min(100, Math.max(0, progress))}%` }
            })
         ),
         React.createElement('div', {
            key: 'progress-text',
            className: 'text-center mt-2 text-white text-sm',
            style: { textShadow: '1px 1px 0 #000' }
         }, `${Math.round(progress)}%`)
      ]),

      React.createElement('p', {
         key: 'message',
         className: 'text-white text-center text-lg',
         style: { textShadow: '2px 2px 0 #000' }
      }, message),

      React.createElement('div', {
         key: 'footer',
         className: 'mt-8 text-center'
      }, [
         React.createElement('p', {
            key: 'version',
            className: 'text-gray-300 text-sm',
            style: { textShadow: '1px 1px 0 #000' }
         }, 'Ultimate Edition v2.0.0'),
         React.createElement('p', {
            key: 'tip',
            className: 'text-gray-400 text-xs mt-2',
            style: { textShadow: '1px 1px 0 #000' }
         }, 'Tip: Use COACH button in battle for strategic advice!')
      ])
   ]);
};
