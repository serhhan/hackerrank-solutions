function viralAdvertising(n) {
  let shared = 5;
  let cumilative = 0;
  for (let i = 0; i < n; i++) {
    let liked = Math.floor(shared / 2);
    cumilative = cumilative + liked;
    shared = liked * 3;
  }
  return cumilative;
}
