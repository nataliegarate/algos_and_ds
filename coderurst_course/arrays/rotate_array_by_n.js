let rotateArray = function (arr, n) {
  let negative = false;
  if (n < 0) {
    n = n * -1;
    negative = true;
  }
  if (n > arr.length - 1) {
    n = n % arr.length;
  }
  if (negative) {
    n = arr.length - n;
  }
  arr = arr.reverse();
  arr1 = arr.slice(0, n).reverse();
  arr2 = arr.slice(n, arr.length).reverse();
  return [...arr1, ...arr2];
};
//NOTE USE HELPER FUNCTION TO REVERSE AND NOT SURE EXTRA SPACE;
console.log(rotateArray([1, 2, 3, 4], 3));
//[4, 1, 2, 3] -3 or 1

/* [1 2 3 4]
   [2 3 4 1]
positive values- right - back to front
negative values- left - front to back


1) get workable rotation number

Positive:
n % arr.length 
7 % 4 = 1 R 3
3 is how many spots to rotate


Negative: -9 % 4 = -2 R -1
make num positive
same as: 4- 1

2) reverse whole array

3) reverse  from 0 to ( workablenum - 1)

4) reverse workable num to arr.length

*/
