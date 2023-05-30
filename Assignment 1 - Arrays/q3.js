/*

    Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
    Input: nums = [1,3,5,6], target = 5

    Output: 2

*/

// Solution : 


// approach 1 : 
// var searchInsert = function(nums, target) {
//     if(target<nums[0]) {
//         return 0;
//     } 
//     if(target > nums[nums.length-1]) {
//         return nums.length;
//     }
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i]===target) {
//             return i;
//         } else if(target > nums[i] && target < nums[i+1]) {
//             return i+1;
//         }
//     }
// };

// T.C. : O(n)
// S.C. : O(1)


// apporach 2:
var searchInsert = function (nums, target) {

    let first = 0;
    let last = nums.length - 1;

    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    while (first != last) {

        let mid = Math.floor((first + last) / 2);

        if (nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            if (target > nums[mid - 1])
                return mid;
            last = mid - 1;
        } else {
            if (target < nums[mid + 1])
                return mid + 1;
            first = mid + 1;
        }
    }

    return first
}

// T.C. : O(log n)
// S.C. : O(1)



const ans1 = searchInsert([1, 2, 5, 6], 1);
const ans2 = searchInsert([1, 3, 5, 6, 8], 9);
const ans3 = searchInsert([1, 3, 5, 6], 5);
const ans4 = searchInsert([2,4,6,8,10,12,14], 7)

console.log(ans1); // 0
console.log(ans2); // 5
console.log(ans3); // 2
console.log(ans4); // 3

