import React, { useState } from 'react';
import ChessSquare from './ChessSquare';
import { board } from '../services/const';
import { isValidMove } from '../services/moves';
import styled from 'styled-components';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 100px);
  grid-template-rows: repeat(8, 100px);
  border: 3px solid black;
`;

const Chessboard = () => {
  const [squares, setSquares] = useState(board());
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleSquareClick = (index) => {
    if (selectedSquare === null) {
      if (squares[index] !== '') {
        setSelectedSquare(index);
      }
    } else {
      const newSquares = squares.slice();
      if (isValidMove(selectedSquare, index, squares)) {
        newSquares[index] = newSquares[selectedSquare];
        newSquares[selectedSquare] = '';
        setSquares(newSquares);
      }
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

  return <Board>{Array.from({ length: 64 }, (_, i) => renderSquare(i))}</Board>;
};

export default Chessboard;
