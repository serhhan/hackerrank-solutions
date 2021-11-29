function climbingLeaderboard(ranked, player) {
  const ranks = [...new Set(ranked)];
  let result = [];
  let lastRank = ranks.length;

  for (let i = 0; i < player.length; i++) {
    while (player[i] >= ranks[lastRank - 1] && lastRank > 0) {
      ranks.pop();
      lastRank--;
    }
    result.push(lastRank + 1);
  }
  return result;
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 8, 25, 50, 120]);
