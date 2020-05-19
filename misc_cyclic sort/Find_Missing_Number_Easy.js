function find_missing_number(nums) {
    let i = 0;
    const n = nums.length;
    while (i < n) {
      j = nums[i];
      if (nums[i] < n && nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1;
      }
          console.log(nums)
  
    }
  
    // find the first number missing from its index, that will be our required number
    for (i = 0; i < n; i++) {
      if (nums[i] !== i) {
        return i;
      }
    }
  
    return n;
  }
  
  //NOTE: the largest one will end up in the place of the missing numberx
  console.log(find_missing_number([4, 0, 3, 1]));