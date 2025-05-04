import React, { useState, useEffect } from 'react';
import './App.css';

const initialBoard = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameMode, setGameMode] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isHome, setIsHome] = useState(true);

  const handleClick = index => {
    if (board[index] || winner || (gameMode === 'pvc' && !xIsNext)) return;

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const checkWinner = board => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.every(cell => cell) ? 'Draw' : null;
  };

  useEffect(() => {
    const win = checkWinner(board);
    if (win) {
      setWinner(win);
    } else if (gameMode === 'pvc' && !xIsNext) {
      const timeout = setTimeout(() => {
        const emptyIndices = board
          .map((val, i) => (val === null ? i : null))
          .filter(i => i !== null);
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        if (randomIndex !== undefined) {
          const newBoard = board.slice();
          newBoard[randomIndex] = 'O';
          setBoard(newBoard);
          setXIsNext(true);
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [board, xIsNext, gameMode]);

  const resetGame = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setWinner(null);
  };

  const goHome = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setWinner(null);
    setGameMode(null);
    setIsHome(true);
  };

  if (isHome) {
    return (
      <div className="mode-selection">
        <h2>Select Game Mode</h2>
        <button
          onClick={() => {
            setGameMode('pvp');
            setIsHome(false);
            resetGame();
          }}
        >
          Player vs Player
        </button>
        <button
          onClick={() => {
            setGameMode('pvc');
            setIsHome(false);
            resetGame();
          }}
        >
          Player vs Computer
        </button>
      </div>
    );
  }

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <button className="home-button" onClick={goHome}>
        Home
      </button>
      {winner ? (
        <div className="end-screen">
          <h2>{winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="status">Next: {xIsNext ? 'X' : 'O'}</div>
          <div className="board">
            {board.map((value, index) => (
              <div className="square" key={index} onClick={() => handleClick(index)}>
                {value}
              </div>
            ))}
          </div>
          <button onClick={resetGame}>Restart</button>
        </>
      )}
    </div>
  );
}

export default App;
