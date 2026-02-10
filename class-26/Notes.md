
#  Functions in JavaScript 

## 1. What is a Function?

A function is a reusable block of code that performs a specific task.

In DSA, functions are used to:

* implement algorithms
* break big problems into smaller steps
* return computed results
* keep code clean and testable

---

## 2. Function Syntax

### Basic Function

```javascript
function functionName(parameters) {
    // code
}
```

### Calling a Function

```javascript
functionName(arguments);
```

---

# 3. Void vs Non-Void Functions

This distinction is extremely important in DSA.

---

##  Void Function (No Return Value)

A void function performs an action but does NOT return a value.

### Structure

```javascript
function name() {
    // do something
}
```

### Example — Print Array

```javascript
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

### Usage in DSA

Used when:

* printing results
* modifying data structures
* performing operations without needing a result

### Key Point

If no `return` statement → function returns `undefined`.

---

##  Non-Void Function (Returns Value)

A Non-void function computes and returns a value using `return`.

### Structure

```javascript
function name() {
    return value;
}
```

### Example — Sum of Two Numbers

```javascript
function sum(a, b) {
    return a + b;
}
```

### Example — Find Maximum in Array

```javascript
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
```

### Usage in DSA

Used when:

* solving algorithmic problems
* returning computed results
* chaining operations
* recursion

-> Most DSA functions are **non-void**.

---

# 4. Parameters vs Arguments

| Term      | Meaning                         |
| --------- | ------------------------------- |
| Parameter | Variable in function definition |
| Argument  | Actual value passed             |

```javascript
function square(x) {   // parameter
    return x * x;
}

square(5);             // argument
```

---

# 5. Types of Functions in JavaScript 

---

## 🔸 Function Declaration

```javascript
function add(a, b) {
    return a + b;
}
```

✔ Hoisted
✔ Common in algorithms

---

## 🔸 Function Expression

```javascript
const add = function(a, b) {
    return a + b;
};
```

✔ Stored in variable
✔ Not hoisted

---

## 🔸 Arrow Function (Modern DSA Style)

```javascript
const add = (a, b) => a + b;
```

### Multi-line Arrow Function

```javascript
const max = (a, b) => {
    if (a > b) return a;
    return b;
};
```

✔ Short
✔ Common in LeetCode-style code

---

# 6. Return Statement (Critical Concept)

### Rules

1. Ends function execution immediately
2. Can return any data type
3. Only one value can be returned

### Example

```javascript
function test() {
    return 10;
    console.log("Never runs");
}
```

---

# 7. Functions with Arrays (Core DSA Use)

### Example — Linear Search

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
```

### Example — Reverse Array

```javascript
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}
```

---

# 8. Recursive Functions (Must for DSA)

A function that calls itself.

### Example — Factorial

```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
```

### Structure

```javascript
function recursiveFunction(input) {
    if (baseCondition) return value;
    return recursiveFunction(smallerInput);
}
```

---

# 9. Higher-Order Functions (Advanced but Useful)

A function that:
✔ takes another function as argument OR
✔ returns a function

### Example

```javascript
function operate(a, b, operation) {
    return operation(a, b);
}

operate(5, 3, (x, y) => x + y);
```

Used in:

* sorting
* callbacks
* functional programming

---

# 10. When to Use Void vs Non-Void in DSA

### Use Void When:

✔ printing
✔ modifying structure directly
✔ performing side effects

### Use Non-Void When:

✔ solving problems
✔ returning answer
✔ recursion
✔ testing algorithms

-> Interview rule: Prefer returning values.

---

#  Common DSA Function Patterns

### Pattern 1 — Compute & Return

```javascript
function solve(input) {
    // logic
    return result;
}
```

### Pattern 2 — Modify Input

```javascript
function update(arr) {
    // change arr
}
```

### Pattern 3 — Recursive Solver

```javascript
function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
}
```
