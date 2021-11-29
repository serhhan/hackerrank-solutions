function hurdleRace(k, height) {
  const max = Math.max(...height);
  const result = k > max ? 0 : Math.abs(max - k);
  return result;
}
