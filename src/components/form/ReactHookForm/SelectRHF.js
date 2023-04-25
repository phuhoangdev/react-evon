import { useController } from "react-hook-form";

const SelectRHF = ({ options, control, ...props }) => {
   const { field, fieldState } = useController({
      control,
      name: props.name,
   });

   return (
      <>
         <select
            className={`form-select ${fieldState?.error ? "is-invalid" : ""}`}
            {...field}
            name={props.name}
         >
            <option>{props.defaultLabel}</option>

            {options &&
               options.length > 0 &&
               options.map((option, index) => (
                  <option key={index} value={option.value}>
                     {option.name}
                  </option>
               ))}
         </select>

         {fieldState?.error && (
            <div className="invalid-feedback">{fieldState?.error?.message}</div>
         )}
      </>
   );
};

export default SelectRHF;
