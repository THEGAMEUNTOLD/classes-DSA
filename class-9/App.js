// Question :Write a program that takes an integer n as input and computes the sum of its digits. . The input number is always positive.

// function sumOfDigits(n) {
//     let sum = 0;
//     while( n > 0 ){
//         sum += n % 10;
//         n = Math.floor(n/10)
//     }
//     return sum;
// }
// 
// module.exports = { sumOfDigits };

// Question :A number is called an Automorphic number if its square ends with the number itself. For example: . 25 is Automorphic because: 25^2=625 . The last two digits are 25 (which matches the number itself). Write a program that accepts a positive integer n and checks whether it is an Automorphic number. · If n is an Automorphic number, print "Yes". Otherwise, print "No".

// function isAutomorphic(n) {
//    let square = n * n;
// 
//    let count = 0;
//    let temp = n 
// 
//    while (temp > 0){
//      count++;
//      temp = Math.floor(temp/10);
//    }
//    let power = 1;
//    for(i = count;i > 0; i--){
//      power *= 10;
//    }
//    
//    if(square % power === n ){
//     return "Yes";
//    }
//    else{
//      return "No";
//    }
// }
// module.exports = { isAutomorphic };