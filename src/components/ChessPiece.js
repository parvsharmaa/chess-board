import React from 'react';
import styled from 'styled-components';

const Piece = styled.div`
  font-size: 50px;
  margin: 25px;
  color: ${(props) => (props.color === 'black' ? 'black' : 'blue')};
`;

const ChessPiece = ({ color, type }) => {
  return (
    <Piece color={color}>
      {color === 'black' ? <strong>{type}</strong> : type}
    </Piece>
  );
};

export default ChessPiece;
