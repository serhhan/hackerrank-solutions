function miniMaxSum(arr) {
  const summedNumbers = arr.map((number) => {
    let sum = 0;
    arr.forEach((num) => {
      num != number && (sum += num);
    });
    return sum;
  });

  summedNumbers.sort((a, b) => a - b);

  console.log(summedNumbers[0], summedNumbers[summedNumbers.length - 1]);
}
