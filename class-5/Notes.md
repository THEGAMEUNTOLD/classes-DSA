## What is a Loop?

A loop means doing the same work again and again until a condition becomes false.

Example in real life:
-> “Count from 1 to 5”
You don’t write 5 print statements. You use a loop.

---

## Why loops are important in DSA?

In Data Structures & Algorithms, loops are used to:

* Traverse arrays
* Search elements
* Count frequency
* Reverse data
* Solve problems efficiently


---

## 1. `for` loop (MOST IMPORTANT for DSA)

### Syntax

```js
for (initialization; condition; increment/decrement) {
    // code
}
```

### Example: Print numbers 1 to 5

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### How it works

1. `let i = 1` → start
2. `i <= 5` → condition check
3. `console.log(i)` → run code
4. `i++` → increase i by 1
5. Repeat

---

## 2. Loop on Array (Very important for DSA)

### Example: Print array elements

```js
let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

-> `arr.length` prevents out-of-bound errors
-> This is how you traverse an array

---

## 3. Sum of array elements (Classic DSA question)

```js
let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum); // 10
```

---

## 4. Find even numbers using loop

```js
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
```

---

## 5. Reverse loop (Important trick)

```js
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

Used in:

* Reverse array
* Palindrome check

---

## 6. `while` loop (Used when condition is main focus)

```js
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

-> Use `for` loop more in DSA
-> Use `while` when you don’t know exact iterations

---

## 7. `do...while` loop (Runs at least once)

```js
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

---

##  DSA Golden Rule for Loops

* Use for loop for arrays
* Always check start, end, increment
* Avoid infinite loops

---

##  Practice Questions 

1. Print numbers from 10 to 1
2. Find max number in array
3. Count even numbers in array
4. Reverse an array using loop
