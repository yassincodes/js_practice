function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Math.sqrt(sq) % 1 == 0) {
      return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)
    } else {
      return -1;
    }
  }