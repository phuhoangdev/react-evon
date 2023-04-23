import { createContext, useContext, useState } from 'react';

const data = [
   {
      id: 1,
      url: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwYmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      isFavorite: false,
   },
   {
      id: 2,
      url: 'https://images.unsplash.com/photo-1568819317551-31051b37f69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      isFavorite: false,
   },
   {
      id: 3,
      url: 'https://images.unsplash.com/photo-1531469535976-c6fc3604014f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwYmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      isFavorite: false,
   },
   {
      id: 4,
      url: 'https://images.unsplash.com/photo-1606792109963-7b34205b1333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      isFavorite: false,
   },
   {
      id: 5,
      url: 'https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      isFavorite: false,
   },
   {
      id: 6,
      url: 'https://images.unsplash.com/photo-1606792109910-340f5e672ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdCUyMGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      isFavorite: false,
   },
];

const GalleryContext = createContext();

function GalleryProvider(props) {
   const [photos, setPhotos] = useState(data);
   const [cartItems, setCartItems] = useState([]);
   const [favoriteList, setFavoriteList] = useState([]);

   const toggleFavorite = (photoId) => {
      const updatedArray = photos.map((photo) => {
         if (photo.id === photoId) {
            return { ...photo, isFavorite: !photo.isFavorite };
         }
         return photo;
      });
      setPhotos(updatedArray);
   };

   function addToCart(newItem) {
      setCartItems((prevItems) => {
         const isExisted = prevItems.some((item) => item.id === newItem.id);
         if (isExisted) return [...prevItems];
         return [...prevItems, newItem];
      });
   }

   function removeFromCart(photoId) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== photoId));
   }

   const value = {
      photos,
      cartItems,
      favoriteList,
      setCartItems,
      setPhotos,
      setFavoriteList,
      toggleFavorite,
      addToCart,
      removeFromCart,
   };
   return <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>;
}

function useGallery() {
   const context = useContext(GalleryContext);
   if (typeof context === 'undefined') throw new Error('useGallery must be used within a GalleryProvider');
   return context;
}

export { GalleryProvider, useGallery };
