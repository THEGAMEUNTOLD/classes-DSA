// # Loop problems level-2

// Question : Write a program that accepts two integers, a and b, as input and calculates the value of a raised to the power of b (a^b). For example, if a = 2 and b = 3, the result is 8 (since 2^3 = 8).

// function calculatePower(a, b) {
//     return a**b;
// }
// 
// module.exports = { calculatePower };

// Question : A number is called a strong number if the sum of the factorial of its digits is equal to the number itself. Write a program that accepts a number and checks if it is a strong number. . If n is a strong number, print "Yes". . Otherwise, print "No".

// function isStrongNumber(n) {
//     let original = n;
//     let sum = 0;

//     function factorial(num) {
//         let fact = 1;
//         for (let i = 1; i <= num; i++) {
//             fact *= i;
//         }
//         return fact;
//     }

//     while (n > 0) {
//         let digit = n % 10;
//         sum += factorial(digit);
//         n = Math.floor(n / 10);
//     }

//     if (sum === original) {
//         return "Yes";
//     } else {
//         return "No";
//     }
// }

// module.exports = { isStrongNumber };


// Question : Write a program to check whether a number is equal to 50, less than 50, or greater than 50 and print an appropriate message

// let x = 50;

// if (x <= 50) {
//     if (x === 50) {
//         console.log("x is 50");
//     } else {
//         console.log("x is less than 50");
//     }
// } else {
//     console.log("x is greater than 50");
// }

// Question : Write a JavaScript program that prints numbers from 1 to 3 using a while loop and stops the loop using break.

// let x = 1;
// while (true) {
//     console.log(x);
//     x++;
//     if (x > 3) break;
// }

