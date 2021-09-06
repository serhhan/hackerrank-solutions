function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  let difference = 0;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][arr.length - 1 - i];
  }

  difference = Math.abs(primaryDiagonal - secondaryDiagonal);

  return difference;
}
