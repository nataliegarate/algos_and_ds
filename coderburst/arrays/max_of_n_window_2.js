// [-4,2,-5,3,6]
//  0 1  2 3  4
// 4-3
let findMaxSlidingWindow = function (arr, window_size) {
  let results = [];
  let temp = [0];
  for (let i = 1; i < window_size; i++) {
    while (temp.length && arr[temp[temp.length - 1]] < arr[i]) {
      temp.pop();
    }
    temp.push(i);
  }
  results.push(arr[temp[0]]);

  for (let j = window_size; j < arr.length; j++) {
    if (temp[0] <= j - window_size) {
      temp.shift();
    }
    while (temp.length && arr[temp[temp.length - 1]] < arr[j]) {
      temp.pop();
    }
    temp.push(j);
    results.push(arr[temp[0]]);
  }
  return results;
};

console.log(findMaxSlidingWindow([-4, 2, -5, 3, 6], 3));

/*

3

[-4,2,-5,3,6]

[2,3,6]



[2,-5]
[6]

[2,3,6]
*/
