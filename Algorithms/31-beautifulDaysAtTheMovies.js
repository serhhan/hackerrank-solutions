function beautifulDays(i, j, k) {
  let beautifulDaysCount = 0;

  const reversedNum = (num) =>
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

  for (let h = i; h <= j; h++) {
    let result = (h - reversedNum(h)) / k;
    if (Number.isInteger(result)) {
      beautifulDaysCount++;
    }
  }

  return beautifulDaysCount;
}
