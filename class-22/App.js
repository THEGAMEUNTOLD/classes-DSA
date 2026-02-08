// You are given a string. Your task is to print each character of thestring on a new line in the same order as it appears.

// function printEachChar(str) {
//     for(let i = 0 ; i < str.length ; i++){
//         console.log(str[i]);
//     }
// }

// module.exports = { printEachChar };

// You are given a string. Your task is to print the string in reverse

// /**
//  * @param {string} str
//  * @return {string}
//  */
// function reverseString(str) {
//     let result = "";
// 
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
// 
//     return result;
// }
// 
// module.exports = { reverseString };

// You are given T test cases. For each test case, you are given a string s. Your task is to check whether the given string is a palindrome using an in-place approach with constant space complexity. A palindrome is a string that reads the same forwards and backwards. If it is a palindrome, print "Yes", otherwise print "No".

// /**
//  * @param {string} str
//  * @return {string}
//  */
// function isPalindromeInPlace(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return "No";
//         }
//         left++;
//         right--;
//     }

//     return "Yes";
// }

// module.exports = { isPalindromeInPlace };



