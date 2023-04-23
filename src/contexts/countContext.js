import { useState, useContext } from 'react';
import { createContext } from 'react';

const CountContext = createContext();

function CountProvider(props) {
   const [count, setCount] = useState(0);
   const value = [count, setCount];

   return <CountContext.Provider value={value} {...props}></CountContext.Provider>;
}

function useCount() {
   const context = useContext(CountContext);
   if (typeof context === 'undefined') throw new Error('useContext must be used within a CountProvider');
   return context;
}

export { CountProvider, useCount };
