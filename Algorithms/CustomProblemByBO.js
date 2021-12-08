//merge sort array
const sortElements = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...sortElements(leftArr), pivot, ...sortElements(rightArr)];
};

//return count of elements as array of objects without using for loop
const findSameElements = (arr) => {
  const rawArray = sortElements(arr);
  const counts = [];
  let firstIndex = 0;
  let count = 1;

  while (firstIndex < rawArray.length) {
    if (rawArray[firstIndex] === rawArray[firstIndex + 1]) {
      count++;
      firstIndex++;
    } else {
      counts.push({
        value: rawArray[firstIndex],
        quantity: count,
      });
      count = 1;
      firstIndex++;
    }
  }

  return counts;
};

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let rankOrder = array.length;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target === array[middleIndex]) {
      return console.log(middleIndex);
      rankOrder = middleIndex;
    }

    if (target > array[middleIndex]) {
      startIndex = middleIndex + 1;
      rankOrder = middleIndex + 1;
    }

    if (target < array[middleIndex]) {
      endIndex = middleIndex - 1;
      rankOrder = middleIndex - 1;
    }
  }
  const result = array.length - rankOrder === 0 ? 1 : array.length - rankOrder;

  return result;
};

const climbingLeaderboard = (ranked, player) => {
  const ranksRaw = findSameElements(ranked);
  const ranks = [];
  const playersRank = [];

  for (let i = 0; i < ranksRaw.length; i++) {
    ranks.push(ranksRaw[i].value);
  }

  for (let i = 0; i < player.length; i++) {
    playersRank.push(binarySearch(ranked, player[i]));
  }

  console.log(playersRank);
};

climbingLeaderboard([30, 60, 75, 80, 90, 110], [10, 40, 77, 95, 120]);
