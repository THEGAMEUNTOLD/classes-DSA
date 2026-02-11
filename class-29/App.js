// 

// function diagonalSum(mat) {
//     let n = mat.length;
//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//         sum += mat[i][i];              // primary diagonal
//         sum += mat[i][n - 1 - i];      // secondary diagonal
//     }

//     // remove center element if counted twice
//     if (n % 2 === 1) {
//         sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
//     }

//     return sum;
// }

// module.exports = { diagonalSum };


// 

// /**
//  * Transpose a 2D matrix
//  * @param {number[][]} matrix
//  * @returns {number[][]}
//  */
// function transposeMatrix(matrix) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     let result = Array.from({ length: cols }, () => Array(rows));

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             result[j][i] = matrix[i][j];
//         }
//     }

//     return result;
// }

// module.exports = { transposeMatrix };

// 


// /**
//  * Rotate n x n matrix 90° clockwise in-place
//  * @param {number[][]} matrix
//  */
// function rotateImage(matrix) {
//     const n = matrix.length;

//     // transpose
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }

//     // reverse each row
//     for (let row of matrix) {
//         row.reverse();
//     }
// }

// module.exports = { rotateImage };

// 

