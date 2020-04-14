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

// Brute force 2? nope, sorting defeats the purpose
// let findMaxSlidingWindow = function (arr, window_size) {
//   var result = [];
//   let current = [];
//   arr = arr.sort((a, b) => a - b);
//   console.log(arr);
//   for (let i = 0; i < window_size; i++) {
//     current.push(arr[i]);
//   }

//   for (let j = window_size; j < arr.length; j++) {
//     max = current[current.length - 1];
//     result.push(max);
//     current.shift();
//     current.push(arr[j]);
//   }
//   max = current[current.length - 1];
//   result.push(max);

//   return result;
// };

console.log(findMaxSlidingWindow([1, 2, 3, 4, 3, 2, 1, 2, 5], 5));

// exp 4,4,4,4,5	act 4,4,3,2,5
//TO BE CONTINUED
