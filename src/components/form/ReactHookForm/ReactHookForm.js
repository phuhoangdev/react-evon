import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import InputRHF from './InputRHF';
import RadioRHF from './RadioRHF';
import CheckboxRHF from './CheckboxRHF';
import SelectRHF from './SelectRHF';
import FormValidation from './Validation';

const ReactHookForm = () => {
   const {
      watch,
      handleSubmit,
      formState: { isValid, isSubmitting },
      control,
      reset,
      setFocus,
      setValue,
   } = useForm({
      resolver: yupResolver(FormValidation()),
      mode: 'onBlur',
   });

   const [user, setUser] = useState(null);

   const onSubmit = (values) => {
      if (!isValid) return;

      return new Promise((resolve) => {
         setTimeout(() => {
            resolve();
            if (isValid && values) {
               toast.success('Sign in success');
               alert(JSON.stringify(values));
               setUser({ gender: '', job: '' });
            } else {
               toast.error('Error');
            }
         }, 3000);
      });
   };

   useEffect(() => {
      // reset form with user data
      reset(user);
      // eslint-disable-next-line
   }, [user]);

   useEffect(() => {
      setFocus('fullName');
      handleSignIn();
      // eslint-disable-next-line
   }, []);

   const watchGender = watch('gender');

   const jobArr = [
      { value: '1', name: 'Developer' },
      { value: '2', name: 'Manager' },
      { value: '3', name: 'CEO' },
   ];

   const handleSignIn = () => {
      setValue('fullName', 'Phu Hoang');
      setValue('email', 'test@gmail.com');
      setValue('phone', '0333666999');
      setValue('password', '123456');
   };

   return (
      <>
         <form className="row g-3 py-4 justify-content-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-4">
               <div className="mb-3">
                  <InputRHF label="Full Name" name="fullName" type="text" className="form-control" placeholder="Enter your name" control={control} />
               </div>
               <div className="mb-3">
                  <InputRHF label="Email Address" name="email" type="text" placeholder="Enter your email address" control={control} />
               </div>
               <div className="mb-3">
                  <InputRHF label="Phone number" name="phone" type="tel" placeholder="Enter your phone number" control={control} />
               </div>
               <div className="mb-2">
                  <InputRHF label="Password" name="password" type="password" placeholder="Enter your password" control={control} />
               </div>

               <div className="mb-3">
                  <legend className="col-form-label fw-semibold">Gender</legend>
                  <RadioRHF label="Male" name="gender" value="male" id="male" checked={watchGender === 'male'} control={control} />

                  <RadioRHF label="Female" name="gender" value="female" id="female" checked={watchGender === 'female'} control={control} />
               </div>

               <div className="mt-3">
                  <SelectRHF name="job" defaultLabel="Select your job" options={jobArr} control={control} />
               </div>

               <div className="mt-3">
                  <CheckboxRHF label="I accept the terms and conditions" type="checkbox" name="accept" id="accept" control={control} />
               </div>

               <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                     {isSubmitting && <span className="spinner-border spinner-border-sm me-2"></span>}
                     Sign in
                  </button>
               </div>
            </div>
         </form>
      </>
   );
};

export default ReactHookForm;
