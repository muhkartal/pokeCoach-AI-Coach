export const MessageBox = ({
   messages,
   onNext,
   autoAdvance = true,
   autoAdvanceDelay = 2000,
   typingSpeed = 30,
}) => {
   const [currentIndex, setCurrentIndex] = React.useState(0);
   const [displayText, setDisplayText] = React.useState("");
   const [isTyping, setIsTyping] = React.useState(true);
   const autoAdvanceTimerRef = React.useRef(null);

   React.useEffect(() => {
      setCurrentIndex(0);
   }, [messages]);

   React.useEffect(() => {
      if (currentIndex >= messages.length) {
         onNext();
         return;
      }

      const message = messages[currentIndex];
      let charIndex = 0;
      setDisplayText("");
      setIsTyping(true);

      if (autoAdvanceTimerRef.current) {
         clearTimeout(autoAdvanceTimerRef.current);
         autoAdvanceTimerRef.current = null;
      }

      const typingInterval = setInterval(() => {
         if (charIndex < message.length) {
            setDisplayText(message.substring(0, charIndex + 1));
            charIndex++;
         } else {
            clearInterval(typingInterval);
            setIsTyping(false);

            if (autoAdvance) {
               autoAdvanceTimerRef.current = setTimeout(() => {
                  if (currentIndex < messages.length - 1) {
                     setCurrentIndex((prev) => prev + 1);
                  } else {
                     onNext();
                  }
               }, autoAdvanceDelay);
            }
         }
      }, typingSpeed);

      return () => {
         clearInterval(typingInterval);
         if (autoAdvanceTimerRef.current) {
            clearTimeout(autoAdvanceTimerRef.current);
            autoAdvanceTimerRef.current = null;
         }
      };
   }, [currentIndex, messages, onNext, autoAdvance, autoAdvanceDelay, typingSpeed]);

   const handleClick = () => {
      if (autoAdvanceTimerRef.current) {
         clearTimeout(autoAdvanceTimerRef.current);
         autoAdvanceTimerRef.current = null;
      }

      if (isTyping) {
         setDisplayText(messages[currentIndex]);
         setIsTyping(false);

         if (autoAdvance) {
            autoAdvanceTimerRef.current = setTimeout(() => {
               if (currentIndex < messages.length - 1) {
                  setCurrentIndex((prev) => prev + 1);
               } else {
                  onNext();
               }
            }, autoAdvanceDelay);
         }
      } else {
         if (currentIndex < messages.length - 1) {
            setCurrentIndex(currentIndex + 1);
         } else {
            onNext();
         }
      }
   };

   if (currentIndex >= messages.length) return null;

   return React.createElement('div', {
      className: 'text-box p-4 cursor-pointer',
      onClick: handleClick
   }, [
      React.createElement('div', {
         key: 'message-text',
         className: 'text-lg leading-relaxed min-h-[3rem]'
      }, displayText),
      
      !isTyping && React.createElement('div', {
         key: 'controls',
         className: 'flex justify-between items-center mt-2'
      }, [
         React.createElement('div', {
            key: 'status',
            className: 'text-xs text-gray-600'
         }, autoAdvance ? "Auto-advancing..." : "Click to continue"),
         
         React.createElement('div', {
            key: 'indicator',
            className: 'w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black animate-pulse'
         })
      ]),

      React.createElement('div', {
         key: 'progress',
         className: 'flex justify-center mt-2 space-x-1'
      }, messages.map((_, index) => 
         React.createElement('div', {
            key: index,
            className: `w-2 h-2 rounded-full ${
               index === currentIndex ? 'bg-black' : 
               index < currentIndex ? 'bg-gray-400' : 'bg-gray-200'
            }`
         })
      ))
   ]);
};
