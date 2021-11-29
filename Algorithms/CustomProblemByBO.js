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

  return console.log(counts);
};

findSameElements([10, 10, 10, 10, 50, 20, -20]);
