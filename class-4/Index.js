// // Question:Accept the principal amount(P), annual interest rate(r), the number of years(t), and number of times interest is compounded per year(n) write a program to calculate the compound interest. The formula to calculate compound interes is: A = Px(1+r/n)^(n*t) Where: A is the amount of money accumulated after n years, including interest. P is the principal amount (the initial sum of money). r is the annual interest rate (in decimal). t is the time the money is invested for in years. n is the number of times that interest is compounded per year. The compound interest is then calculated as CI=A-P.

// function calculateCompoundInterest(P, r, t, n) {
//     // Calculate the total amount after interest
//     const A = P * Math.pow(1 + r / n, n * t);

//     // Calculate compound interest
//     const CI = A - P;

//     // Return CI rounded to 2 decimal places
//     return (CI.toFixed(2));
// }
// module.exports = { calculateCompoundInterest };


// // Question:Write a program that accepts two integers as input and swaps their values. After swapping, return the new values of the two numbers.

// function swapNumbers(a, b) {
//     // Write your logic here
//     let temp = a;
//     a = b;
//     b = temp;

//     return[a, b];
// }

// module.exports = { swapNumbers };

// Question :Accept the lengths of the three sides of a triangle, write a program to calculate the area of the triangle using Heron's formula. The formula states that if the sides of the triangle are a, b, and c, then the area A is calculated as: s =(a+b+c)/2A= sqrt of s*(s-a)*(s-b)*(s-c)Where s is the semi-perimeter of the triangle.

// function calculateTriangleArea(a, b, c) {
//     let s = (a + b + c) / 2;
//     let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return A.toFixed(2);
// }

// module.exports = { calculateTriangleArea };

// Question: Accept the radius of a circle as float, write a program to calculate both the circumference and area of the circle. Use the following formulas: Circumference C of a circle: 2.T.r Area A of a circle : T.r^2 Where r is the radius of the circle. Hint : For getting pi value you can use Math.PI Note: Do not use Math.pow to calculate the answer to the correct decimal place.

// function calculateCircleProperties(r) {
//     let circumference = 2 * Math.PI * r;
//     let area = Math.PI * r * r;

//     return [circumference.toFixed(2), area.toFixed(2)];
// }

// module.exports = { calculateCircleProperties };
