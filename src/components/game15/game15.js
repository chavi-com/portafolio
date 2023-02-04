import React, { useState, useEffect } from 'react';
import './game15.css';

const useGame15 = () => {
  const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]);
  const [moves, setMoves] = useState(0);
  const [blankIndex, setBlankIndex] = useState(15);
  const [win, setWin] = useState(false);

  const shuffleBoard = () => {
    let newBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    let currentIndex = newBoard.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newBoard[currentIndex];
      newBoard[currentIndex] = newBoard[randomIndex];
      newBoard[randomIndex] = temporaryValue;
    }
    setBoard(newBoard);
    setBlankIndex(newBoard.indexOf(0));
    setMoves(0);
    setWin(false);
  };

  const handleClick = (i) => {
    if (Math.abs(i - blankIndex) === 4 || (blankIndex % 4 !== 3 && i - blankIndex === 1) || (blankIndex % 4 !== 0 && i - blankIndex === -1)) {
      const newBoard = [...board];
      newBoard[blankIndex] = board[i];
      newBoard[i] = 0;
      setBoard(newBoard);
      setBlankIndex(i);
      setMoves(moves + 1);
      checkWin();
    }
  };

  const checkWin = () => {
    if (moves > 120) {
      setWin(false);
    } else {
      for (let i = 0; i < 15; i++) {
        if (board[i] !== i + 1) {
          return;
        }
      }
      setWin(true);
    }
  };

  useEffect(() => {
    if (win) {
      alert("FELICIDADES HAS GANADO!!");
    } else if (moves > 120) {
      alert("HAS PERDIDO");
    }
  }, [win, moves]);

  return { board, handleClick, win, moves, shuffleBoard };
};

const Game15 = () => {
    const game15 = useGame15();
    useEffect(() => {
      game15.shuffleBoard();
    }, []);
    return (
        <div>
            <button className='btnbtn' onClick={game15.shuffleBoard}>Reiniciar</button>
            <h4>Movimientos: {game15.moves}</h4>

        
            <div className="game15-container">

                {game15.board.map((n,i) => (
                <div key={i} onClick={()=> game15.handleClick(i)} className={`number ${n ? '' : 'blank'}`}>
                    {n || ''}
                </div>
                ))}
            </div>
        </div>
    )
  }
  export default Game15;