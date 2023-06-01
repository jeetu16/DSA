/*

    Question 2
    Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

    The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

    Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

    Example 1:
    Input: candyType = [1,1,2,2,3,3]
    Output: 3

    Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

*/

// Solution :

// Approach 1

// var distributeCandies = (candyType) => {
//     let differentCandy = 1;
//     candyType.sort((a, b) => a - b);
//     let currentCandy = candyType[0];

//     for (let i = 1; i < candyType.length; i++) {
//         if (currentCandy === candyType[i]) {
//             continue;
//         }
//         if (differentCandy === parseInt(candyType.length / 2)) {
//             return differentCandy
//         }
//         differentCandy += 1;
//         currentCandy = candyType[i];
//     }

//     return differentCandy
// }

// T.C. : O(nlogn)
// S.C. : O(1)



// Approach 2

var distributeCandies = (candyType) => {
    let differentCandy = 0;
    let candyMap = {}
    for (let i = 0; i < candyType.length; i++) {
        if (candyMap[candyType[i]]) {
            continue
        }
        if (differentCandy === parseInt(candyType.length / 2)) {
            return differentCandy;
        }
        differentCandy += 1;
        candyMap[candyType[i]] = 1;
    }

    return differentCandy
};

// T.C. : O(n)
// S.C. : O(n)

//

const ans1 = distributeCandies([6, 6, 6, 6]);
const ans2 = distributeCandies([1, 1, 2, 3]);
const ans3 = distributeCandies([1, 1, 2, 2, 3, 3]);

console.log(ans1); // 1
console.log(ans2); // 2
console.log(ans3); // 3


