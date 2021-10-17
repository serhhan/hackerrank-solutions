function birthdayCakeCandles(candles) {
  let tallestCandleCount = 0;
  const maxHeight = Math.max(...candles);

  candles.forEach((candle) => candle === maxHeight && tallestCandleCount++);

  return tallestCandleCount;
}
