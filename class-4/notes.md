
## 1. `Math.round()`

Rounds to the nearest integer.

```js
Math.round(4.3); // 4
Math.round(4.5); // 5
Math.round(4.7); // 5
```

Problem:
Round `7.6` to the nearest integer.

---

## 2. `Math.ceil()`

Rounds up to the next integer.

```js
Math.ceil(4.1); // 5
Math.ceil(4.9); // 5
```

Problem:
Find the smallest integer greater than or equal to `9.01`.

---

## 3. `Math.floor()`

Rounds down to the previous integer.

```js
Math.floor(4.9); // 4
Math.floor(4.1); // 4
```

Problem:
Find the largest integer less than or equal to `6.99`.

---

## 4. `Math.trunc()`

Removes the decimal part only.

```js
Math.trunc(4.9);  // 4
Math.trunc(-4.9); // -4
```

Problem:
Remove the decimal part from `-12.78`.

---

## 5. `Math.pow()`

Returns power of a number.

```js
Math.pow(2, 3); // 8
Math.pow(5, 2); // 25
```

Problem:
Find `7³`.

---

## 6. `Math.sqrt()`

Returns square root.

```js
Math.sqrt(25); // 5
Math.sqrt(81); // 9
```

Problem:
Find the square root of `144`.

---

## 7. `Math.cbrt()`

Returns cube root.

```js
Math.cbrt(27);  // 3
Math.cbrt(64);  // 4
```

Problem:
Find the cube root of `125`.

---

## 8. `Math.abs()`

Returns absolute value (no negative).

```js
Math.abs(-10); // 10
Math.abs(5);   // 5
```

Problem:
Find the absolute value of `-45`.

---

## 9. `Math.max()`

Returns the largest number.

```js
Math.max(10, 5, 20, 8); // 20
```

Problem:
Find the maximum of `3, 15, 9, 22`.

---

## 10. `Math.min()`

Returns the smallest number.

```js
Math.min(10, 5, 20, 8); // 5
```

Problem:
Find the minimum of `12, 4, 19, 1`.

---

## 11. `Math.random()`

Returns a random number between 0 and 1.

```js
Math.random(); // 0.0 to 0.999...
```

Random number between 1 and 10:

```js
Math.floor(Math.random() * 10) + 1;
```

Problem:
Generate a random number between `1` and `100`.

---

## 12. `toFixed()`

Rounds a number to fixed decimal places (returns string).

```js
let num = 3.14159;
num.toFixed(2); // "3.14"
```

Problem:
Convert `9.87654` to 2 decimal places.

