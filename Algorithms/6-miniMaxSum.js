function miniMaxSum(arr) {
  let maxSum = 0;
  let minSum = 0;

  const areAllNumbersSame = arr[0] === arr[arr.length - 1] ? true : false;

  const calculateMaximumSum = (array) => {
    areAllNumbersSame
      ? array.slice(0, array.length - 1).map((number) => (maxSum += number))
      : array
          .sort()
          .filter((number) => number !== array[0])
          .map((number) => (maxSum += number));
  };

  const calculateMinimumSum = (array) => {
    areAllNumbersSame
      ? array.slice(0, array.length - 1).map((number) => (minSum += number))
      : array
          .sort()
          .filter((number) => number !== array[array.length - 1])
          .map((number) => (minSum += number));
  };

  calculateMinimumSum(arr);
  calculateMaximumSum(arr);

  console.log(minSum, maxSum);
}

miniMaxSum([5, 5, 5, 5, 5]);
