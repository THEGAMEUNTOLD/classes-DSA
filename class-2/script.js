// Question: Write a function that takes two integers as input and returns their sum.

function sum(a, b) {
    // Return the sum
    console.log(a + b); 
}

module.exports = { sum };;

// Question: Write a program that accepts a user's name and age as input and then prints a greeting message in the following format:

"Hello Shery you are 12 years old."
function greet(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`);
}

module.exports = { greet };

// Question:Write a program that accepts two integers as input and swaps their values. After swapping, return the new values of the two numbers.

function swapNumbers(a, b) {
    // Write your logic here
    let temp = a;
    a = b;
    b = temp;

    return[a, b];
}

module.exports = { swapNumbers };


// Question: accumulated after n years, including interest. P is the principalaccumulated after n years, including interest. P is the principal amount (the initial sum of money). r is the annual interest rate (in decimal). t is the time the money is invested for in years. n is the number of times that interest is compounded per year. The compound interest is then calculated as CI=A-P.


function calculateCompoundInterest(P, r, t, n) {
    // Calculate the total amount after interest
    const A = P * Math.pow(1 + r / n, n * t);

    // Calculate compound interest
    const CI = A - P;

    // Return CI rounded to 2 decimal places
    return (CI.toFixed(2));
}

module.exports = { calculateCompoundInterest };

    