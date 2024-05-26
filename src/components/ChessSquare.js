import React from 'react';
import ChessPiece from './ChessPiece';
import styled from 'styled-components';

const Square = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isDark ? 'grey' : 'white')};
  border: 1px solid black;
`;

const ChessSquare = ({ isDark, piece, onClick }) => {
  return (
    <Square isDark={isDark} onClick={onClick}>
      {piece && <ChessPiece type={piece.type} color={piece.color} />}
    </Square>
  );
};

export default ChessSquare;
