// function twoNumberSum(array, targetSum) {
//   array = array.sort((a, b) => a - b);
//   let results = [];
//   let num1Idx = 0;
//   let num2Idx = array.length - 1;
//   while (array[num1Idx] < array[num2Idx]) {
//     console.log(array[num1Idx], array[num2Idx]);
//     if (array[num1Idx] + array[num2Idx] === targetSum) {
//       results.push([array[num1Idx], array[num2Idx]]);
//       num1Idx++;
//       num2Idx--;
//     } else if (array[num1Idx] + array[num2Idx] < targetSum) {
//       num1Idx++;
//     } else {
//       num2Idx--;
//     }
//   }
//   return results;
// }

function twoNumberSum(array, targetSum) {
  let results = [];
  let numMap = {};
  array.forEach((num) => (numMap[num] = num));
  for (let i = 0; i < array.length; i++) {
    let neededNumber = targetSum - array[i];
    if (
      typeof numMap[neededNumber] === "number" &&
      numMap[neededNumber] !== array[i]
    ) {
      numMap[neededNumber] = "used";
      numMap[array[i]] = "used";
      results.push(neededNumber, array[i]);
    }
  }
  return results;
}

// console.log(twoNumberSum([4, 6], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
