function getTotalX(a, b) {
  let validCount = 0;

  for (let i = 1; i <= 100; i++) {
    if (a.every((aNum) => i % aNum == 0)) {
      if (b.every((bNum) => bNum % i == 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}
