let findLowIndex = function (arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low + 1 < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key && arr[mid - 1] !== key) {
      return mid;
    }
    if (key <= arr[mid]) {
      high = mid;
    } else {
      low = mid;
    }
  }
  if (arr[low] === key && arr[low - 1] !== key) {
    return low;
  }
  if (arr[high] === key && arr[high - 1] !== key) {
    return high;
  }
  return -1;
};

let findHighIndex = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    console.log(arr[mid], mid);

    if (arr[mid] === key && arr[mid + 1] !== key) {
      console.log(arr[mid + 1]);
      return mid;
    } else if (key < arr[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (arr[end] === key && arr[end + 1] !== key) {
    return end;
  }
  if (arr[start] === key && arr[start + 1] !== key) {
    return start;
  }
  return -1;
};

let ex = [1, 6, 6, 6, 6];

// console.log(findLowIndex(ex, 1));
console.log(findHighIndex(ex, 8));
