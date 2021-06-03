import React  from 'react';
import {useState} from 'react';
import { calculateWinner } from './../component/calculateWinner';

import * as containerStyles from "./container.module.css"
import Board from './../component/Board';



const Game =()=>{
const [board, setBoard] = useState(Array(9).fill(null));
const [xIsNext, setXisNext] = useState(true);
const winner = calculateWinner(board);
const handleClick = (i) => {
	const boardCopy = [...board];
	// If user click an occupied square or if game is won, return
	if (winner || boardCopy[i]) { return};
	// Put an X or an O in the clicked square
	boardCopy[i] = xIsNext ? "X" : "O";
	setBoard(boardCopy);
	setXisNext(!xIsNext);

};

return(<>
    <Board squares={board} onClick={handleClick} />
    
    <div>
      <p>
        {winner ? "winner: "+ winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      
    </div>
    <button disabled={!winner} className={containerStyles.button} onClick={()=>window.location.reload()}>Play again</button>
  </>)
}

export default Game;