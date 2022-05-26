// -------------------   Functions  ----------------
// -A set of statements that performs a task.

// ==> Example 1
// let a = 6;
// let b = 5;

// function add() {
//     return a + b;
// }
// console.log(add());
output: 11;

// ----------------------------------------
// ==> Example 2

// function abc() {
//     let c = 10;
//     c = c + 8;
//     console.log(c);
// }
// abc();
output: 18;

// 1.) We can run from anywhere
// 2.) We can reuse the code

// abc() run the code which is inside the function abc

// ----------------------------------------
// ==> Return Keyword
// -It gives the power to send the output.

// function abc() {
//     let c = 7;
//     c = c + 9;
//     console.log(c);
//     return c;
// }
// const b = abc();
// console.log(b);
output: 16;

// --The default return value is 'undefined';

// ----------------------------------------
// ===> Parameters and Arguments in Functions.
// => Example 1

// function sum(a,b) {
// Passing Parameters as a nad b.
// const c = a + b;
// return c;
// returning the result of a & b in c.
// }
// const d = sum(45,11);
//  Passing Arguments as 45 and 11.
// console.log(d);
output: 56;

// ----------------------------------------
// ==> Example 2

// function sumTwo() {
//     const c = a+b;
//     return c;
// }
// sumTwo();

// function sumThree(a,b,c) {
//     return a+b+c;
// }
// sumThree();

// ----------------------------------------
// ==> Example 3
// --sum of all the inputs using Rest Parameter.

// function sumAll(...n) {
//     console.log(n);
// }

// sumAll(7,8);
output: [7, 8];
// sumAll(10,11,12,13,14,15);
output: [10, 11, 12, 13, 14, 15];

// ----------------------------------------
// ==> Example 4
// --how to handle multiple inputs using loop and convert it into array.

// function sum(...n) {
//     console.log("this is n: ", n);
// }

// sum(6,4,2,1,9);
output: [6, 4, 2, 1, 9];

//----------------------------------------
// ==> Example 4

// function sum(a,b) {
//     const c = a*b;
//     return c;
// }
// console.log(sum(4,6,2));
output: 24;

//----------------------------------------
// ==> Example 5
// --Handling Edge Cases

// function multiply(a, b, c) {
//   if (a === 0 || b === 0 || c === 0) {
//     return 0;
//   }
//   return (a || 1) * (b || 1) * (c || 1);
// }

// console.log(multiply(87, 65, 92));
output: 520260;
// console.log(multiply(6, 5));
output: 30;
// console.log(multiply(2, 3, 0));
output: 0;

//----------------------------------------   
// ==> Example 6
// --Arrow Functions: 
// =>It allows us to write shorter functions

// let myFunction = (a,b) => a * b;
// let result = myFunction(4,5);
// console.log(result);

output: 20;

//----------------------------------------   
// ==> Example 7
