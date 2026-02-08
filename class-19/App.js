// Question : You are given a sequence of integers. Your task is to compute the sum of absolute differences between every pair of elements in the sequence where the first element appears before the second. More formally, for a given array of integers arr of length n, you must compute the total value: For all pairs (i, j) such that 0 ≤ i < j < n, add larr[i] - arr[j]l to the sum. The absolute difference between two numbers is defined as the non-negative value of their difference, regardless of order. The input may contain duplicate values, negative numbers, or zeros. The order of elements in the input is fixed and must not be rearranged. Your program must process the input exactly as provided and output a single integer representing the computed sum.

helper.js
// class Solution {
//   /**
//    * @param {number[] | bigint[]} arr - array of integers (can be Numbers or BigInt)
//    * @return {bigint} sum of absolute differences across all unordered pairs
//    */
//   sumOfAbsDiff(arr) {
// 
//     const bigArr = arr.map(x => typeof x === 'bigint' ? x : BigInt(x));
// 
//     let sum = 0n;
//     const n = bigArr.length;
// 
//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j < n; j++) {
// 
//         const diff = bigArr[i] > bigArr[j] ? bigArr[i] - bigArr[j] : bigArr[j] - bigArr[i];
//         sum += diff;
//       }
//     }
// 
//     return sum;
//   }
// }

// module.exports = { Solution };

// Given an array of integers, update every element with the multiplication of the previous and next elements with the following exceptions: The first element is replaced by the multiplication of the first and second. The last element is replaced by the multiplication of the last and second last. Input Format First line: T (Number of test cases) For each test case: First line: N (Size of array) Second line: A[0] A[1] ... A[N-1] (Integer array elements)

// class Solution {
//   /**
//    * @param {number[]} arr
//    * @returns {number[]} updated array
//    */
//   multiplyPrevNext(arr) {
//     const n = arr.length;
//     if ( n === 0) return [];
//     if (n === 1)  return [arr[0]];
// 
//     const result = new Array(n);
// 
//     result[0] = arr[0] * arr[1];
// 
//     for(let i = 1 ; i < n - 1; i++){
//       result[i] = arr[i - 1] * arr[i + 1];
//     }
// 
//     result[n-1] = arr[n - 2] * arr[n - 1];
// 
//     return result;
//   }
// }
// 
// module.exports = { Solution };

// Given an array of integers, update every element with the multiplication of the previous and next elements with the following exceptions: The first element is replaced by the multiplication of the first and second. The last element is replaced by the multiplication of the last and second last. Input Format First line: T (Number of test cases) For each test case: First line: N (Size of array) Second line: A[0] A[1] ... A[N-1] (Integer array elements)

// class Solution {
//     minAddForBalance(arr) {
//         const n = arr.length;
//         const mid =  n / 2;
// 
//         let RightSum = 0;
//         let LeftSum = 0;
// 
//         for(let i = 0 ; i < mid; i++){
//             LeftSum += arr[i];
//         }
// 
//         for(let i = mid ; i < n; i++){
//             RightSum += arr[i];
//         }
// 
//         return Math.abs(LeftSum - RightSum)
//     }
// }
// 
// module.exports = { Solution };

// You are given an array of integers. Your task is to: Sort the first half of the array in ascending order. Sort the second half of the array in descending order. The array can be of any size (even or odd). If the array size n is odd, the middle element belongs to the first half. Return the final array after performing both sorts.

// class Solution {
//     sortHalf(arr) {
//         const n = arr.length;
//         const mid = Math.floor(n / 2); // middle goes to second half

//         const firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
//         const secondHalf = arr.slice(mid).sort((a, b) => b - a);

//         return [...firstHalf, ...secondHalf];
//     }
// }

// module.exports = { Solution };
