import { useController } from "react-hook-form";

const InputRHF = ({ control, ...props }) => {
   const { field, fieldState } = useController({
      control,
      name: props.name,
      defaultValue: "",
   });

   return (
      <>
         <div className="form-group">
            <label className="form-label fw-semibold">{props.label}</label>
            <input
               className={`form-control ${
                  fieldState?.error ? "is-invalid" : ""
               }`}
               {...field}
               {...props}
            />
            {fieldState?.error && (
               <div className="invalid-feedback">
                  {fieldState?.error?.message}
               </div>
            )}
         </div>
      </>
   );
};

export default InputRHF;
