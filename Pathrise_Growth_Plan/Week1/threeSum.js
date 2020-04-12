// Problem: Triplets with Zero Sum - Given an Array of Distinct Elements

function threeSum(arr) {
  let results = [];
  let targetSum = 0;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let num1 = arr[i];
    let num2Idx = i + 1;
    let num3Idx = arr.length - 1;
    while (arr[num2Idx] < arr[num3Idx]) {
      let currentSum = num1 + arr[num2Idx] + arr[num3Idx];
      if (currentSum === targetSum) {
        results.push([num1, arr[num2Idx], arr[num3Idx]]);
        num2Idx++;
        num3Idx--;
      } else if (currentSum < targetSum) {
        num2Idx++;
      } else {
        num3Idx--;
      }
    }
  }
  return results;
}

console.log(threeSum([-4, -10, 0, 1, 4]));
