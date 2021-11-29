function designerPdfViewer(h, word) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let wordHeights = [],
    tallestValue = 0;

  for (let i = 0; i < word.length; i++) {
    let index = alphabet.indexOf(word[i]);
    wordHeights.push(h[index]);
  }

  tallestValue = Math.max(...wordHeights);
  return word.length * tallestValue;
}
