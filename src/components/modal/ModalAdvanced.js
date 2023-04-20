import ModalBase from './ModalBase';

const ModalAdvanced = ({ children, heading, ...props }) => {
   return (
      <ModalBase {...props}>
         <span
            onClick={props.onClose}
            className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer"
         >
            X
         </span>
         <h2 className="mb-5 text-4xl font-medium text-center text-black">{heading}</h2>
         {children}
      </ModalBase>
   );
};

export default ModalAdvanced;
