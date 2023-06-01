/*

    Question 4
    You have a long flowerbed in which some of the plots are planted, and some are not.
    However, flowers cannot be planted in adjacent plots.
    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

    Example 1:
    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true

*/

// Solution: 

const flowerPlanted = (nums, n) => {
    for (let i = 0; i < nums.length; ++i) {
        if ((nums[i] === 0) && (i === 0 || nums[i - 1] === 0) && (i === nums.length - 1 || nums[i + 1] === 0)) {
            nums[i] = 1;
            n--;
        }
    }
    return n <= 0;
}


// T.C. : O(n)
// S.C. : O(1)

const ans1 = flowerPlanted([1, 0, 0, 0, 1],1);
const ans2 = flowerPlanted([1, 0, 0, 0, 1],2);

console.log(ans1); // true
console.log(ans2); // false