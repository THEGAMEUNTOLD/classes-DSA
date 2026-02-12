// You are given a string s consisting of lowercase English letters. Return the first letter that appears twice in the string when scanned from left to right.

// /**
//  * Find the first character that appears twice in a string.
//  * @param {string} s - The input string
//  * @return {string} - The first repeated character
//  */
// function repeatedCharacter(s) {
//     const seen = new Set();

//     for (const ch of s) {
//         if (seen.has(ch)) {
//             return ch;
//         }
//         seen.add(ch);
//     }

//     return ""; // in case no character repeats
// }

// module.exports = { repeatedCharacter };

// Given an array of integers nums and an integer target, your task is to find two distinct indices in the array such that the numbers at these indices add up to target. You are guaranteed that there is exactly one solution, and you cannot use the same element twice.

// /**
//  * Find the two indices in the array such that their sum equals the target.
//  * @param {number[]} nums - The array of numbers.
//  * @param {number} target - The target sum.
//  * @return {number[]} - An array containing the two indices.
//  */
// function twoSum(nums, target) {
//     const map = new Map(); // number -> index
// 
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
// 
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
// 
//         map.set(nums[i], i);
//     }
// }
// 
// module.exports = { twoSum };

// You are given two arrays: . names, where names[i] is the name of the i-th person. . heights, where heights[i] is the height of the i-th person. Return the array of names sorted in descending order by height.

// /**
//  * Sort people by height in descending order.
//  * @param {string[]} names - Array of names
//  * @param {number[]} heights - Array of heights
//  * @return {string[]} - Sorted names by descending height
//  */
// function sortPeople(names, heights) {
//     return names
//         .map((name, i) => [name, heights[i]])   // pair name with height
//         .sort((a, b) => b[1] - a[1])            // sort by height descending
//         .map(pair => pair[0]);                  // extract sorted names
// }

// module.exports = { sortPeople };


// 