const isValidMove = (from, to, squares) => {
  const piece = squares[from];
  const move = squares[to];

  // coordinates to move
  const [fromX, fromY] = [from % 8, Math.floor(from / 8)];
  const [toX, toY] = [to % 8, Math.floor(to / 8)];
  const direction = piece.color === 'black' ? 1 : -1;

  if (piece.type === 'P') {
    // move forward
    if (fromX === toX) {
      if (fromY + direction === toY && move === '') {
        return true;
      }
      // initial double step move
      if (
        (fromY === 1 && piece.color === 'black') ||
        (fromY === 6 && piece.color === 'white')
      ) {
        if (
          fromY + 2 * direction === toY &&
          move === '' &&
          squares[from + 8 * direction] === ''
        ) {
          return true;
        }
      }
    }

    // can capture diagonally
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

export { isValidMove };
