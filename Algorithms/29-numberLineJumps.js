function kangaroo(x1, v1, x2, v2) {
  let firstKangaroo = x1;
  let secondKangaroo = x2;
  for (let i = 0; i < 10000; i++) {
    firstKangaroo += v1;
    secondKangaroo += v2;

    if (firstKangaroo === secondKangaroo) {
      return "YES";
    }
  }

  return "NO";
}
