import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
     console.log(data);
     return (
          <div>
               {/* {data.map((item) => (
                    <div key={item}>{item}</div>
               ))} */}
          </div>
     );
};

export default withLoading(FetchingData, "https://jsonplaceholder.typicode.com/posts");
