import { useEffect, useState } from 'react';
import axios from 'axios';

const getRandomPhotos = async (page) => {
   try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
      return response.data;
   } catch (error) {
      console.log('Error: ', error);
   }
};

const Photos = () => {
   const [randomPhotos, setRandomPhotos] = useState([]);
   const [nextPage, setNextPage] = useState(1);

   const handleLoadMore = async () => {
      const images = await getRandomPhotos(nextPage);
      const newPhotos = [...randomPhotos, ...images];
      setRandomPhotos(newPhotos);
      setNextPage(nextPage + 1);
   };

   useEffect(() => {
      handleLoadMore();
      // eslint-disable-next-line
   }, []);

   return (
      <div>
         <div className="grid grid-cols-4 gap-5 p-5">
            {randomPhotos.length > 0 &&
               randomPhotos.map((item, index) => (
                  <div key={item.id} className="p-3 bg-white shadow-md rounded-lg h-[200px]">
                     <img className="w-full h-full object-cover rounded-lg" src={item.download_url} alt={item.author} />
                  </div>
               ))}
         </div>
         <div className="text-center">
            <button onClick={handleLoadMore} className="inline-block px-14 py-4 bg-primary-gradient text-white">
               Load More
            </button>
         </div>
      </div>
   );
};

export default Photos;
