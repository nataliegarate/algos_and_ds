let binarySearch = function (a, key) {
  let low = 0;
  let high = a.length - 1;
  while (low + 1 < high) {
    let mid = Math.floor((low + high) / 2);
    console.log(a[mid]);
    if (a[mid] === key) {
      return mid;
    } else if (key < a[mid]) {
      high = mid;
    } else {
      low = mid;
    }
  }
  if (a[low] === key) {
    return low;
  }
  if (a[high] === key) {
    return high;
  }
  return -1;
};

// Recursion
// let binarySearch = function (a, key, low = 0, high = a.length - 1) {
//     if (!(low + 1 < high)) {
//         if (a[low] === key) {
//             return low;
//         }
//         if (a[high] === key) {
//             return high;
//         }
//         return -1;
//     }
//     let mid = Math.floor((low + high) / 2);
//     if (key < a[mid]) {
//         return binarySearch(a, key, low, mid);
//     } else {
//         return binarySearch(a, key, mid, high);
//     }
// };
