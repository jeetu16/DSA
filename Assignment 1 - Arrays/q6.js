/*

    Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    Example 1:
    Input: nums = [1,2,3,1]

    Output: true

*/



// Solution :

// Approach 1

// const containsDuplicate = function (nums) {
//     let ans = false;
//     if (nums.length === 2 && nums[0] === nums[1]) {
//         ans = true;
//     }
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 ans = true;
//                 break
//             }
//             if (ans) {
//                 break
//             }
//         }
//     }

//     return ans;
// };

// T.C. : O(n^2)
// S.C. : O(1)


// Approach 2


const containsDuplicate = function(nums) {
    let map = {};
    let ans = false;

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            ans = true
            break;
        }
        map[nums[i]] = 1;
    }

    return ans
}

// T.C. : O(n)
// S.C. : O(n)


const ans1 = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
const ans2 = containsDuplicate([1, 2, 3, 4])


console.log(ans1) // true
console.log(ans2) // false