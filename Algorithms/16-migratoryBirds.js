function migratoryBirds(arr) {
  let birds = arr.reduce((total, bird) => {
    total[bird] = ++total[bird] || 1;
    return total;
  }, {});

  const mostSeenCount = Math.max(...Object.values(birds));
  const mostSeenBird = Object.keys(birds).find(
    (key) => birds[key] === mostSeenCount
  );

  return mostSeenBird;
}
