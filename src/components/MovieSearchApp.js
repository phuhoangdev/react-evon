// https://api.themoviedb.org/3/search/movie?api_key=33aec3e46513194f2d716e9b0bc14bf5&query=''
// https://image.tmdb.org/t/p/original/

import axios from 'axios';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import LoadingSkeleton from './loading/LoadingSkeleton';

const MovieSearchApp = () => {
   const [movies, setMovies] = useState([]);
   const [query, setQuery] = useState('');
   const queryDebounce = useDebounce(query, 500);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      async function fetchData() {
         setLoading(true);

         const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=33aec3e46513194f2d716e9b0bc14bf5&query='${queryDebounce}'`,
         );
         if (response.data.results) {
            setMovies(response.data.results);
            setLoading(false);
         }
      }
      fetchData();
   }, [queryDebounce]);

   return (
      <div className="p-10">
         <div className="w-full max-w-[500px] mx-auto mb-20">
            <input
               onChange={(e) => setQuery(e.target.value)}
               type="text"
               placeholder="Search movie..."
               className="w-full p-5 rounded-lg shadow-lg border border-purple-500"
            />
         </div>
         {loading && (
            <div className="grid grid-cols-3 gap-10">
               <MovieItemLoading />
               <MovieItemLoading />
               <MovieItemLoading />
            </div>
         )}
         <div className="grid grid-cols-3 gap-10">
            {!loading && movies.length > 0 && movies.map((item) => <MovieItem key={item.id} data={item} />)}
         </div>
      </div>
   );
};

const MovieItemLoading = () => {
   return (
      <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col">
         <div className="h-[297px]">
            <LoadingSkeleton height="100%" radius="16px" />
         </div>
         <div className="p-7 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">
               <LoadingSkeleton height="20px" />
            </h3>
            <p className="text-[#999] text-sm mb-6 !leading-loose">
               <LoadingSkeleton height="10px" />
               <div className="h-2"></div>
               <LoadingSkeleton height="10px" />
               <div className="h-2"></div>
               <LoadingSkeleton height="10px" />
            </p>
            <div className="flex items-center gap-x-3 mt-auto">
               <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
                     stroke="#FFB86C"
                     stroke-width="1.5"
                  />
                  <path d="M5.03301 16.0001L5 16.9995" stroke="#FFB86C" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M11.0296 16.1981L10.9966 17.1975" stroke="#FFB86C" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8.03135 16.0991L7.96533 18.098" stroke="#FFB86C" stroke-width="1.5" stroke-linecap="round" />
               </svg>

               <span className="text-sm font-semibold text-[#333]">
                  <LoadingSkeleton width="50px" height="10px" />
               </span>
            </div>
         </div>
      </div>
   );
};

const MovieItem = ({ data }) => {
   return (
      <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col">
         <div className="h-[297px]">
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.title} className="w-full h-full object-cover rounded-lg" />
         </div>
         <div className="p-7 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">{data.title}</h3>
            <p className="text-[#999] text-sm mb-6 !leading-loose">{data.overview}</p>
            <div className="flex items-center gap-x-3 mt-auto">
               <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
                     stroke="#FFB86C"
                     stroke-width="1.5"
                  />
                  <path d="M5.03301 16.0001L5 16.9995" stroke="#FFB86C" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M11.0296 16.1981L10.9966 17.1975" stroke="#FFB86C" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8.03135 16.0991L7.96533 18.098" stroke="#FFB86C" stroke-width="1.5" stroke-linecap="round" />
               </svg>

               <span className="text-sm font-semibold text-[#333]">{data.vote_average}</span>
            </div>
         </div>
      </div>
   );
};

export default MovieSearchApp;
