import './App.scss';
// import HackerNews from './components/news/HackerNews';
import HackerNewsWithReducer from './components/news/HackerNewsWithReducer';
// import Photos from './components/photo/Photos';
// import CardStyled from './components/card/Card';
// import CardStyled2 from './components/card/CardStyled2';
// import CardList from './components/card/CardList';
// import { GlobalStyles } from './GlobalStyles';
// import { ThemeProvider } from 'styled-components';
// import CardTailwind from './components/card/CardTailwind';
// import Game from './components/tictactoe/Game';

// const theme = {
//    colors: {
//       blue: '#2979ff',
//    },
//    black: '#333333',
// };

const App = () => {
   return (
      //Styled Component
      // <ThemeProvider theme={theme}>
      //    <GlobalStyles />
      //    <CardList>
      //       <CardStyled2 secondary={true} />
      //    </CardList>
      // </ThemeProvider>

      //Tailwind
      // <CardList>
      //    <CardTailwind primary={true} fontSize="text-xl" />
      // </CardList>

      // <Game />

      // <Photos />
      // <HackerNews />
      <HackerNewsWithReducer />
   );
};

export default App;
