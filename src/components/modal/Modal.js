import { createPortal } from 'react-dom';

const Modal = ({ open = false, handleClose = () => {} }) => {
   if (typeof document === 'undefined') return <div className="modal"></div>;
   return createPortal(
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${open ? '' : 'opacity-0 invisible'}`}>
         <div className="absolute inset-0 bg-black bg-opacity-25 overlay" onClick={handleClose}></div>
         <div className="modal-content bg-white relative z-10 p-10 w-full rounded-lg max-w-[482px]">
            <span
               onClick={handleClose}
               className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer"
            >
               X
            </span>
            <h2 className="mb-5 text-4xl font-medium text-center text-black">Welcome Back!</h2>
            <div className="flex flex-col gap-3 mb-5">
               <label htmlFor="email" className="text-sm cursor-pointer">
                  Email address
               </label>
               <input type="text" className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-3">
               <label htmlFor="password" className="text-sm cursor-pointer">
                  Password
               </label>
               <input type="text" className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4" placeholder="Enter your password" />
            </div>
            <button className="w-full p-4 text-base font-semibold text-white bg-[#316bff] rounded-lg">Sign in</button>
         </div>
      </div>,
      document.querySelector('body'),
   );
};

export default Modal;
