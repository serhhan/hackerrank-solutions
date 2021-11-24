function getMoneySpent(keyboards, drives, b) {
  let cost = -1;
  let budget = b;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let total = keyboards[i] + drives[j];
      if (total <= budget) {
        if (total > cost) {
          cost = total;
        }
      }
    }
  }

  return cost;
}
