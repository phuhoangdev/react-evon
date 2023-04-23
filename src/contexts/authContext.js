import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider(props) {
   const [user, setUser] = useState({
      userId: 1,
      fullname: 'LHP',
      email: 'lhp1996nt@gmail.com',
      avatar:
         'https://plus.unsplash.com/premium_photo-1680268643503-a9956959e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
   });
   const value = { user, setUser };
   return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
   const context = useContext(AuthContext);
   if (typeof context === 'undefined') throw new Error('useAuth must be used within a AuthProvider');
   return context;
}

export { AuthProvider, useAuth };
