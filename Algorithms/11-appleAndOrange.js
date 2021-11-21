function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let landedApples = 0;
  let landedOranges = 0;

  apples.map((apple) => {
    if (a + apple >= s && a + apple <= t) {
      landedApples += 1;
    }
  });

  oranges.map((orange) => {
    if (b + orange >= s && b + orange <= t) {
      landedApples += 1;
    }
  });

  console.log(landedApples);
  console.log(landedOranges);
}
