## While Loop 

### Definition

A while loop is a control flow statement that repeatedly executes a block of code as long as a given condition remains true.
The condition is checked before the execution of the loop body. If the condition is false initially, the loop body will not execute even once.

---

### Syntax (JavaScript)

```javascript
while (condition) {
    // statements to be executed
}
```

---

### Explanation of Working

1. The condition is evaluated first.
2. If the condition is true, the statements inside the loop are executed.
3. After execution, the condition is checked again.
4. This process continues until the condition becomes false.
5. When the condition becomes false, the control exits the loop.

---

### Flow of Execution

1. Initialize the loop control variable.
2. Check the condition.
3. Execute the loop body.
4. Update the loop control variable.
5. Repeat steps 2–4 until the condition fails.

---

### Example 1: Printing numbers from 1 to 5

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

* The variable `i` is initialized to 1.
* The condition `i <= 5` is checked.
* As long as the condition is true, the value of `i` is printed.
* `i` is incremented after each iteration.
* The loop stops when `i` becomes greater than 5.

---

### Example 2: Sum of first `n` natural numbers

```javascript
let n = 5;
let sum = 0;
let i = 1;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log(sum);
```

* The loop adds the value of `i` to `sum` in each iteration.
* The loop runs until `i` exceeds `n`.
* Final value of `sum` is printed.

---

### Importance of While Loop in DSA

In Data Structures and Algorithms, the while loop is commonly used when:

* The number of iterations is not known in advance
* Traversing arrays, strings, or linked lists
* Digit extraction problems
* Repeated division or modulus operations
* Searching and condition-based iteration

---

### Example 3: Digit extraction 

```javascript
let num = 1234;

while (num > 0) {
    let digit = num % 10;
    console.log(digit);
    num = Math.floor(num / 10);
}
```

Explanation:

* The loop continues until the number becomes 0.
* Each iteration extracts the last digit using modulus.
* The number is reduced using division.

---

### Infinite While Loop

If the loop control variable is not updated, the loop may run infinitely.

```javascript
while (true) {
    console.log("Infinite Loop");
}
```
