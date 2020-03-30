/*

                           []
0                [1]                   []
1          [12]        [1]        [2]       []
2      [123] [12]   [13] [1]   [23] [2]   [3] []

*/

function subsets(arr) {
  let res = [];
  function generateSubsets(nums, temp, index) {
    if (index === nums.length) {
      res.push(temp.slice());
      return;
    }
    temp.push(nums[index]);
    generateSubsets(nums, temp, index + 1);
    temp.pop();
    generateSubsets(nums, temp, index + 1);
  }
  generateSubsets(arr, [], 0);
  return res;
}

console.log(subsets([1, 2, 3]));
