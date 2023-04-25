import * as Yup from "yup";

const FormValidation = () => {
   const schema = Yup.object({
      email: Yup.string()
         .required("Email address is required")
         .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Email address is wrong",
         ),
      phone: Yup.string()
         .required("Phone number is required")
         .matches(
            /^((((\+)?840?)[2-9][0-9]{8})|(0[2-9][0-9]{8}))$/,
            "Phone number is wrong",
         ),
      password: Yup.string().required("Password is required"),
      accept: Yup.string().required("Please accept the terms and conditions"),
   }).required();

   return schema;
};

export default FormValidation;
