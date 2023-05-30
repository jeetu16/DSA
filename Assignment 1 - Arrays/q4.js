/*
    Q4. You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

    Increment the large integer by one and return the resulting array of digits.

    Example 1:
    Input: digits = [1,2,3]
    Output: [1,2,4]

    Explanation: The array represents the integer 123.

    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].

*/

// Solution :

var plusOne = function (digits) {

    for (let lastIndex = digits.length - 1; lastIndex >= 0; lastIndex--) {
        if (digits[lastIndex] + 1 < 10) {
            digits[lastIndex] = digits[lastIndex] + 1;
            return digits;
        } else {
            digits[lastIndex] = 0;
        }
    }

    digits[digits.length] = 0;
    digits[0] = 1;

    return digits;
};


// T.C. : O(n)
// T.C. : O(1)


const ans1 = plusOne([1, 2, 3]);
const ans2 = plusOne([9]);

console.log(ans1);  // [1,2,4]
console.log(ans2);  // [1,0]








