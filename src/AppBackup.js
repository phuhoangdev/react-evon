import { ErrorBoundary } from 'react-error-boundary';
import './App.scss';
import Tooltip from './components/tooltip/Tooltip';

// import ModalApp from './components/modal/ModalApp';
// import HackerNews from './components/news/HackerNews';
// import HackerNewsWithReducer from './components/news/HackerNewsWithReducer';
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

function Fallback({ error, resetErrorBoundary }) {
   return (
      <div role="alert">
         <p>Something went wrong:</p>
         <pre style={{ color: 'red' }}>{error.message}</pre>
      </div>
   );
}

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
      // <HackerNewsWithReducer />

      // <ModalApp />
      <ErrorBoundary FallbackComponent={Fallback}>
         <div className="p-16 mt-16 ml-16">
            <Tooltip text="Hover me">This is a tooltip content</Tooltip>
         </div>
      </ErrorBoundary>
   );
};

export default App;
