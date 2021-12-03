function jumpingOnClouds(c) {
  let minimumJump = 0;

  for (let i = 0; i < c.length - 1; i += 2) {
    if (c[i] === 1) {
      i -= 1;
    }
    minimumJump++;
  }

  return minimumJump;
}
