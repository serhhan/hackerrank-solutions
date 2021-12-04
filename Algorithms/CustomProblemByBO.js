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

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target === array[middleIndex]) {
      return console.log(middleIndex);
    }

    if (target > array[middleIndex]) {
      startIndex = middleIndex + 1;
    }

    if (target < array[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      console.log("no same");
    }
  }

  console.log("no result");
};

const climbingLeaderboard = (ranked, player) => {
  const ranksRaw = findSameElements(ranked);
  const ranks = [];

  for (let i = 0; i < ranksRaw.length; i++) {
    ranks.push(ranksRaw[i].value);
  }

  for (let i = 0; i < player.length; i++) {
    for (let j = 0; j < ranks.length; i++) {}
  }
};

binarySearch(sortElements([100, 50, 40, 20, 10]), 5);
