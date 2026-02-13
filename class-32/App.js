// You are given an array of integers. Your task is to find and print the frequency of each element in the array in the order of their first appearance. Each output line should contain the element followed by its frequency, separated by a space.

// class Solution {
//     findFrequencies(arr) {
//         const freq = new Map();

//         for (const num of arr) {
//             freq.set(num, (freq.get(num) || 0) + 1);
//         }

//         const seen = new Set();
//         const result = [];

//         for (const num of arr) {
//             if (!seen.has(num)) {
//                 result.push(num + " " + freq.get(num));
//                 seen.add(num);
//             }
//         }

//         return result.join("\n");
//     }
// }

// module.exports = Solution;

// You are given an array of integers. Your task is to find the sum of all elements that appear exactly once in the array. For example, in the array [1, 2, 3, 2], only 1 and 3 appear once. So, the output will be 1+ 3 = 4.

// class Solution {
//     sumOfUnique(nums) {
//         const freq = new Map();
// 
//         // count frequency
//         for (const ch of nums) {
//             freq.set(ch, (freq.get(ch) || 0) + 1);
//         }
// 
//         let sum = 0;
// 
//         // sum elements that appear once
//         for (const [num, count] of freq) {
//             if (count === 1) {
//                 sum += Number(num);
//             }
//         }
// 
//         return sum;
//     }
// }
// 
// module.exports = Solution;

// Given an array of integers, find the most frequent even element. If there are multiple even elements with the same highest frequency, return the smallest one. If there are no even elements, return-1.

// class Solution {
//     mostFrequentEven(nums) {
//         const freq = new Map();
// 
//         // count only even numbers
//         for (const ch of nums) {
//             const num = Number(ch);
//             if (num % 2 === 0) {
//                 freq.set(num, (freq.get(num) || 0) + 1);
//             }
//         }
// 
//         if (freq.size === 0) return -1;
// 
//         let bestNum = -1;
//  
//         let maxFreq = 0;
// 
//         for (const [num, count] of freq) {
//             if (count > maxFreq || (count === maxFreq && num < bestNum)) {
//                 maxFreq = count;
//                 bestNum = num;
//             }
//         }
// 
//         return bestNum;
//     }
// }
// 
// module.exports = Solution;
