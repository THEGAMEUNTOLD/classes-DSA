## While Loop 

A while loop is an entry-controlled looping statement.
It repeatedly executes a block of statements as long as a given condition remains true.

The condition is checked before the execution of the loop body.
If the condition is false initially, the loop body will not execute even once.

---

## General Syntax (JavaScript)

```javascript
while (condition) {
    // statements to be executed
}
```

---

## Working Principle

1. The condition inside the `while` loop is evaluated.
2. If the condition is true, the loop body is executed.
3. After execution, the condition is checked again.
4. This process continues until the condition becomes false.
5. When the condition becomes false, the control exits the loop.

---

## Important Components

1. Initialization
   A variable is initialized before entering the loop.

2. Condition
   A logical expression that controls how long the loop will run.

3. Updation
   The loop control variable is updated inside the loop body to avoid an infinite loop.

---

## Example 

```javascript
let n = 5;

while (n > 0) {
    console.log(n);
    n--;
}
```

### Explanation:

* Initialization: `n = 5`
* Condition: `n > 0`
* Updation: `n--`
* The loop prints numbers from `5` to `1`

---

## Flow of Execution

1. Check condition (`n > 0`)
2. Execute loop body
3. Update variable (`n--`)
4. Repeat steps 1–3
5. Exit when condition becomes false

---

## Characteristics of While Loop

* It is an entry-controlled loop
* Condition is checked before execution
* Used when the number of iterations is not known in advance
* Commonly used in DSA problems such as:

  * Digit extraction
  * Reversing a number
  * Sum of digits
  * Palindrome checking

---

## Example in DSA (Sum of Digits Logic)

```javascript
while (n > 0) {
    digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
}
```
