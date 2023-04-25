import { useController } from "react-hook-form";

const CheckboxRHF = ({ control, ...props }) => {
   const { field, fieldState } = useController({
      control,
      name: props.name,
      defaultValue: "",
   });

   return (
      <>
         <div className="form-check">
            <input
               className={`form-check-input ${
                  fieldState?.error ? "is-invalid" : ""
               }`}
               {...field}
               {...props}
               checked={field["value"] ?? false}
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

export default CheckboxRHF;
