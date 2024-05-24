import React, { useState } from 'react';
import ChessSquare from './ChessSquare';
import './styles/Chessboard.css';
import { board } from './config/const';

const Chessboard = () => {
  const [squares, setSquares] = useState(board());
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleSquareClick = (index) => {
    // set the square
    if (selectedSquare === null) {
      if (squares[index] === null) {
        setSelectedSquare(index);
      }
    } else {
      const newSquares = squares.slice();
      newSquares[index] = newSquares[selectedSquare];
      newSquares[selectedSquare] = null;
      setSquares(newSquares);
      setSelectedSquare(null);
    }
  };

  const renderSquare = (i) => {
    const isDark = ((i % 8) + Math.floor(i / 8)) % 2 === 1;
    const piece = squares[i];

    return (
      <ChessSquare
        key={i}
        isDark={isDark}
        piece={piece}
        onClick={() => handleSquareClick(i)}
      />
    );
  };

  /* validates the moves for pieces */
  const isValidMove = (from, to, squares) => {
    const piece = squares[from];
    const move = squares[to];

    // coordinates to move
    const fromX = from % 8;
    const fromY = Math.floor(from / 8);
    const toX = to % 8;
    const toY = Math.floor(to / 8);
    const direction = piece.color === 'black' ? -1 : 1;

    if (piece.type === 'P') {
      // forward
      if (fromX === toX) {
        if (fromY === toY + direction && move === null) {
          return true;
        }
      }

      if (
        Math.abs(toX - fromX) === 1 &&
        toY === fromY + direction &&
        move &&
        move.color !== piece.color
      ) {
        return true;
      }
    }

    return false;
  };

  return (
    <div className='chessboard'>
      {Array.from({ length: 64 }, (_, i) => renderSquare(i))}
    </div>
  );
};

export default Chessboard;
