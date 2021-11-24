function pageCount(n, p) {
  let count = 0;

  if (n === p) {
    return 0;
  } else if (p <= Math.floor(n / 2)) {
    for (let i = 1; i < n; i += 2) {
      if (p > i) {
        count += 1;
      }
    }
    return count;
  } else if (p > Math.floor(n / 2)) {
    if (n % 2 != 0) {
      n -= 1;
    }

    for (let j = n; j >= 0; j -= 2) {
      if (p < j) {
        count += 1;
      }
    }
    return count;
  }
}
console.log(pageCount(62, 5));
