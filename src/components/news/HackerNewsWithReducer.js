import axios from 'axios';
import { useEffect, useRef, useReducer } from 'react';

const initialState = {
   hits: [],
   query: '',
   loading: true,
   errorMessage: '',
   url: 'https://hn.algolia.com/api/v1/search?query=""',
};

const hackerNewsReducer = (state, action) => {
   switch (action.type) {
      case 'SET_DATA': {
         return { ...state, hits: action.payload };
      }

      case 'SET_LOADING': {
         return { ...state, loading: action.payload };
      }

      case 'SET_ERROR': {
         return { ...state, errorMessage: action.payload };
      }

      case 'SET_QUERY': {
         return { ...state, query: action.payload };
      }

      case 'SET_URL': {
         return { ...state, url: action.payload };
      }

      default:
         break;
   }
};

const HackerNewsWithReducer = () => {
   const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
   const handleFetchData = useRef({});

   handleFetchData.current = async () => {
      dispatch({
         type: 'SET_LOADING',
         payload: true,
      });

      try {
         const response = await axios.get(state.url);
         dispatch({
            type: 'SET_DATA',
            payload: response.data?.hits || [],
         });
         dispatch({
            type: 'SET_LOADING',
            payload: false,
         });
      } catch (error) {
         dispatch({
            type: 'SET_LOADING',
            payload: false,
         });
         dispatch({
            type: 'SET_ERROR',
            payload: `Error: ${error}`,
         });
      }
   };

   useEffect(() => {
      handleFetchData.current();
   }, [state.url]);

   return (
      <div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-md">
         <div className="flex mb-5 gap-x-5">
            <input
               type="text"
               className="block w-full p-5 transition-all border border-gray-400 rounded-md focus:border-blue-400"
               placeholder="Enter your keyword..."
               defaultValue={state.query}
               onChange={(e) =>
                  dispatch({
                     type: 'SET_QUERY',
                     payload: e.target.value,
                  })
               }
            />
            <button
               onClick={() =>
                  dispatch({
                     type: 'SET_URL',
                     payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
                  })
               }
               disabled={state.loading}
               className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
               style={{
                  opacity: state.loading ? '0.25' : '1',
               }}
            >
               Search
            </button>
         </div>
         {state.loading && (
            <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
         )}
         {!state.loading && state.errorMessage && <p className="my-5 text-red-400">{state.errorMessage}</p>}
         <div className="flex flex-wrap gap-5">
            {!state.loading &&
               state.hits.length > 0 &&
               state.hits.map(
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

export default HackerNewsWithReducer;
