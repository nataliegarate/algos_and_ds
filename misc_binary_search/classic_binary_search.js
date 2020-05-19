function binarySeach(arr, target) {
  let bottomIdx = 0;
  let topIdx = arr.length - 1;
  while (bottomIdx <= topIdx) {
    let midIdx = Math.floor((topIdx + bottomIdx) / 2);
    if (arr[midIdx] === target) {
      return midIdx;
    } else if (arr[midIdx] < target) {
      bottomIdx = midIdx + 1;
    } else if (arr[midIdx] > target) {
      topIdx = midIdx - 1;
    }
  }
  return -1;
}

console.log(binarySeach([1, 2, 3], 3));
console.log(binarySeach([1, 2, 3], 12));
console.log(binarySeach([1, 2, 3, 4], 4));
