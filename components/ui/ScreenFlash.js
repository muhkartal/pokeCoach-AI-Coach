export const ScreenFlash = ({ color = "#ffffff", duration = 200, intensity = 0.7 }) => {
   const [isVisible, setIsVisible] = React.useState(true);

   React.useEffect(() => {
      const timer = setTimeout(() => {
         setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
   }, [duration]);

   if (!isVisible) return null;

   return React.createElement('div', {
      className: 'fixed inset-0 pointer-events-none z-50',
      style: {
         backgroundColor: color,
         opacity: intensity,
         animation: `flash ${duration}ms ease-out forwards`
      }
   });
};
