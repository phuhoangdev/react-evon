import { createPortal } from 'react-dom';
import useHover from '../../hooks/useHover';
import { useState } from 'react';

const Tooltip = ({ children, text }) => {
   const { hovered, nodeRef } = useHover();
   const [coords, setCoords] = useState({});
   const handleHover = (e) => {
      setCoords(e.target.getBoundingClientRect());
   };

   return (
      <div>
         {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
         <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
            {text}
         </span>
      </div>
   );
};

function TooltipContent({ children, coords }) {
   return createPortal(
      <p
         className="absolute inline-block p-3 text-white -translate-y-full -translate-x-1/2 bg-black rounded-xl max-w-[200px]"
         style={{
            left: coords.left + coords.width / 2,
            top: coords.top - coords.height / 2,
         }}
      >
         {children}
      </p>,
      document.querySelector('body'),
   );
}

export default Tooltip;
