import { useState } from 'react';
import Modal from './Modal';
import DropdownPortal from '../DropdownPortal';

const ModalApp = () => {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <div>
            <Modal open={showModal} handleClose={() => setShowModal(false)} />
         </div>
         <button onClick={() => setShowModal(true)} className="p-4 m-5 text-white bg-blue-500 rounded-md">
            Show modal
         </button>
         <div className="relative z-30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quia sapiente ducimus ipsam. Unde, ipsum doloremque, suscipit
            veritatis consequatur reprehenderit sit placeat, perferendis dolorem sed similique in repudiandae fuga cupiditate!
         </div>
         <div>
            <DropdownPortal />
         </div>
      </>
   );
};

export default ModalApp;
