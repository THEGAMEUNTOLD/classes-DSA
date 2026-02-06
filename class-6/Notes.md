

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
