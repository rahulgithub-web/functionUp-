//1. print all odd numbers in natural numbers from 20 to 50

let odd;
for (odd = 20; odd <= 50; ++odd)
  if (odd % 2 !== 0) {
    console.log(odd);
  }

// <----------------------------------------------------------------->

// 2. print all numbers that are divisible by 5

// let numbers = [12, 45, 67, 89, 90, 34, 35, 55];
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 5 === 0) {
//         console.log(numbers[i]);
//     }
// }

// <----------------------------------------------------------------->

// 3. Print all numbers of this array

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

// <----------------------------------------------------------------->

// 4. Print all prime numbers occurring in 1st 50 natural numbers

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
