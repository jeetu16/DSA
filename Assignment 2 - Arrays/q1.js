/*

    Question 1
    Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

    Example 1:
    Input: nums = [1,4,3,2]
    Output: 4

    Explanation: All possible pairings (ignoring the ordering of elements) are:

    1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
    2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
    3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
    So the maximum possible sum is 4

*/

// Solution: 

var maximizedSum =  (nums) => {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};

// T.C. : O(nlogn)
// S.C. : O(1)


const ans1 = maximizedSum([1, 4, 3, 2]);
const ans2 = maximizedSum([10,20,25,15,30]);

console.log(ans1); // 4
console.log(ans2); // 60



