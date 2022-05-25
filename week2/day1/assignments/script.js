// 1. print all odd numbers in natural numbers from 20 to 50
// @rahulbarnwal

// let odd;
// for (odd = 20; odd <= 50; ++odd)
//   if (odd % 2 !== 0) {
//     console.log(odd);
//   }

//   output: 21,25,27,29,31,33,35,37,39,41,43,45,47,49

// <----------------------------------------------------------------->

// 2. print all numbers that are divisible by 5
// @rahulbarnwal

// let numbers = [12, 45, 67, 89, 90, 34, 35, 55];
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 5 === 0) {
//         console.log(numbers[i]);
//     }
// }

// output: 45,90,35,55

//<----------------------------------------------------------------->

// 3. Print all numbers of this array.
// @rahulbarnwal

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }

// output: 1,2,3,4,5,6,7,8
// <----------------------------------------------------------------->

// 4. Print all prime numbers occurring in 1st 50 natural numbers
// @rahulbarnwal

// let count = 0;
// for (let i = 1; i < 51; i++) {
//   for (j = 2; j < i; j++) {
//     if (i % j === 0) {
//       count++;
//       break;
//     }
//   }
//   if (count === 0) {
//     console.log(i);
//   }
//   count = 0;
// }

// output:  1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, and 47. 

// <----------------------------------------------------------------->

// How to Find the Average of an Array in Javascript?   
// @rahulbarnwal

// const calculateAverage = (arr) => arr.reduce((a,b) => a+b, 0) / arr.length ;

// let arr1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(arr1));
// // output: 3

// let arr2 = [12, 34, 45, 43];
// console.log(calculateAverage(arr2));
// // output: 33.5

// let arr3 = [2, 4, 6, 8, 10];
// console.log(calculateAverage(arr3));
// // output: 6   



