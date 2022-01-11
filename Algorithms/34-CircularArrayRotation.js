function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }

  let arr = [];

  for (let i = 0; i < queries.length; i++) {
    arr.push(a[queries[i]]);
  }

  return arr;
}
