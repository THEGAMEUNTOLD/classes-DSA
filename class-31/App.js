// Question : You are given two strings jewels and stones. Each character in jewels represents a type of jewel, and each character in stones represents a stone you have. You need to count how many stones are also jewels. Note: Letters are case-sensitive, so 'a' is different from 'A'.

// /**
//  * Count how many stones are jewels.
//  * @param {string} jewels - A string representing types of jewels
//  * @param {string} stones - A string representing the stones you have
//  * @return {number} - Count of stones that are jewels
//  */
// function countJewelsInStones(jewels, stones) {
//     const jewelSet = new Set(jewels);
// 
//     let count = 0;
// 
//     for (const stone of stones) {
//         if (jewelSet.has(stone)) {
//             count++;
//         }
//     }
//     return count;
// }
// 
// module.exports = { countJewelsInStones };


// A pangram is a sentence where every letter of the English alphabet appears at least once. Given a string sentence, check if it is a pangram.

// /**
//  * Check if a sentence is a pangram.
//  * @param {string} sentence - The input string to check
//  * @return {boolean} - true if the sentence is a pangram, false otherwise
//  */
// function isPangram(sentence) {
//     const seen = new Set();

//     for (const char of sentence.toLowerCase()) {
//         if (char >= 'a' && char <= 'z') {
//             seen.add(char);
//         }
//     }

//     return seen.size === 26;
// }

// module.exports = { isPangram };


// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers. Given a number n, determine whether it is a happy number.


// /**
//  * Determine whether a number is a happy number.
//  * @param {number} n - The input number
//  * @return {boolean} - true if the number is a happy number, false otherwise
//  */
// function isHappy(n) {
//     const seen = new Set();

//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n);
//         n = sumOfSquares(n);
//     }

//     return n === 1;
// }

// function sumOfSquares(num) {
//     let sum = 0;

//     while (num > 0) {
//         const digit = num % 10;
//         sum += digit * digit;
//         num = Math.floor(num / 10);
//     }

//     return sum;
// }

// module.exports = { isHappy };
