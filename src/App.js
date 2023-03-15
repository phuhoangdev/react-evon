import "./App.scss";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";

const App = () => {
   return (
      <>
         <CardList>
            <Card secondary={true} />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </CardList>
      </>
   );
};

export default App;
