const twoSum = (nums, target) => {
  if (!nums.length && target < 0) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }

  return false;
};

console.log(twoSum([2, 4, 7, 9], 5));
