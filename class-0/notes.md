
# JavaScript Essentials

## 1. Difference between `var`, `let`, and `const

### `var`

* `var` is a function-scoped variable.
* It can be re-declared and reassigned.
* It is hoisted to the top of its scope and initialized with `undefined`.
* It may cause unexpected behavior, so it is not recommended in modern JavaScript.

Example:

```js
var x = 10;
var x = 20; // allowed
x = 30;     // allowed
```

---

### `let`

* `let` is block-scoped (limited to `{ }`).
* It cannot be re-declared, but it can be reassigned.
* It is hoisted but not initialized.

Example:

```js
let y = 10;
// let y = 20;  not allowed
y = 20;     // allowed
```

---

### `const`

* `const` is also block-scoped.
* It cannot be re-declared or reassigned.
* The value must be assigned at the time of declaration.
* Used for constant values.

Example:

```js
const z = 10;
// z = 20;  not allowed
```

---

### Comparison Table

| Feature    | var             | let       | const     |
| ---------- | --------------- | --------- | --------- |
| Scope      | Function        | Block     | Block     |
| Re-declare | Yes             | No        | No        |
| Reassign   | Yes             | Yes       | No        |
| Hoisting   | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |

---

## 2. Sum of Two Values

### String + String

* When two strings are added, string concatenation occurs.

```js
"Hello" + "World"  // "HelloWorld"
```

---

### String + Integer

* The integer is converted into a string.
* Result is string concatenation.

```js
"Age: " + 21   // "Age: 21"
```

---

### Integer + Integer

* Arithmetic addition takes place.
* Result is an integer.

```js
10 + 20   // 30
```

---

## 3. Relation between Integer and String

* JavaScript is a dynamically typed language.
* It automatically converts data types when required.
* This behavior is called Type Coercion.

Example:

```js
"5" + 5   // "55" (string)
"5" - 2   // 3 (number)
```

---

## 4. Sum and Message (Type Coercion)

### Type Coercion

* Automatic conversion of one data type into another.
* Occurs during operations involving different data types.

Example:

```js
let a = 10;
let b = "5";

let result = a + b;
console.log(result); // "105"
```

---

### Greet the User

```js
let name = "Bharat";
console.log("Hello " + name + ", welcome to JavaScript!");
```

---

## 5. Accept and Print the Answer

### Using `prompt()`

```js
let answer = prompt("Enter your answer:");
console.log("Your answer is: " + answer);
```

* `prompt()` accepts input from the user.
* Input is always received as a string.

---

## 6. Swap Two Variables (Three Methods)

### Method 1: Using a Third Variable

```js
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;
```

✔ Most common and easiest method.

---

### Method 2: Using Arithmetic Operators

```js
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;
```

 Does not require extra variable
 Not suitable for very large numbers

---

### Method 3: Using Destructuring Assignment (ES6)

```js
let a = 10;
let b = 20;

[a, b] = [b, a];
```

✔ Modern and clean approach
✔ Most recommended in JavaScript
