function aVeryBigSum(ar) {
  let sum = 0;
  ar.map((element) => (sum += element));
  return sum;
}
