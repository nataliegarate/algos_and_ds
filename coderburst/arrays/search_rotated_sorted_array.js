// Search a Rotated Array
// Search for a given number in a sorted array that has been rotated by some arbitrary number.

//6
//[5,6,7,1,2,3,4]

let binarySearchRotated = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[start] < arr[mid]) {
      if (key >= arr[start] && key < arr[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    } else if (arr[mid] < arr[end]) {
      if (key > arr[mid] && key <= arr[end]) {
        start = mid;
      } else {
        end = mid;
      }
    }
  }
  if (arr[start] === key) {
    return start;
  }
  if (arr[end] === key) {
    return end;
  }
  return -1;
};

console.log(binarySearchRotated([4, 5, 6, 1, 2, 3], 3));
