function birthday(s, d, m) {
  const array = s;
  const sumLength = m;
  const sumGoal = d;
  let divideWaysCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (i + (sumLength - 1) > array.length) {
      break;
    }

    let total = 0;
    let index = i;

    for (let j = 0; j < sumLength; j++) {
      total += array[index + j];
    }

    if (total === sumGoal) {
      divideWaysCount += 1;
    }
  }

  return divideWaysCount;
}

birthday([1, 2, 1, 3, 2], 3, 2);
