function catAndMouse(x, y, z) {
  const catAdistance = Math.abs(x - z);
  const catBdistance = Math.abs(y - z);

  const result =
    catAdistance === catBdistance
      ? "Mouse C"
      : catAdistance < catBdistance
      ? "Cat A"
      : "Cat B";

  return result;
}
