function breakingRecords(scores) {
  let minimumScore = scores[0];
  let maximumScore = scores[0];
  let minimumScoreRecord = 0;
  let maximumScoreRecord = 0;

  scores.map((score) => {
    score < minimumScore
      ? ((minimumScore = score), (minimumScoreRecord += 1))
      : score > maximumScore
      ? ((maximumScore = score), (maximumScoreRecord += 1))
      : "";
  });
  return [maximumScoreRecord, minimumScoreRecord];
}
