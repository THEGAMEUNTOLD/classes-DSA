// You are given a string s containing lowercase English letters, the character "', and the character 'I'. The character 'l' appears in s in pairs. Every pair of 'I' characters denotes a segment of the string (between that pair) where "' characters should not be counted. Return the number of '*' characters in s that are not between a pair of 'l' characters.

// // helper.js (template)
// function countAsterisks(s) {
//   let count = 0 ;
//   let ignore = false;
// 
//   for(let ch of s){
//     if (ch === "|"){
//       ignore = !ignore;
//     }
//     else if(ch === "*" && !ignore){
//       count++
//     }
//   }
//   return count;
// 
// }
// module.exports = { countAsterisks };

// You are given a string s and a character letter. Return the percentage of characters in s that are equal to letter, rounded down to the nearest integer.

// class Solution {
//   /**
//    * @param {string} s
//    * @param {string} letter
//    * @returns {number}
//    */
//   percentageLetter(s, letter) {
//     let count = 0;
// 
//     // Count occurrences of the letter in the string
//     for (let char of s) {
//       if (char === letter) {
//         count++;
//       }
//     }
// 
//     // Calculate percentage and round down
//     let percentage = Math.floor((count / s.length) * 100);
//     return percentage;
//   }
// }
// 
// module.exports = { Solution };


// You are given a string s consisting only of characters 'a' and 'b'. Return true if every'a' appears before every 'b' in the string. Otherwise, return false.

// // helper.js
// function checkString(s) {
//     let seenB = false; // Flag to check if we have encountered a 'b'
// 
//     for (let char of s) {
//         if (char === 'b') {
//             seenB = true; // Mark that we've seen a 'b'
//         } else if (char === 'a' && seenB) {
//             // If we see 'a' after a 'b', return false
//             return false;
//         }
//     }
//    
//     return true; // All 'a's are before 'b's
// }
// 
// module.exports = { checkString };


// A password is said to be strong if it satisfies all the following criteria: . It has at least 8 characters. . It contains at least one lowercase letter. . It contains at least one uppercase letter. . It contains at least one digit. . It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+". . It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not). Given a string password, return true if it is a strong password. Otherwise, return false

// class Solution {
//   /**
//    * @param {string} password
//    * @return {boolean}
//    */
//   strongPasswordCheckerII(password) {
//     // Rule 1: At least 8 characters
//     if (password.length < 8) return false;
// 
//     // Initialize flags for each rule
//     let hasLower = false;
//     let hasUpper = false;
//     let hasDigit = false;
//     let hasSpecial = false;
// 
//     // Define special characters
//     const specialChars = "!@#$%^&*()-+";
// 
//     for (let i = 0; i < password.length; i++) {
//       const char = password[i];
// 
//       // Rule 6: No two same adjacent characters
//       if (i > 0 && char === password[i - 1]) return false;
// 
//       // Check for lowercase
//       if (char >= 'a' && char <= 'z') hasLower = true;
// 
//       // Check for uppercase
//       else if (char >= 'A' && char <= 'Z') hasUpper = true;
// 
//       // Check for digit
//       else if (char >= '0' && char <= '9') hasDigit = true;
// 
//       // Check for special character
//       else if (specialChars.includes(char)) hasSpecial = true;
//     }
// 
//     // Return true only if all conditions are satisfied
//     return hasLower && hasUpper && hasDigit && hasSpecial;
//   }
// }
// 
// module.exports = { Solution };

// You are given a string s consisting of only English letters. Return the greatest English letter (in terms of alphabetical order) that appears in both lowercase and uppercase in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// function greatestLetter(s) {
//   const lowerSet = new Set();
//   const upperSet = new Set();
// 
//   for (const char of s) {
//     if (char >= 'a' && char <= 'z') lowerSet.add(char);
//     else if (char >= 'A' && char <= 'Z') upperSet.add(char);
//   }
// 
//   for (let code = 90; code >= 65; code--) { 
//     const upperChar = String.fromCharCode(code);
//     const lowerChar = upperChar.toLowerCase();
//     if (upperSet.has(upperChar) && lowerSet.has(lowerChar)) {
//       return upperChar; 
//     }
//   }
// 
//   return ""; 
// }
// 
// module.exports = { greatestLetter };


// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter appears exactly twice. You are also given a 0-indexed integer array distance of length 26. Each letter in the alphabet is numbered from 0 to 25 ('a' -> 0, 'b' -> 1, ... , 'z' -> 25). In a well-spaced string, the number of letters between the two occurrences of the i-th letter must be exactly equal to distance[i]. Return true if s is a well-spaced string, otherwise return false.

// class Solution {
//   /**
//    * @param {string} s
//    * @param {number[]} distance
//    * @return {boolean}
//    */
//   checkDistances(s, distance) {
//     // Map to store first occurrence of each letter
//     const firstIndex = {};
// 
//     for (let i = 0; i < s.length; i++) {
//       const char = s[i];
//       const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
// 
//       if (firstIndex[char] === undefined) {
//         // First occurrence of the character
//         firstIndex[char] = i;
//       } else {
//         // Second occurrence: check the distance
//         const actualDistance = i - firstIndex[char] - 1;
//         if (actualDistance !== distance[idx]) {
//           return false; // Distance mismatch
//         }
//       }
//     }
// 
//     return true; // All distances match
//   }
// }
// 
// module.exports = Solution;

// You are given a string num representing a large integer. A good integer is a substring of num with length 3 that consists of the same digit repeated three times (e.g., "777" or "000"). Return the largest good integer as a string. If no such substring exists, return an empty string "".

// class Solution {
//   largestGoodInteger(num) {
//     let largest = "";
// 
//     for(let i = 0 ; i <= num.length - 3 ; i++){
//       let first = num[i];
//       let second = num[i + 1];
//       let third = num[i + 2];
// 
//       if(first === second && second === third){
//         let triple = first + second + third;
// 
//         if(triple > largest){
//           largest = triple;
//         }
//       }
//     }
//     return largest
//   }
// }
// 
// module.exports = Solution;

// You are given a string number representing a positive integer and a character digit. You can remove exactly one occurrence of digit from number. Return the resulting string after removing one occurrence of digit such that the resulting number is as large as possible. The test cases are generated such that digit is a character in number.

// class Solution {
//   removeDigit(number, digit) {
//     let lastIndex = -1;
// 
//     for(let i = 0 ; i < number.length ; i++){
//       if(number[i] === digit){
//         lastIndex = i;
// 
//         if(i + 1 < number.length && number[i + 1] > digit){
//           return number.slice(0,i) + number.slice(i + 1); 
//         }
//       }
//     }
//     return number.slice(0,lastIndex) + number.slice(lastIndex + 1);
//   }
// }
// 
// module.exports = { Solution };

// You said: You are given a string num consisting of digits. For every index i (0-indexed), check whether the digit i occurs exactly num[i] times in num. . If this condition holds for every index, return true. . Otherwise, return false.

// class Solution {
//     /**
//      * @param {string} num
//      * @return {boolean}
//      */
//     digitCount(num) {
//         const count = new Array(10).fill(0);

//         for(let ch of num){
//             count[ch - '0']++;
//         }

//         for(let i = 0 ; i < num.length ; i++ ){
//             if(count[i] !== Number(num[i])){
//                 return false;
//             } 
//         }
//         return true;
//     }
// }

// module.exports = { Solution };

// You are given a 0-indexed string array, where each element consists of lowercase English letters. In one operation, select any index such that and and are anagrams, and delete from the array. Repeat this operation until no more deletions can be made. Return the final array of words after all operations

// class Solution {
//     /**
//      * @param {string[]} words
//      * @return {string[]}
//      */
//     removeAnagrams(words) {
//         const result = [];
// 
//         const normalize = (word) =>
//             word.split('').sort().join('');
// 
//         for (const word of words) {
//             if (
//                 result.length === 0 ||
//                 normalize(word) !== normalize(result[result.length - 1])
//             ) {
//                 result.push(word);
//             }
//         }
// 
//         return result;
//     }
// }
// 
// module.exports = { Solution };


// You are given a 0-indexed string array, where each element consists of lowercase English letters. In one operation, select any index such that and and are anagrams, and delete from the array. Repeat this operation until no more deletions can be made. Return the final array of words after all operations

// Waiting for answer big was confusing


// You are given a string s representing a sentence. A sentence is a list of tokens separated by single spaces. Each token is either: . A word consisting of lowercase English letters, or . A positive number (digits only, no leading zeros) Return "true" if all the numbers in the sentence appear in strictly increasing order from left to right. Otherwise, return "false".

// class Solution {
//     /**
//      * @param {string} s
//      * @return {boolean}
//      */
//     areNumbersAscending(s) {
//         const tokens = s.split(" ");
//         let prev = -Infinity;
// 
//         for (const token of tokens) {
//             if (token[0] >= '0' && token[0] <= '9') {
//                 const num = Number(token);
//                 if (num <= prev) return false;
//                 prev = num;
//             }
//         }
// 
//         return true;
//     }
// }
// 
// module.exports = { Solution };




