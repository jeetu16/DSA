/*

    Q5. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

    Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]

    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

// Solution : 

// Aproach 1 :

// var merge = function (nums1, m, nums2, n) {
//     let ansArr = [];
//     let i = 0;
//     let j = 0;
//     let k = 0;

//     while (j < n && nums1[i] != 0) {
//         if (nums1[i] < nums2[j]) {
//             ansArr.push(nums1[i]);
//             k += 1;
//             i += 1;
//         } else {
//             ansArr.push(nums2[j]);
//             k += 1;
//             j += 1;
//         }
//     }

//     while (nums1[i] != 0) {
//         ansArr.push(nums1[i]);
//         k += 1;
//         i += 1;
//     }

//     while (j<m) {
//         ansArr.push(nums2[j]);
//         k+=1;
//         j+=1;
//     }

//     return ansArr;
// };

// T.C. : O(m+n)
// S.C. : O(m+n)

// Aproach 2 : 

let merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    return nums1;
}

// T.C. : O(n)
// S.C. : O(1)

const ans1 = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
const ans2 = merge([0], 0, [1], 1)

console.log(ans1); // [1,2,2,3,5,6]
console.log(ans2); // [1]