function miniMaxSum(arr) {
  const sortedNumbers = arr.sort((a, b) => b - a);

  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (i < sortedNumbers.length - 1) {
      maxSum += sortedNumbers[i];
    }

    if (i > 0 && i < sortedNumbers.length) {
      minSum += sortedNumbers[i];
    }
  }

  console.log(`${minSum} ${maxSum}`);
}
