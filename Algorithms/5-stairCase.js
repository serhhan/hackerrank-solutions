function staircase(n) {
  let output = "";

  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
      output += " "; //tersten sayıyor boşlu koyuyor
    }

    for (let h = 1; h <= i; h++) {
      output += "#";
    }

    output += "\n";
  }

  console.log(output);
}
