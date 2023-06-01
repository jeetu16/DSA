/*

    Question 5
    Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

    Example 1:
    Input: nums = [1,2,3]
    Output: 6

*/

// Solution: 

const maxProduct = (nums) => {
    
    nums.sort((a, b) => b - a)
    let product =  Math.max(nums[0] * nums[1] * nums[2], nums[nums.length - 1] * nums[nums.length - 2] * nums[0])
    
    return product;

}


const ans1 = maxProduct([1, 2, 3]);
const ans2 = maxProduct([1, 2, 3, 4]);
const ans3 = maxProduct([-1, -2, -3]);

console.log(ans1);  // 6
console.log(ans2);  // 24
console.log(ans3);  // -6