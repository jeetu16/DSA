/*

    Question 3
    We define a harmonious array as an array where the difference between its maximum value
    and its minimum value is exactly 1.

    Given an integer array nums, return the length of its longest harmonious subsequence
    among all its possible subsequences.

    A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

    Example 1:
    Input: nums = [1,3,2,2,5,2,3,7]
    Output: 5

    Explanation: The longest harmonious subsequence is [3,2,2,2,3].

*/

// Solution : 

const harmonious = (nums) => {
    let map = {};
    let maxSubSequence = 0;

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    for (const [key, value] of Object.entries(map)) {
        if (map[key - 1]) {
            maxSubSequence = Math.max(maxSubSequence, map[key - 1] + value);
        }
    }

    return maxSubSequence;
}

// T.C. : O(n)
// S.C. : O(n)

const ans1 = harmonious([1, 3, 2, 2, 5, 2, 3, 7])
const ans2 = harmonious([1, 2, 3, 4]);
const ans3 = harmonious([1, 1, 1, 1]);


console.log(ans1); // 5
console.log(ans2); // 2
console.log(ans3); // 0