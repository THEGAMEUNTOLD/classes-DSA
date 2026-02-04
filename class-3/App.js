// Question Accept two numbers and write a program to find and return the greatest of the two numbers.

// function findGreatest(a, b) {
//   if (a > b) {
//        return a ;
//     }
//     else {
//        return b ;
//     }
// }

// module.exports = { findGreatest };

// Write a program that takes an integer as input and checks whether the number is even or odd. . If the number is even, return "Even". . If the number is odd, return "Odd".

// function checkEvenOrOdd(num) {
//     if (num % 2 == 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
    
// }

// module.exports = { checkEvenOrOdd };

// Write a program that takes a user's age and name as input and checks whether the user is a valid voter. . A user is considered a valid voter if their age is 18 or older. . If the user is 18 or older, return : <Name> is a valid voter. . If the user is younger than 18, return : < Name> is not a valid voter.

// function checkVoterEligibility(name, age) {
//     if (age >= 18){
//         return `${name} is a valid voter.`;
//     }
//     else{
//         return `${name} is not a valid voter.`;
//     }
    
// }

// module.exports = { checkVoterEligibility };

// Write a program that takes an integer representing a year as input and checks whether it is a leap year. A year is considered a leap year if it satisfies either of the following conditions: 1. It is divisible by 4 but not divisible by 100, or 2. It is divisible by 400. .. If the year is a leap year, print "Leap Year" Otherwise, print "Not a Leap Year".

// function isLeapYear(year) {
//     if(year % 400 == 0){
//         return "Leap Year"
//     }
//     else if(year % 4 == 0 && year % 100 != 0){
//         return "Leap Year"
//     }
//     else{
//         return "Not a Leap Year"

//     }
    
// }

// module.exports = { isLeapYear };

// Write a program that takes an initial amount as input and calculates the final amount after applying a flat discount based on the following conditions:

// |----------------------------------------------|
// |       Amount          |       Discount       |  
// |       0-5000          |         0 %          |
// |      5001-7000        |         5 %          |
// |      7001-9000        |         10 %         |
// |    more than 9000     |         20 %         |
// |----------------------------------------------|

// function calculateFinalAmount(amount) {
//   if(amount >= 0 && amount <= 5000 ){
//     return amount;
//   }   
//   else if(amount >= 5001 && amount <= 7000 ){
//     return amount - (amount*5)/100;
//   }
//   else if(amount >= 7001 && amount <= 9000 ){
//     return amount - (amount*10)/100;
//   }
//   else if(amount >= 9001 ){
//     return amount - (amount*20)/100;
//   }
// }

// module.exports = { calculateFinalAmount };

// Write a program that takes the number of electricity units consumed as input and calculates the final electricity bill based on the following conditions:

// |----------------------------------------------|
// |         Unit          |       Price          |  
// |      up to 100        |    Rs. 4.2 /unit     |
// |      101-200          |     Rs. 6 /unit      |
// |      201-400          |     Rs. 8 /unit      |
// |    more than 400      |     Rs. 13 /unit     |
// |----------------------------------------------|

// function calculateElectricityBill(unit) {
//     let bill = 0;

//     if (unit <= 100) {
//         bill = unit * 4.2;
//     } 
//     else if (unit <= 200) {
//         bill = (100 * 4.2) + (unit - 100) * 6;
//     } 
//     else if (unit <= 400) {
//         bill = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;
//     } 
//     else {
//         bill = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13;
//     }

//     return bill.toFixed(1); // 👈 keeps 210.0
// }

// module.exports = { calculateElectricityBill };
