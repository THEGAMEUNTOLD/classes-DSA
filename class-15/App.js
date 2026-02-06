// Assignment of loop
// Question : Write a program to check whether a given number is a Harshad Number or not. A Harshad Number (or Niven Number) is a number that is divisible by the sum of its digits. For example, 18 is a Harshad number because 1+8 = 9, and 18 % 9 == 0.

// class Solution {
//     is_harshad(nStr) {
//         let OriginalNumber = nStr;
//         let sum = 0;
// 
//         while(nStr > 0){
//             sum += nStr % 10
//             nStr = Math.floor(nStr/10);
//         }
// 
//         if(OriginalNumber % sum == 0){
//             return "Harshad Number";
//         }
//         else{
//             return "Not Harshad Number"
//         }
//     }
// }
// 
// module.exports = Solution;

// Question : An Abundant Number is a number for which the sum of its proper divisors (divisors excluding the number itself) is greater than the number. Your task is to write a program to determine if a given number is an Abundant Number.

// class Solution {
//     is_abundant(n) {
//         let sum = 0;
// 
//     for (let i = 1; i <= n / 2; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }
// 
//     if (sum > n) {
//         return("Yes");
//     } else {
//        return("No");
//     }
// }
// }
// 
// module.exports = Solution;

// Question : Write a program to find and print all the prime factors of a given number. A prime factor is a factor that is a prime number. If the number is 0 or 1, print No prime factors.

// class Solution {
//     prime_factors(nStr) {
//         let n = Number(nStr);
// 
//         if (n === 0 || n === 1) {
//             return "No prime factors";
//         }
// 
//         let result = [];
// 
//         while (n % 2 === 0) {
//             result.push(2);
//             n = n / 2;
//         }
// 
//         for (let i = 3; i * i <= n; i += 2) {
//             while (n % i === 0) {
//                 result.push(i);
//                 n = n / i;
//             }
//         }
// 
//         if (n > 1) {
//             result.push(n);
//         }
// 
//         return result.join("\n");
//     }
// }
// 
// module.exports = Solution;


// Question :Write a Java program that checks if a given number is a Neon number. A Neon number is a number where the sum of the digits of the square of the number is equal to the number itself.

// class Solution {
//     is_neon(nStr) {
//         // Convert input string to number
//         let n = Number(nStr);
// 
//         // Square the number
//         let square = n * n;
// 
//         // Calculate sum of digits of the square
//         let sum = 0;
//         while (square > 0) {
//             sum += square % 10;
//             square = Math.floor(square / 10);
//         }
// 
//         // Check if sum equals original number
//         if (sum === n) {
//             return "Yes";
//         } else {
//             return "No";
//         }
//     }
// }
// 
// module.exports = Solution;

// Question : You are given an integer as input. Your task is to check whether the given number is an Armstrong number or not. An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. For example, 153 = 13 +53+33 = 153 -> Armstrong 9474 = 94 + 44 + 74 + 44 = 9474 -> Armstrong If the number is Armstrong, print "Armstrong", otherwise print "Not Armstrong".

//  class Solution {
//     is_armstrong(nStr) {
// 
//         let n = Number(nStr);
//         let temp = n;
// 
//         let digits = nStr.length;
// 
//         let sum = 0;
// 
//         while (temp > 0) {
//             let digit = temp % 10;
//             sum += Math.pow(digit, digits);
//             temp = Math.floor(temp / 10);
//         }
// 
//         if (sum === n) {
//             return "Armstrong";
//         } else {
//             return "Not Armstrong";
//         }
//     }
// }
// 
// module.exports = Solution;
