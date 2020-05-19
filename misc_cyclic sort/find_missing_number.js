function find_duplicate (nums){
    for (let i = 0; i < nums.length; i++){
        while(nums[i] !== i+1){
            let j = nums[i];
            if (nums[i] === nums[j]){
                return nums[i];
            } 
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    return false;
}

find_duplicate([1,4,4,3,2])