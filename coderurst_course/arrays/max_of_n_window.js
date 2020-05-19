let findMaxSlidingWindow = function (arr, window_size) {
  var result = [];
  let indexes = [0];
  for (let i = 1; i < window_size; i++) {
    if (arr[i] > arr[indexes[indexes.length - 1]]) {
      indexes.pop();
      indexes.push(i);
    } else {
      indexes.push(i);
    }
  }
  result.push(arr[indexes[0]]);

  for (let j = window_size; j < arr.length; j++) {
    console.log(arr[j], j);
    if (indexes[0] <= j - window_size) {
      indexes.shift();
    }
    while (indexes.length && arr[j] > arr[indexes[indexes.length - 1]]) {
      console.log(indexes);
      indexes.pop();
    }
    indexes.push(j);
    result.push(arr[indexes[0]]);
  }
  return result;
};
console.log(findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 4));
//    0  1  2  3  4  5  6  7  8

// Brute force
// let findMaxSlidingWindow = function (arr, window_size) {
//   var result = [];
//   let current = [];
//   for (let i = 0; i < window_size; i++) {
//     current.push(arr[i]);
//   }

//   for (let j = window_size; j < arr.length; j++) {
//     max = Math.max(...current);
//     result.push(max);
//     current.shift();
//     current.push(arr[j]);
//   }
//   max = Math.max(...current);
//   result.push(max);

//   return result;
// };
