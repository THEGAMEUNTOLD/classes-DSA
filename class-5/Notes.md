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



