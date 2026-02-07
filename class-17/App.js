// Question : Write a program that accepts an integer n from the user, creates an array of size n, takes n integer inputs to fill the array, and then calculate and return the sum and mean of the array elements. Tell me the logic and Give the full code according to

// function calculateSumAndMean(arr, n) {
//    let sum = 0 ;
//    for(i = 0 ; i < n ; i++){
//     sum += arr[i];
//    }
//    let mean = (sum/n).toFixed(1);
//    return[
//      sum , mean
//    ]
// }
// 
// module.exports = { calculateSumAndMean };

// Write a program to find the greatest element in an array and print its value along with its index. The index should be zero- based.

// function findGreatestElementAndIndex(arr,n) {
//     let MaxElement =  arr[0];
//     let MaxIndex = 0;
// 
//     for(let i = 1 ; i < arr.length ; i++ ){
//         if(arr[i] > MaxElement){
//             MaxElement = arr[i];
//             MaxIndex = i;
//         }
//     }
//     return[MaxElement,MaxIndex];
// }
// 
// module.exports = { findGreatestElementAndIndex };

// Write a program to find the second greatest element in an array.

// function findSecondGreatestElement(arr ,n) {
//     let FirstMax = -Infinity;
//     let SecMax = -Infinity;
// 
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > FirstMax){
//             SecMax = FirstMax;
//             FirstMax = arr[i];
//         }
//         else if(arr[i] < FirstMax && arr[i] > SecMax){
//              SecMax = arr[i];
//         }
//     }
//     return SecMax;
// }
// 
// module.exports = { findSecondGreatestElement };

