function pickingNumbers(a) {
  let array = a.sort((a, b) => a - b);

  let length = 0;
  while (array.length > 0) {
    let n = array[0];
    array.shift();
    let temp = 1;

    for (let j = 0; j < array.length; j++) {
      if (array[j] === n || array[j] === n - 1 || array[j] === n + 1) {
        temp++;
      } else {
        break;
      }

      if (temp > length) {
        length = temp;
      }
    }
  }

  return length;
}
