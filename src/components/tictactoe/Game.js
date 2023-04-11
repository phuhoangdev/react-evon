import { useState } from 'react';
import Board from './Board';
import './GameStyles.scss';
import { calculateWinner } from '../../helpers';

const Game = () => {
   // const [board, setBoard] = useState(Array(9).fill(null));
   // const [xIsNext, setXIsNext] = useState(true);
   const [state, setState] = useState({
      board: Array(9).fill(null),
      xIsNext: true,
   });
   const winner = calculateWinner(state.board);
   const handleClick = (index) => {
      const boardCopy = [...state.board];
      if (winner || boardCopy[index]) return;
      boardCopy[index] = state.xIsNext ? 'X' : 'O';
      // setBoard(boardCopy);
      // setXIsNext((xIsNext) => !xIsNext);
      setState({
         ...state,
         board: boardCopy,
         xIsNext: !state.xIsNext,
      });
   };

   const handleResetGame = () => {
      // setBoard(Array(9).fill(null));
      // setXIsNext(true);
      setState({
         board: Array(9).fill(null),
         xIsNext: true,
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
