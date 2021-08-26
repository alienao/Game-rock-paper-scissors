const PlayerCompWinn = (PlayerOne, PlayerTwo) => {
  if (PlayerOne === PlayerTwo) {
    return 'same';
  }
  switch (PlayerOne) {
    case 'Rock':
      if (PlayerTwo === 'Scissors') {
        return PlayerOne;
      } else {
        return PlayerTwo;
      }
    case 'Paper':
      if (PlayerTwo === 'Rock') {
        return PlayerOne;
      } else {
        return PlayerTwo;
      }
    case 'Scissors':
      if (PlayerTwo === 'Paper') {
        return PlayerOne;
      } else {
        return PlayerTwo;
      }
    default:
  }
};

export default PlayerCompWinn;
