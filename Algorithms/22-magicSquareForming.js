function formingMagicSquare(s) {
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = 45;

  for (let i = 0; i < 8; i++) {
    let total = 0;
    for (let j = 0; j < 3; j++) {
      for (let h = 0; h < 3; h++) {
        total += Math.abs(s[j][h] - magicSquares[i][j][h]);
      }
    }
    if (total < minCost) {
      minCost = total;
    }
  }

  console.log(minCost);
}
