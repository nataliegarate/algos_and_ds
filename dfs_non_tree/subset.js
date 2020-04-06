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

/*

Input Size: N = 3;
Nodes Visited: 2^3 nodes
Time Complexity: 0 (2^N) 

Space Complexity: height.... 3 on stack
and at most 3 in temp array.....
  


0                1

1       12                 2

2   123     13          23     3

3 when things get added

note: photo does not reflect popping


  0    1
  1  12  2
  2 things get pushed at this level
  */

console.log(subsets([1, 2, 3]));
