let arr = [5, 7, 1, 2, 8, 4, 3];
/*

alternative sort and two pointers
[1,2,3,4,5,7,8]
 
*/

let findSumOfTwo = function (A, val) {
  let numMap = {};
  A.forEach((num) => (numMap[num] = num));
  for (let i = 0; i < A.length; i++) {
    let potencial = val - A[i];
    if (typeof numMap[potencial] === "number") {
      return true;
    }
  }
  return false;
};
