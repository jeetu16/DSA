/*

    Q7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

    Note that you must do this in-place without making a copy of the array.

    Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

*/

// Solution

const moveZeroes = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; i < nums.length; j++) {
                if ( nums[j] !==0 ) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break
                }
            }
        }
    }
    return nums
};


const ans1 = moveZeroes([0, 1, 0, 3, 12]);

console.log(ans1);
