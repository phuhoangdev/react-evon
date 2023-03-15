import "./App.scss";
import Card from "./components/card/Card";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
   return (
      <>
         <GlobalStyles />
         <CardList>
            <Card2 secondary={true} />
         </CardList>
      </>
   );
};

export default App;
