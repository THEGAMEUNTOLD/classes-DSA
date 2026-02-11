#  Q1572. Matrix Diagonal Sum

###  Problem

Given a square matrix `mat`, return the sum of the matrix diagonals.

Include:

* Primary diagonal → `mat[i][i]`
* Secondary diagonal → `mat[i][n - 1 - i]`

Do not double count the center element if `n` is odd.

###  JavaScript

```javascript
var diagonalSum = function(mat) {
    let n = mat.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += mat[i][i]; // primary diagonal
        sum += mat[i][n - 1 - i]; // secondary diagonal
    }

    // subtract middle if counted twice
    if (n % 2 === 1) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }

    return sum;
};
```

---

#  Q867. Transpose Matrix

###  Problem

Given a 2D integer array `matrix`, return its transpose.

Transpose = rows become columns.

###  JavaScript

```javascript
var transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let result = Array.from({ length: cols }, () => Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
};
```

---

# Q832. Flipping an Image

###  Problem

Given a binary matrix:

1. Reverse each row
2. Invert each value (0 → 1, 1 → 0)

Return the result.

###  JavaScript

```javascript
var flipAndInvertImage = function(image) {
    for (let row of image) {
        row.reverse();
        for (let i = 0; i < row.length; i++) {
            row[i] = row[i] ^ 1; // invert bit
        }
    }
    return image;
};
```

---

#  Q48. Rotate Image (90° Clockwise)

###  Problem

Rotate an `n x n` matrix by 90 degrees clockwise in-place.

###  JavaScript

```javascript
var rotate = function(matrix) {
    let n = matrix.length;

    // transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // reverse each row
    for (let row of matrix) {
        row.reverse();
    }
};
```

---

#  Q54. Spiral Matrix

###  Problem

Given an `m x n` matrix, return all elements in spiral order.

###  JavaScript

```javascript
var spiralOrder = function(matrix) {
    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;

        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
            left++;
        }
    }

    return result;
};
```

---

#  Q73. Set Matrix Zeroes

### 🧩 Problem

If an element is `0`, set its entire row and column to 0.
Must be done in-place.

###  JavaScript (Optimal O(1) Space)

```javascript
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // check first column
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }

    // check first row
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }

    // mark zeros
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // apply marks
    for (let i = 1; i < rows; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < cols; j++) matrix[i][j] = 0;
        }
    }

    for (let j = 1; j < cols; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < rows; i++) matrix[i][j] = 0;
        }
    }

    if (firstRowZero) {
        for (let j = 0; j < cols; j++) matrix[0][j] = 0;
    }

    if (firstColZero) {
        for (let i = 0; i < rows; i++) matrix[i][0] = 0;
    }
};
```
