import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import lodash from 'lodash';

const HackerNews = () => {
   const [hits, setHits] = useState([]);
   const [query, setQuery] = useState('');
   const [loading, setLoading] = useState(true);
   const [errorMessage, setErrorMessage] = useState('');
   const handleFetchData = useRef({});
   handleFetchData.current = async () => {
      try {
         setLoading(true);
         const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
         setHits(response.data?.hits || []);
         setLoading(false);
         setErrorMessage('');
      } catch (error) {
         setLoading(false);
         setHits([]);
         setErrorMessage(`Error: ${error}`);
      }
   };

   const handleUpdateQuery = lodash.debounce((e) => {
      setQuery(e.target.value);
   }, 500);

   useEffect(() => {
      handleFetchData.current();
   }, [query]);

   return (
      <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-md w-2/4">
         <div className="flex mb-5 gap-x-5">
            <input
               type="text"
               className="p-5 border border-gray-400 block w-full rounded-md focus:border-blue-400 transition-all"
               placeholder="Enter your keyword..."
               defaultValue={query}
               onChange={handleUpdateQuery}
            />
            {/* <button className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0">
               Search
            </button> */}
         </div>
         {loading && (
            <div className="loading w-8 h-8 rounded-full border-4 border-r-4 border-r-transparent border-blue-500 animate-spin mx-auto my-10"></div>
         )}
         {!loading && errorMessage && <p className="text-red-400 my-5">{errorMessage}</p>}
         <div className="flex flex-wrap gap-5">
            {!loading &&
               hits.length > 0 &&
               hits.map(
                  (item, index) =>
                     item.title?.length > 0 && (
                        <h3 key={item.title} className="p-3 bg-gray-100 rounded-sm">
                           {item.title}
                        </h3>
                     ),
               )}
         </div>
      </div>
   );
};

export default HackerNews;
