// Question : Given an integer n, print all natural numbers from 1 to n. 
// Expected output Be like : 1 2 3 4 5 

// /**
//  * Recursively prints natural numbers from 1 to n, separated by a space.
//  * @param {number} n
//  */
// function printNumbers(n) {
//    let result = "";
// 
//    for(let i = 1;i <= n; i++){
//       result += i + " ";
//  }
// 
//  console.log(result.trim());   
// }
// 
// module.exports = { printNumbers };

// Question : Given an integer n, print all natural numbers starting from n down to 1.
// Expected out to be like : 5 4 3 2 1

// /**
//  * Recursively prints natural numbers from n to 1, separated by a space.
//  * @param {number} n
//  */
// function printNumbers(n) {
//  let result = "";
//  for(let i = n; i >= 1; i--){
//    result += i + " ";
//  }  
//  console.log(result.trim());
// }
// module.exports = { printNumbers };

// Question :Write a program that accepts an integer n and calculates the sum of the first n natural numbers. Natural numbers start from 1 and go up to n.

// /**
//  * Recursive function to calculate sum up to N
//  * @param {number} n
//  * @returns {number}
//  */
// function sumUpToN(n) {
//     let sum = 0;
//     for( i = 1;i <= n; i++){
//        sum += i;
//     }
//     return sum ;
// }
// 
// module.exports = { sumUpToN };

// Question :Write a program that accepts an integer n as input and calculates the factorial of n. The factorial of a non-negative integer n is the product of all positive integers less than or equal ton:n! =n x (n-1) x (n-2) x ... x 2 x 1.The factorial of 0 is defined as 1 -> 0! = 1.

// /**
//  * Recursive function to calculate factorial of a number
//  * @param {number} n
//  * @returns {number}
//  */
// function factorial(n) {;
//    let fact = 1; 
//    for(i = n ;i >= 1; i--){
//       fact *= i;
//    }  
//     return fact; 
// }
// 
// module.exports = { factorial };

// Question : Write a program that accepts an integer n as input and prints all the factors of n. A factor of a number is an integer that divides the number evenly without leaving a remainder. The program should print each factor on a single line, space-separated, in ascending order.

// function printFactors(n) {
//     let result = ""
//     for (i = 1;i <= n ; i++){
//       if( n % i === 0 ){
//         result += i + " ";
//     }
// }  
// console.log( result.trim()); 
// }
// 
// module.exports = { printFactors };

// Question : Write a program that accepts two integers start and end as input and calculates: 1. The sum of all even numbers within the range [start, end] (inclusive). 2. The sum of all odd numbers within the range [start, end] (inclusive). .. If start is greater than end, swap the values before calculating the sum.

// function sumEvenOddInRange(start, end) {
//     if(start > end){
//         temp = start;
//         start = end;
//         end = temp ;
//     }
// 
//     evenSum = 0;
//     oddSum = 0;
// 
//     for( i = start; i <= end; i++ ){
//         if( i % 2 === 0 ){
//             evenSum += i;
//         }
//         else{
//             oddSum += i;
//         }
//     }
//    return [evenSum , oddSum ] ;
// }
// 
// module.exports = { sumEvenOddInRange };