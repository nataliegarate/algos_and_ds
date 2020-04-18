// Given an array of integers, rotate the array by NN elements where NN is an integer:

// For positive values of NN, perform a right rotation. clockwise
// For negative values of NN, perform a left rotation. counterclockwise
/*

[1,2,3]


[3, 2, 1]

[2,3,1]

[2,3,1]

+2  -1

[3,1,2]

[3,2,1]
[3,1,2]
+1 -2

array.length - prevly negative value;


if rotataion number is more than array.length -1 
rotation number % array.length = rotation number

rotate 0 to rotation num -1, rotation num - arr.length
if was negative convert to positive



1 - get rotations to be less than array.length
2 - rotate the whole array
3 - rotate just 0 - rotation point
4 - rotate rotation point to end

*/

let rotateArray = function (arr, n) {
  let negative = false;
  if (n < 0) {
    negative = true;
    n *= -1;
  }
  if (n > arr.length) {
    n = n % arr.length;
  }
  if (negative) {
    n = arr.length - n;
  }

  reverseArr(arr, 0, arr.length - 1);
  console.log("reversed", arr);
  reverseArr(arr, 0, n - 1);
  console.log("half reversed", arr);

  reverseArr(arr, n, arr.length - 1);
  return arr;
};

function reverseArr(a, start, end) {
  while (start < end) {
    [a[start], a[end]] = [a[end], a[start]];
    start++;
    end--;
  }
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 4));

//[3,4,1,2]
