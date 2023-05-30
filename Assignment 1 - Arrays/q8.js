/*


    Q8. You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

    You are given an integer array nums representing the data status of this set after the error.

    Find the number that occurs twice and the number that is missing and return them in the form of an array.

    Example 1:
    Input: nums = [1,2,2,4]
    Output: [2,3]


*/

// Solution : 

const missingNumber = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i] === nums[i+1]) {
            return [nums[i], nums[i]+1]
        }
        
    }
}

// T.C. : O(n)
// S.C. : O(1)


const ans1 = missingNumber([1,2,2,4]);
const ans2 = missingNumber([1,1]);

console.log(ans1); // [2,3]
console.log(ans2); // [1,2]