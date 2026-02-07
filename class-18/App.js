// You are given an array of size n. Your task is to create a new array that contains the same elements but in reverse order. Finally, print the reversed array.

// function copyAndReverseArray(arr) {
//     let reversed = [];
// 
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
// 
//     return reversed; 
// }
// 
// module.exports = { copyAndReverseArray };

// Write a program that reverses the elements of an integer array in-place, without using extra space. . The function should modify the array directly without creating a new array.

// function reverseArrayInPlace(arr) {
//     let start = 0;
//     let end = arr.length - 1;
// 
//     while(start < end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
// 
//         start++;
//         end--;
//     }
// }
// 
// module.exports = { reverseArrayInPlace };

// Write a program that performs a left rotation by one position in an array of size n. . The first element moves to the last position. . All other elements shift one position to the left. . The program should modify the array in place and print the updated array.


// function leftRotateByOne(arr) {
//     let n = arr.length;
//     let temp = arr[0];
// 
//     for(let i = 0 ; i < n - 1 ;i++){
//         arr[i] = arr[i + 1];
//     }
// 
//     arr[n-1] = temp; 
// }
// 
// module.exports = { leftRotateByOne };

// Given an array of 0's and 1's, move all the zeros to the end of the array. You can use extra space to perform this operation.

// function moveZerosToEnd(arr) {
// let result = [];
// let countOnes = 0;
// 
// for(i = 0 ; i < arr.length ; i++){
//     if(arr[i] === "1" || arr[i] === 1 ){
//         result.push(1);
//         countOnes++;
//     }   
// }
// for(let i = countOnes;i < arr.length;i++){
//     result.push(0);
// }
// return result
// }
// 
// module.exports = { moveZerosToEnd };

// You are given an array containing only 0s and 1s. Your task is to move all the Os to the end of the array. Note: The program should not use any extra space (i.e., modify the array in place).

// function moveZerosToEnd(arr) {
//     let pos = 0;
// 
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '1' || arr[i] === 1) {
//             // swap arr[i] with arr[pos]
//             let temp = arr[i];
//             arr[i] = arr[pos];
//             arr[pos] = temp;
//             pos++;
//         }
//     }
// }



