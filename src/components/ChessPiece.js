import React from 'react';
import './styles/ChessPiece.css';

const ChessPiece = ({ color, type }) => {
  return (
    <div className={`chess-piece ${color}`}>
      {color === 'black' ? <strong>{type}</strong> : type}
    </div>
  );
};

export default ChessPiece;
