function twoNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b);
  let results = [];
  let num1Idx = 0;
  let num2Idx = array.length - 1;
  while (array[num1Idx] < array[num2Idx]) {
    console.log(array[num1Idx], array[num2Idx]);
    if (array[num1Idx] + array[num2Idx] === targetSum) {
      results.push([array[num1Idx], array[num2Idx]]);
      num1Idx++;
      num2Idx--;
    } else if (array[num1Idx] + array[num2Idx] < targetSum) {
      num1Idx++;
    } else {
      num2Idx--;
    }
  }
  return results;
}

// console.log(twoNumberSum([4, 6], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
