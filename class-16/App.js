// Question : Write a program that takes an integer n as input and prints a right triangle star pattern with n rows. . Each row should contain stars (*) with spaces between them. . The number of stars increases as you move from the first row to the nth row.

// function printRightTriangle(n) {
//    let result = "";
// 
//    for(i = 1 ; i <= n ; i++){
// 
//     for(j = 1 ; j <= i ; j++){
//         result += "* "
//     }
// 
//     result += "\n";
//    }
// 
//    console.log(result);
// }
// 
// module.exports = { printRightTriangle };


// Question : Write a program that takes an integer n as input and prints a right triangle number pattern with n rows. . Each row should start from 1 and print the next integers incrementally until the row number is reached.

// function printRightTriangleNumbers(n) {
//     let result = "";

//     for (i = 1 ; i <= n ; i++){

//         for( j = 1; j <= i; j++){
//             result += j + " ";
//         }
//         result += '\n';
//     }
//     console.log(result)
// }

// module.exports = { printRightTriangleNumbers };

// Question :Write a program that takes an integer n as input and prints a right triangle alphabet pattern with n rows. .. Each row should start from 'A' and incrementally print the next letters of the alphabet until the row number is reached.

// function printRightTriangleAlphabets(n) {
//     for (let i = 1; i <= n; i++) {
//          let row = '';
//  
//        for (let j = 0; j < i; j++) {
//   
//         row += String.fromCharCode(65 + j) + ' ';
//     }
// 
//     console.log(row.trim());
//   }
// }
// 
// module.exports = { printRightTriangleAlphabets };

// Question : Write a program that takes an integer input n and prints an inverted right triangle star pattern with n rows. The first row should have n stars, and each subsequent row should have one less star than the previous row.

// function printInvertedRightTriangle(n) {
//     let result = "";
// 
//     for (i = 0 ; i <= n ; i++){
// 
//         for(j = 0 ; j < n - i ; j++){
//             result += "* ";
//         }
//         result += "\n";
//     }
//     console.log(result)
// }
// 
// module.exports = { printInvertedRightTriangle };

// Question : Write a program that takes an integer input n and prints a mirrored right triangle star pattern with n rows. The pattern should be right-aligned, where the stars appear at the right side of the output, and spaces fill the remaining left side of each row.

// function printMirroredRightTriangle(n) {
//   let result = "";
// 
//   for(let i = 1 ; i <= n ; i++){
//     let row = "";
// 
//     for(let j = 1 ; j <= n - i; j++){
//          row += "  ";
//     }
//  
//     for(let k = 1 ; k <= i; k++){
//         row += "* "; 
//     }
//     result += row + "\n";
//   }
//   console.log(result);
// }
// 
// module.exports = { printMirroredRightTriangle };

// Question :Given a positive integer N (minimum value 3), print a V-shaped pattern with N rows. . The first and last characters in each row are stars (*)

// function printVShapePattern(N) {
//     for (let i = 0; i < N; i++) {
//         let row = "";
//         for (let j = 0; j < 2 * N - 1; j++) {
//             if (j === i || j === (2 * N - 2 - i)) {
//                 row += "*";
//             } else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
// }
// 
// module.exports = { printVShapePattern };

// Question : Given a positive integer N (where N is an odd number), print an X-shaped pattern with N rows.

// function printXShapePattern(N) {
//     for (let i = 0; i < N; i++) {
//         let row = "";
//         for (let j = 0; j < N; j++) {
//             if (j === i || j === N - 1 - i) {
//                 row += "*";
//             } else {
//                 row += " ";
//             }
//         }
//         console.log(row);
//     }
// }
// 
// module.exports = { printXShapePattern };