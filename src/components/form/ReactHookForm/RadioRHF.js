import { useController } from "react-hook-form";

const RadioRHF = ({ control, ...props }) => {
   const { field, fieldState } = useController({
      control,
      name: props.name,
   });

   return (
      <>
         <div className="form-check form-check-inline">
            <input
               type="radio"
               className={`form-check-input ${
                  fieldState?.error ? "is-invalid" : ""
               }`}
               {...field}
               {...props}
            />
            <label className="form-check-label" htmlFor={props.id}>
               {props.label}
            </label>
            {fieldState?.error && (
               <div className="invalid-feedback">
                  {fieldState?.error?.message}
               </div>
            )}
         </div>
      </>
   );
};

export default RadioRHF;
