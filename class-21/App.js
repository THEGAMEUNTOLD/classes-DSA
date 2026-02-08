// You are given an array of integers. Your task is to sort the elements of an array in ascending order using bubble sort algorithm.

// function bubbleSort(arr) {
//     // Write your logic here
//     const n = arr.length;
// 
//     for(let i = 0 ; i < n-1 ; i++ ){
//         let swapped = false;
// 
//         for(let j = 0 ; j < n - 1 - i ; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j] , arr[j + 1]] = [arr[j + 1] , arr[j]];
//                 swapped = true
//             }
//         }
//         if(!swapped) break;
//     }
//     return arr
// }
// 
// module.exports = { bubbleSort };

// You are given an array of integers. Your task is to sort the elements of an array in ascending order using bubble sort algorithm.

// function insertionSort(arr) {
//     let n = arr.length;
// 
//     for(let i = 0 ; i < n - 1 ; i++){
//         let swapped = false;
// 
//         for(let j = 0 ; j < n - 1 - i ; j++ ){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
// 
//                 swapped = true;
//              }
//         }
//         if(!swapped) break;
//     } 
//     return arr;   
// }
// 
// module.exports = { insertionSort };

// You are given an array of integers. Your task is to sort the elements of an array in ascending order using insertion sort algorithm.

// function selectionSort(arr) {
// 
//     for(i = 1 ; i < arr.length ; i++ ){
//         let key = arr[i];
//         let j = i - 1
// 
//         while(j >= 0 && arr[j] > key){
//             arr[j + 1] = arr[j];
//             j--
//         }
// 
//         arr[j + 1] = key;
//     }
//     return arr;
// }
// 
// module.exports = { selectionSort };



