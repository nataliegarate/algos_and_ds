var threeSum = function (nums) {
  let results = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let cur = nums[i];
    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 < p2) {
      if (cur + nums[p1] + nums[p2] === 0) {
        results.push([cur, nums[p1], nums[p2]]);
        p2 = updateP2(p2, nums, nums[p2]);
        p1 = updateP1(p1, nums, nums[p1]);
      } else if (cur + nums[p1] + nums[p2] > 0) {
        p2 = updateP2(p2, nums, nums[p2]);
      } else {
        p1 = updateP1(p1, nums, nums[p1]);
      }
    }
  }
  return results;
};

function updateP2(p2, nums, old) {
  let proposed = p2 - 1;
  while (proposed > -1 && nums[proposed] === old) {
    proposed -= 1;
  }
  return proposed;
}

function updateP1(p1, nums, old) {
  let proposed = p1 + 1;
  while (proposed < nums.length && nums[proposed] === old) {
    proposed += 1;
  }
  return proposed;
}
