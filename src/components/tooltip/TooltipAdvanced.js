import { useState } from 'react';
import Portal from '../Portal';
import { CSSTransition } from 'react-transition-group';

const TooltipAdvanced = ({ title, children }) => {
   const [visible, setVisible] = useState(false);
   const [coords, setCoords] = useState({
      top: 0,
      left: 0,
      height: 0,
      width: 0,
   });

   const handleMouseEnter = (e) => {
      setCoords(e.target.getBoundingClientRect());
      setVisible(true);
   };

   const handleMouseLeave = () => {
      setVisible(false);
   };

   return (
      <div className="relative inline-block">
         <CSSTransition in={visible} classNames="fade" timeout={300} unmountOnExit>
            {(status) => (
               <Portal overlay={false} visible={status !== 'exited'}>
                  <p
                     className="tooltip z-[9999] absolute inline-block p-3 text-white -translate-y-full -translate-x-1/2 bg-black rounded-xl max-w-[200px] transition-all"
                     style={{
                        left: coords.left + coords.width / 2,
                        top: coords.top - coords.height / 2,
                     }}
                  >
                     {children}
                  </p>
               </Portal>
            )}
         </CSSTransition>
         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {title}
         </div>
      </div>
   );
};

export default TooltipAdvanced;
