// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function MoveZeros2(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[x],arr[i]] = [arr[i],arr[x]];
      x = x + 1;
    }
  }
  return arr;
}

const nums = [0, 1, 0, 3, 12, 4, 8, 7, 4, 99, 0, 7, 0, 45, 1, 18, 0];

const result = MoveZeros2(nums);

console.log(result);