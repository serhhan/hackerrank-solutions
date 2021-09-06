function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let neutral = 0;

  arr.map((number) =>
    Math.sign(number) == 1
      ? positive++
      : Math.sign(number) == -1
      ? negative++
      : neutral++
  );
  positive = positive / arr.length;
  negative = negative / arr.length;
  neutral = neutral / arr.length;

  return console.log("", positive, "\n", negative, "\n", neutral);
}
