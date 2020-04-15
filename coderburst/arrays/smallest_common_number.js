//increase the ones that are smaller than the current largest

// my original
// let findLeastCommonNumber = function (a, b, c) {
//   let current = Math.max(a[0], b[0], c[0]);
//   let idx1 = 0;
//   let idx2 = 0;
//   let idx3 = 0;
//   while (idx1 < a.length && idx2 < b.length && idx3 < c.length) {
//     console.log(idx1, idx2, idx3);
//     if (a[idx1] === b[idx2] && a[idx1] === c[idx3]) {
//       return current;
//     }
//     if (a[idx1] < current) {
//       idx1++;
//     }
//     if (b[idx2] < current) {
//       idx2++;
//     }
//     if (c[idx3] < current) {
//       idx3++;
//     }
//     if (a[idx1] > current) {
//       current = a[idx1];
//     }
//     if (a[idx2] > current) {
//       current = b[idx2];
//     }
//     if (c[idx3] > current) {
//       current = c[idx3];
//     }
//   }
//   return -1;
// };

// console.log(
//   findLeastCommonNumber(
//     [1, 4, 6, 7, 8, 10, 14],
//     [1, 4, 5, 6, 7, 8, 50],
//     [0, 6, 7, 8, 10, 25, 30, 40]
//   )
// );
// console.log(
//   findLeastCommonNumber(
//     [1, 5, 6, 7, 17, 20],
//     [3, 4, 7, 9, 12, 16, 50],
//     [5, 6, 7, 10, 16, 25]
//   )
// );

//better solution
let findLeastCommonNumber = function (a, b, c) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    // Finding the smallest common number
    if (a[i] === b[j] && b[j] === c[k]) {
      return a[i];
    }

    // Let's increment the iterator
    // for the smallest value.

    if (a[i] <= b[j] && a[i] <= c[k]) {
      i++;
    } else if (b[j] <= a[i] && b[j] <= c[k]) {
      j++;
    } else if (c[k] <= a[i] && c[k] <= b[j]) {
      k++;
    }
  }

  return -1;
};
