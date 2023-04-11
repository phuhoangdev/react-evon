import { useReducer, useState } from 'react';
import Board from './Board';
import './GameStyles.scss';
import { calculateWinner } from '../../helpers';

const initialState = {
   board: Array(9).fill(null),
   xIsNext: true,
};

const gameReducer = (state, action) => {
   switch (action.type) {
      case 'CLICK': {
         const { board, xIsNext } = state;
         const { index, winner } = action.payload;
         if (winner || board[index]) return state;
         const nextState = JSON.parse(JSON.stringify(state));
         nextState.board[index] = xIsNext ? 'X' : 'O';
         nextState.xIsNext = !xIsNext;

         return nextState;
      }
      case 'RESET': {
         const nextState = JSON.parse(JSON.stringify(state));
         nextState.board = Array(9).fill(null);
         nextState.xIsNext = true;

         return nextState;
      }
      default:
         break;
   }
   return state;
};

const Game = () => {
   // const [board, setBoard] = useState(Array(9).fill(null));
   // const [xIsNext, setXIsNext] = useState(true);
   // const [state, setState] = useState({
   //    board: Array(9).fill(null),
   //    xIsNext: true,
   // });
   // useReducer
   const [state, dispatch] = useReducer(gameReducer, initialState);
   const winner = calculateWinner(state.board);
   const handleClick = (index) => {
      // const boardCopy = [...state.board];
      // if (winner || boardCopy[index]) return;
      dispatch({
         type: 'CLICK',
         payload: {
            index,
            winner,
         },
      });
      // boardCopy[index] = state.xIsNext ? 'X' : 'O';
      // setBoard(boardCopy);
      // setXIsNext((xIsNext) => !xIsNext);
      // setState({
      //    ...state,
      //    board: boardCopy,
      //    xIsNext: !state.xIsNext,
      // });
   };

   const handleResetGame = (index) => {
      // setBoard(Array(9).fill(null));
      // setXIsNext(true);
      // setState({
      //    board: Array(9).fill(null),
      //    xIsNext: true,
      // });
      dispatch({
         type: 'RESET',
      });
   };

   return (
      <div>
         <Board cells={state.board} onClick={handleClick} />
         {winner && <div className="game-winner">Winner is {winner}</div>}
         <button className="p-3 ml-6 bg-sky-700 text-white rounded-lg" onClick={handleResetGame}>
            Reset Game
         </button>
      </div>
   );
};

export default Game;
