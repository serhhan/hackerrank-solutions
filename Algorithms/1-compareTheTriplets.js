function compareTriplets(a, b) {
  const score = [0, 0];

  for (let i = 0; i < a.length; i++) {
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
  }
  console.log(score);
  return score;
}

compareTriplets([0, 0, 0], [6, 0, 3]);
