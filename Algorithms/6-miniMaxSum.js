function miniMaxSum(arr) {
  const sortedNumbers = arr.sort((a, b) => b - a);
  const summedNumbers =
    sortedNumbers[0] == sortedNumbers[arr.length - 1]
      ? sortedNumbers.map((number) => {
          let sum = 0;
          sortedNumbers.slice(0, sortedNumbers.length - 1).forEach((num) => {
            sum += num;
          });
          return sum;
        })
      : sortedNumbers.map((number) => {
          let sum = 0;
          sortedNumbers.forEach((num) => {
            num !== number && (sum += num);
          });
          return sum;
        });

  console.log(summedNumbers[0], summedNumbers[summedNumbers.length - 1]);
}

miniMaxSum([1, 2, 3, 4, 5]);
