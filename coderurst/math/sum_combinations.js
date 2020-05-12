let printAllSum = function (target) {
  //TODO: Write - Your - Code
  let nums = [];
  let results = [];
  for (let i = 1; i < target; i++) {
    nums.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    let curSum = nums[i];
    let p = i;
    let curArr = [nums[i]];
    while (p < nums.length) {
      if (curSum === target) {
        results.push(curArr.slice());
        curSum -= curArr.pop();
        curSum -= curArr.pop();
        p++;
      } else if (curSum < target) {
        curSum += nums[p];
        curArr.push(nums[p]);
      } else {
        curSum -= curArr.pop();
        curSum -= curArr.pop();
        p++;
      }
    }
  }
  return results;
};

console.log(printAllSum(5));
