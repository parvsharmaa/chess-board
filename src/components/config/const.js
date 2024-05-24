export const board = () => {
  const squares = Array(64).fill('');

  // fill pawns
  for (let i = 0; i < 16; i++) {
    squares[i] = { type: 'P', color: 'black' };
    squares[i + 48] = { type: 'P', color: 'white' };
  }

  // fill rook
  squares[0] = squares[7] = { type: 'R', color: 'black' };
  squares[56] = squares[63] = { type: 'R', color: 'white' };

  // fill knights
  squares[1] = squares[6] = { type: 'K', color: 'black' };
  squares[57] = squares[62] = { type: 'K', color: 'white' };

  /* 
    Please Note : Added below Pieces after the coding round  
  */

  // bishops
  squares[2] = squares[5] = { type: 'B', color: 'black' };
  squares[58] = squares[61] = { type: 'B', color: 'white' };

  //  queens
  squares[3] = { type: 'Q', color: 'black' };
  squares[59] = { type: 'Q', color: 'white' };

  //  kings
  squares[4] = { type: 'K', color: 'black' };
  squares[60] = { type: 'K', color: 'white' };

  return squares;
};
