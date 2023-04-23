import { useState } from 'react';
import ModalBase from './components/modal/ModalBase';
import ModalAdvanced from './components/modal/ModalAdvanced';
import TooltipAdvanced from './components/tooltip/TooltipAdvanced';

const App = () => {
   const [openModal, setOpenModal] = useState(false);
   const [openModalBase, setOpenModalBase] = useState(false);
   return (
      <div className="p-5 flex justify-center items-center h-screen">
         <button onClick={() => setOpenModalBase(true)} className="p-5 text-center text-white bg-blue-400 rounded-lg">
            Open modal base
         </button>
         <button onClick={() => setOpenModal(true)} className="p-5 ml-5 text-center text-white bg-blue-400 rounded-lg">
            Open modal
         </button>
         <ModalBase visible={openModalBase} onClose={() => setOpenModalBase(false)}>
            <div className="p-10 bg-white rounded-lg w-full max-w-[320px]">
               <TooltipAdvanced title="tooltip">This is a tooltip</TooltipAdvanced>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis, deleniti veritatis ipsum suscipit natus, minus asperiores
               accusantium recusandae atque minima velit dolorum vero totam nam aliquam illo excepturi voluptatibus.
            </div>
         </ModalBase>
         <ModalAdvanced
            bodyClassName="w-full max-w-[482px] bg-white p-10 rounded-lg"
            visible={openModal}
            onClose={() => setOpenModal(false)}
            heading="Welcome back!"
         >
            <div className="flex flex-col gap-3 mb-5">
               <label htmlFor="email" className="text-sm cursor-pointer">
                  Email address
               </label>
               <input type="text" className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-3 mb-5">
               <label htmlFor="password" className="text-sm cursor-pointer">
                  Password
               </label>
               <input type="text" className="w-full text-sm leading-normal bg-[#e7ecf3] rounded-lg p-4" placeholder="Enter your password" />
            </div>
            <button className="w-full p-4 text-base font-semibold text-white bg-[#316bff] rounded-lg">Sign in</button>
         </ModalAdvanced>

         <div className="inline-block ml-5">
            <TooltipAdvanced title="Tooltip">This is a tooltip</TooltipAdvanced>
         </div>
      </div>
   );
};

export default App;
