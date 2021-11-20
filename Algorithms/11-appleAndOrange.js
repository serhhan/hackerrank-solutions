function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let landedApples = 0;
  let landedOranges = 0;

  for (let i = 0; i < apples.length; i++) {
    let landPoint = a + apples[i];
    if (landPoint >= s && landPoint <= t) {
      landedApples += 1;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    let landPoint = b + oranges[i];
    if (landPoint >= s && landPoint <= t) {
      landedOranges += 1;
    }
  }

  console.log(landedApples);
  console.log(landedOranges);
}
