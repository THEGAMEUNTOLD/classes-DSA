// Assignment on conditional Statements

// Question : Write a program that takes three integers as input and prints the greatest of the three numbers. . If two or more numbers are equal and the largest, print that number.

// function findGreatest(a, b, c) {
//    if( a >= b && a >= c ){
//     return a;
//    }
//    else if( b >= a && b >= c ){
//     return b;
//    }
//    else{
//     return c;
//    }
// }
// module.exports = { findGreatest };

// Write a program that takes a day number (between 1 and 7) as input and prints the corresponding day name. The mapping is as follows: 1: Monday 2: Tuesday 3: Wednesday 4: Thursday 5: Friday 6:Saturday 7: Sunday If the input number is not between 1 and 7, print "Invalid day number".

// function printDayName(day) {
//   switch (day) {
//     case 1:
//       return "Monday";
//     case 2:
//       return "Tuesday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//     case 7:
//       return "Sunday";
//     default:
//       return "Invalid day number";
//   }
// }
// module.exports = { printDayName };

// Question :Write a program that takes a movie rating as input and determines the movie's status based on the following conditions:

// |-------------------------------------------------------|
// |    Rating              |     Message to be displayed  |
// |    0.0 to 2.0          |             Flop             |
// |    2.1 to 3.4          |          Semi-hit            |
// |    3.5 to 4.5          |             Hit              |
// |    4.6 to 5.0          |           Super Hit          |


// class Solution {
//     get_movie_status(ratingStr) {
//         if(ratingStr >= 0.0 && ratingStr <= 2.0){
//             return "Flop";
//         }
//         else if(ratingStr >= 2.1 && ratingStr <= 3.4){
//             return "Semi-hit";
//         }
//         else if(ratingStr >= 3.5 && ratingStr <= 4.5){
//             return "Hit";
//         }
//         else{
//             return "Super Hit";
//         }
//     }
// }
// module.exports = Solution;


// Question : Write a program that takes a single English alphabet character as input and checks whether it is a vowel or a consonant. If the character is one of a, e, i, o, u (in either uppercase or lowercase), print "Vowel". Otherwise, print "Consonant". If the input is not a valid English alphabet letter, print "Invalid input".

// function checkChar(ch) {
//   if (!(ch >= "a" && ch <= "z" || (ch >= "A" && ch <= "Z"))){
//     return "Invalid input";
//   }

//   ch = ch.toLowerCase();

//   if ( ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ){
//     return "Vowel";
//   }
//   else{
//     return "Consonant";
//   }

// }

// module.exports = { checkChar };



