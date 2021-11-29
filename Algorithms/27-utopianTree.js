function utopianTree(n) {
  let cycle = 1;
  let height = 1;

  while (cycle <= n) {
    if (cycle % 2 !== 0) {
      height *= 2;
    } else {
      height++;
    }
    cycle++;
  }

  return height;
}
