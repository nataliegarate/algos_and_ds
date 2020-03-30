/*

                           
0                [1]                   []
1          [12]        [1]        [2]       []
2      [123] [12]   [13] [1]   [23] [2]   [3] []

*/

function subsets(arr) {
  let res = [];
  function generateSubsets(nums, temp, index) {
    if (index === nums.length) {
      res.push(temp.slice()); // must make copy or else will be passing in reference which is a NO
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

/*

Input Size: N = 3;
Nodes Visited: 2^3 nodes
Time Complexity: 0 (2^N) 

Space Complexity: height.... 3
*/

console.log(subsets([1, 2, 3]));
