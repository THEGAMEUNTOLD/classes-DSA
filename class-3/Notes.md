# All conditional statements Use for DSA

# Conditional Statements in JavaScript (For DSA)

Conditional statements are used to make decisions in a program.
They allow the program to execute different blocks of code based on whether a given condition is true or false.

In JavaScript, the following conditional statements are used:

---

## 1. `if` Statement

The `if` statement executes a block of code only if the given condition is true.

### Syntax

```javascript
if (condition) {
    // code to be executed if condition is true
}
```

### Example

```javascript
let age = 18;

if (age >= 18) {
    console.log("The person is eligible to vote.");
}
```

---

## 2. `if–else` Statement

The `if–else` statement executes one block if the condition is true and another block if the condition is false.

### Syntax

```javascript
if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}
```

### Example

```javascript
let number = 5;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
```

---

## 3. `if–else if–else` Statement

This statement is used when multiple conditions need to be checked in sequence.

### Syntax

```javascript
if (condition1) {
    // code for condition1
} else if (condition2) {
    // code for condition2
} else {
    // code if all conditions are false
}
```

### Example

```javascript
let marks = 72;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

---

## 4. Nested `if` Statement

An `if` statement written inside another `if` statement is called a nested `if`.

### Syntax

```javascript
if (condition1) {
    if (condition2) {
        // code
    }
}
```

### Example

```javascript
let age = 20;
let hasId = true;

if (age >= 18) {
    if (hasId) {
        console.log("Entry allowed.");
    }
}
```

---

## 5. `switch` Statement

The `switch` statement is used when the same variable is compared with multiple values.

### Syntax

```javascript
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
```

### Example

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

---

## 6. Ternary Operator (Conditional Operator)

The ternary operator is a short form of the `if–else` statement.

### Syntax

```javascript
condition ? expression1 : expression2;
```

### Example

```javascript
let age = 16;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
```

---

## 7. Logical Conditions in DSA

In DSA problems, conditions often use logical operators:

* `&&` (AND)
* `||` (OR)
* `!` (NOT)

### Example

```javascript
let x = 10;

if (x > 5 && x < 20) {
    console.log("x is between 5 and 20");
}
```







## Switch Case Statement (JavaScript)

A switch case statement is used when we want to check one value against many possible options.

It is an alternative to writing many `if-else if` statements.

---
Why use Switch Case?
-> Code looks clean and readable
-> Easy to handle multiple conditions
-> Very useful in DSA problems (menu programs, choices, days, months, etc.)

---

## Syntax of Switch Case

```javascript
switch (expression) {
  case value1:
    // code to execute
    break;

  case value2:
    // code to execute
    break;

  default:
    // code if no case matches
}
```

---

## How it Works 

1. The `expression` is evaluated **once**
2. Its value is compared with each `case`
3. If a match is found, that block runs
4. `break` stops execution
5. If no case matches, `default` runs

---

## Example 1: Day Number to Day Name

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Invalid day");
}
```

Output:

```
Wednesday
```

---

## Example 2: Simple Calculator 

```javascript
let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Invalid operator");
}
```

---

## Example 3: Even or Odd using Switch

```javascript
let num = 7;

switch (num % 2) {
  case 0:
    console.log("Even number");
    break;

  case 1:
    console.log("Odd number");
    break;
}
```

---

## Important Rules 

### 1. `break` is necessary

Without `break`, all next cases will run.

```javascript
let x = 1;

switch (x) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
}
```

Output:

```
One
Two
```

---

### 2. `default` is optional

But always good practice to use it.

---

### 3. Switch uses strict comparison (===)

```javascript
let x = "1";

switch (x) {
  case 1:
    console.log("Number one");
    break;
  case "1":
    console.log("String one");
}
```

Output:

```
String one
```


## Practice Questions 

1. Print month name using month number (1–12)
2. Check vowel or consonant using switch
3. Menu program:

   * 1 → Add
   * 2 → Subtract
   * 3 → Multiply
4. Print grade based on character (`A`, `B`, `C`, `F`)
5. Check weekday or weekend
