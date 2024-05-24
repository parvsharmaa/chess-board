import React from 'react';
import './styles/ChessSquare.css';
import ChessPiece from './ChessPiece';

const ChessSquare = ({ isDark, piece, onClick }) => {
  return (
    <div
      className={`chess-square ${isDark ? 'dark' : 'light'}`}
      onClick={onClick}
    >
      {piece && <ChessPiece type={piece.type} color={piece.color} />}
    </div>
  );
};

export default ChessSquare;
