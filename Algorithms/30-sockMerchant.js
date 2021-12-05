function sockMerchant(n, ar) {
  let socks = ar.reduce((total, sock) => {
    total[sock] = ++total[sock] || 1;
    return total;
  }, {});

  let pair = 0;

  Object.values(socks).forEach((sock) => {
    pair = pair + Math.floor(sock / 2);
  });

  return pair;
}
