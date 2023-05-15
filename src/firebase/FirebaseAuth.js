import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase-config";

const FirebaseAuth = () => {
     const [values, setValues] = useState({
          email: "",
          password: "",
     });

     onAuthStateChanged(auth, (currentUser) => {
          setUserInfo(currentUser);
     });

     const [userInfo, setUserInfo] = useState("");

     const handleInputChange = (e) => {
          setValues({
               ...values,
               [e.target.name]: e.target.value,
          });
     };

     const handleCreateUser = async (e) => {
          e.preventDefault();
          await createUserWithEmailAndPassword(auth, values.email, values.password);
     };

     const handleSignOut = () => {
          signOut(auth);
     };

     return (
          <div className="p-10">
               <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                    <form onSubmit={handleCreateUser}>
                         <input
                              type="email"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your email"
                              name="email"
                              onChange={handleInputChange}
                         />
                         <input
                              type="password"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your password"
                              name="password"
                              onChange={handleInputChange}
                         />
                         <button type="submit" className="p-3 bg-blue-500 text-white text-sm font-semibold rounded-lg w-full">
                              Sign up
                         </button>
                    </form>
                    <div className="mt-10 flex items-center gap-x-5">
                         <span>{userInfo?.email}</span>
                         <button type="submit" className="p-3 bg-red-500 text-white text-sm font-semibold rounded-lg" onClick={handleSignOut}>
                              Sign out
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default FirebaseAuth;
