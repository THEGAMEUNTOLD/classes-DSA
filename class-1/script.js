// Question: Write a function that takes two integers as input and returns their sum.

function sum(a, b) {
    // Return the sum
    console.log(a + b); 
}

module.exports = { sum };;

// Question: Write a function that takes a name and age as input and prints a greeting message.
function greet(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`);
}

module.exports = { greet };

// Question:write a program that accepts two integers as input and awaps their values. After Swapping, return the new values of the numbers
function swapNumbers(a, b) {
    // Write your logic here
    let temp = a;
    a = b;
    b = temp;

    return[a, b];
}

module.exports = { swapNumbers };


// Question: Write a function that calculates the compound interest for a given principal amount, rate of interest, time period, and number of times interest is compounded per year.   

function calculateCompoundInterest(P, r, t, n) {
    // Calculate the total amount after interest
    const A = P * Math.pow(1 + r / n, n * t);

    // Calculate compound interest
    const CI = A - P;

    // Return CI rounded to 2 decimal places
    return (CI.toFixed(2));
}

module.exports = { calculateCompoundInterest };

    