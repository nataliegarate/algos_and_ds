function n_subsets(nums, n) {
  let results = [];
  let temp = [];

  function helper(nums, n, idx) {
    if (temp.length === n) {
      results.push(temp.slice());
    }
    for (let i = idx; i < nums.length; i++) {
      temp.push(nums[i]);
      helper(nums, n, i + 1);
      temp.pop();
    }
  }
  helper(numys, n, 0);
  return results;
}
let numys = [1, 2, 3];
console.log(n_subsets(numys, 2));
