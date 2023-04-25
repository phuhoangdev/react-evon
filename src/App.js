import HeaderMain from './components/HeaderMain';
import CartList from './components/gallery/CartList';
import PhotoList from './components/gallery/PhotoList';
import { AuthProvider } from './contexts/authContext';
import { CountProvider, useCount } from './contexts/countContext';
import { GalleryProvider } from './contexts/galleryContext';

function CountDisplay() {
   const [count] = useCount();
   return <div>The count is: {count}</div>;
}

function Counter() {
   const [, setCount] = useCount();
   const increment = () => setCount((count) => count + 1);

   return (
      <button onClick={increment} className="p-4 rounded-lg text-white font-semibold bg-purple-500">
         Increment count
      </button>
   );
}

const App = () => {
   return (
      <>
         <AuthProvider>
            <GalleryProvider>
               <HeaderMain />
               <PhotoList />
               <CartList />
            </GalleryProvider>
         </AuthProvider>

         <div className="p-5 flex items-center justify-center gap-x-5">
            <CountProvider>
               <CountDisplay />
               <Counter />
            </CountProvider>
         </div>
      </>
   );
};

export default App;
