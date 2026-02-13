// Assingment of hashing

// You are given a string that contains only lowercase English letters and spaces. You're also given a mapping from characters to characters that defines how the original message was encoded. Your task is to decode the given message using the mapping. Each character in the message should be replaced with its corresponding mapped character. Spaces must remain unchanged. If a character is not present in the mapping, it should also remain unchanged

// class Solution {
//     decodeMessage(mapping, message) {
//         let result = "";
// 
//         for (const ch of message) {
//             if (ch === " ") {
//                 result += " ";
//             } else if (mapping[ch]) {
//                 result += mapping[ch];
//             } else {
//                 result += ch;
//             }
//         }
// 
//         return result;
//     }
// }
// 
// module.exports = Solution;

// You are given a collection of candies, where each candy is represented by an integer indicating its type. You are also given an integer k, representing the number of distinct candy types each child must receive. Each child must receive exactly k distinct candies. A candy can be given to only one child and cannot be reused. Your task is to determine the maximum number of children that can receive such a distribution. The distribution must satisfy both conditions: Every child receives exactly k distinct candy types. No candy is shared between children. If it is not possible to distribute candies under these rules, return 0.

// class Solution {
//     distributeCandies(n, k, candies) {
//         // Count frequency of each candy type
//         const freq = {};
//         for (const c of candies) {
//             freq[c] = (freq[c] || 0) + 1;
//         }
// 
//         // Convert counts to array
//         const counts = Object.values(freq);
// 
//         let children = 0;
// 
//         // Keep forming children while possible
//         while (true) {
//             // Select k types that still have candies
//             let used = 0;
// 
//             for (let i = 0; i < counts.length && used < k; i++) {
//                 if (counts[i] > 0) {
//                     counts[i]--;
//                     used++;
//                 }
//             }
// 
//             if (used < k) break; // not enough distinct types left
//             children++;
//         }
// 
//         return children;
//     }
// }
// 
// module.exports = Solution;

// You are given an array of strings and an integer k. A string is called distinct if it appears exactly once in the array. Return the k-th distinct string in the array. If there are fewer than k distinct strings, return "None".

// class Solution {
//     kthDistinct(arr, k) {
//         const freq = {};

//         // Count frequency
//         for (const str of arr) {
//             freq[str] = (freq[str] || 0) + 1;
//         }

//         // Find k-th distinct in original order
//         let count = 0;
//         for (const str of arr) {
//             if (freq[str] === 1) {
//                 count++;
//                 if (count === k) {
//                     return str;
//                 }
//             }
//         }

//         return "None";
//     }
// }

// module.exports = Solution;

// Given a string pattern and a space-separated string s, determine if s follows the same pattern. Here, following the pattern means that there is a one-to-one correspondence between characters in pattern and words in s: Each character in pattern should map to exactly one word in s. No two characters should map to the same word. Return true if s follows the pattern; otherwise, return false.

// class Solution {
//     wordPattern(pattern, s) {
//         const words = s.split(" ");

//         if (pattern.length !== words.length) return false;

//         const charToWord = {};
//         const wordToChar = {};

//         for (let i = 0; i < pattern.length; i++) {
//             const ch = pattern[i];
//             const word = words[i];

//             if (charToWord[ch] && charToWord[ch] !== word) {
//                 return false;
//             }

//             if (wordToChar[word] && wordToChar[word] !== ch) {
//                 return false;
//             }

//             charToWord[ch] = word;
//             wordToChar[word] = ch;
//         }

//         return true;
//     }
// }

// module.exports = Solution;


// You are given an array nums of size n containing numbers from 1 to n. However, due to a data error: One number is duplicated. One number is missing. Your task is to find the number that is duplicated and the number that is missing, and return them in this order: [duplicate, missing]

// class Solution {
//     findErrorNums(nums) {
//         const seen = new Set();
//         let duplicate = -1;

//         for (const num of nums) {
//             if (seen.has(num)) {
//                 duplicate = num;
//             }
//             seen.add(num);
//         }

//         let missing = -1;
//         for (let i = 1; i <= nums.length; i++) {
//             if (!seen.has(i)) {
//                 missing = i;
//                 break;
//             }
//         }

//         return [duplicate, missing];
//     }
// }

// module.exports = Solution;


