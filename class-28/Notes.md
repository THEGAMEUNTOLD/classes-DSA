
#  Multidimensional Arrays in JavaScript (DSA Perspective)

##  Definition

A multidimensional array is an array that contains other arrays as its elements.

In Data Structures, it is commonly used to represent:

* Matrices
* Grids
* Tables
* Graph adjacency matrices
* Game boards (like chess, tic-tac-toe)

-> Think of it as rows and columns.

Formally:

> A 2D array is a collection of elements arranged in rows and columns and accessed using two indices.

---

## 2 Syntax in JavaScript

JavaScript does not have true multidimensional arrays like C or Java.
Instead, it uses arrays of arrays

### Example: 2D Array (Matrix)

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

Structure visualization:

```
Row 0 → [1, 2, 3]
Row 1 → [4, 5, 6]
Row 2 → [7, 8, 9]
```

---

## 3️⃣ Accessing Elements

General formula:

```javascript
array[row][column]
```

Example:

```javascript
console.log(matrix[0][1]); // 2
console.log(matrix[2][0]); // 7
```
 First index selects the row
 Second index selects the column

---

## 4 Creating a 2D Array (DSA Method)

### Method 1 — Manual Initialization

```javascript
let arr = [
  [10, 20],
  [30, 40]
];
```

---

### Method 2 — Using Loops (Important for DSA)

```javascript
let rows = 3;
let cols = 3;

let grid = [];

for (let i = 0; i < rows; i++) {
  grid[i] = [];
  for (let j = 0; j < cols; j++) {
    grid[i][j] = 0;
  }
}

console.log(grid);
```

Time Complexity: **O(rows × cols)**

---

## 5 Traversing a 2D Array (Very Important in DSA)

### Row-wise Traversal

```javascript
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

Traversal Order:

```
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9
```

---

### Column-wise Traversal

```javascript
for (let j = 0; j < matrix[0].length; j++) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][j]);
  }
}
```

---

## 6 Common DSA Operations

###  Searching an element

```javascript
function search(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
}
```

Time Complexity → **O(n × m)**

---

###  Sum of all elements

```javascript
let sum = 0;

for (let row of matrix) {
  for (let val of row) {
    sum += val;
  }
}

console.log(sum);
```

---

###  Transpose of a Matrix

Rows become columns.

```javascript
function transpose(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let result = [];

  for (let j = 0; j < cols; j++) {
    result[j] = [];
    for (let i = 0; i < rows; i++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}
```

Time Complexity → O(n × m)

---

## 7 Memory Representation (Conceptual)

For a matrix:

```
[ [1,2,3],
  [4,5,6] ]
```

Memory view (conceptual):

```
Reference → Row arrays → Values
```

JavaScript stores:

* One outer array
* Multiple inner arrays

 This is called a jagged array structure

---

## 8 Real DSA Applications

You’ll see 2D arrays in:

✔ Matrix problems
✔ Dynamic Programming tables
✔ Graph adjacency matrix
✔ Image processing
✔ Grid BFS/DFS
✔ Game boards
✔ Path finding problems

Since you’re learning DSA seriously, this topic becomes foundation for:

* Matrix traversal problems
* DP problems (very important)
* Graph representation

---

## 9 Time Complexity Cheat Sheet

| Operation       | Complexity |
| --------------- | ---------- |
| Access element  | O(1)       |
| Traverse matrix | O(n × m)   |
| Search element  | O(n × m)   |
| Create matrix   | O(n × m)   |

