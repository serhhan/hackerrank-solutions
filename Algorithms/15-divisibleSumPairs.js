function divisibleSumPairs(n, k, ar) {
  const array = ar;
  const length = n;
  const divisible = k;
  let divisibleSumPairs = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((array[i] + array[j]) % divisible === 0) {
        divisibleSumPairs++;
      }
    }
  }
  return divisibleSumPairs;
}
