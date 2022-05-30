// 1.) Write a function that takes an array (a) and a number
// (n) as arguments. It should return the last n elements of a:
function myFunction(a, n) {
  return a.slice(-n);
}

const a = myFunction([1, 2, 3, 4, 5], 2);
const b = myFunction([1, 2, 3], 4);
const c = myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(a, b, c);
// output: [ 4, 5 ] [ 1, 2, 3 ] [ 6, 7, 8 ]

// -------------------------------------------------
// 2.) Write a function that takes two numbers (a and b) as argument
// Sum a and b, Return the result:

function myFunction1(a, b) {
  return a + b;
}
const a1 = myFunction1(1, 2);
const b1 = myFunction1(1, 10);
const c1 = myFunction1(99, 1);
console.log(a1, b1, c1);
// output: 3,11,100

// -------------------------------------------------------
// 3.) Write a function that takes two values, say a and b, 
// as arguments Return true if the two values are equal and of the same type:

function myFunction2(a, b) {
  return a === b && typeof a === typeof b;
}

const a3 = myFunction2(2, 3);
const b3 = myFunction2(3, 3);
const c3 = myFunction2(1, "1");
const d3 = myFunction2("10", "10");
console.log(a3, b3, c3, d3);
// output: false, true, false, true

// -------------------------------------------------------
// 4.) Write a function that takes a value as argument 
// Return the type of the value:

function myFunction3(a) {
  return typeof a;
}

const a4 = myFunction3(1);
const b4 = myFunction3(false);
const c4 = myFunction3({});
const d4 = myFunction3(null);
const e4 = myFunction3("string");
const f4 = myFunction3(["array"]);
console.log(a4, b4, c4, d4, e4, f4);
// output: number, boolean, object, object, string, object

// -------------------------------------------------------
// 5.) Write a function that takes a string (a) as argument
// Remove the first 3 characters of a, Return the result.

function myFunction4(a) {
  return a.substring(3);
}

const a5 = myFunction4("abcdefg");
const b5 = myFunction4("1234");
const c5 = myFunction4("fgedcba");
console.log(a5, b5, c5);
// output: defg, 4, dcba

// -------------------------------------------------------
// 6.) Write a function that takes a string as argument
// Extract the last 3 characters from the string, Return the result

function myFunction5(str) {
  return str.substr(-3);
}

const a6 = myFunction5("abcdefg");
const b6 = myFunction5("1234");
const c6 = myFunction5("fgedcba");
console.log(a6, b6, c6);
// output: efg, 234, cba

// -------------------------------------------------------
// 7.) Write a function that takes a string (a) as argument
// Get the first 3 characters of a, Return the result

function myFunction6(a) {
  return a.substr(0, 3);
}
const a7 = myFunction6("abcdefg");
const b7 = myFunction6("1234");
const c7 = myFunction6("fgedcba");
console.log(a7, b7, c7);
// output: abc 123 fge

// -------------------------------------------------------
// 8.) Write a function that takes a string (a) as argument
// Extract the first half a, Return the result

function myFunction7(a) {
  return a.slice(0, a.length / 2);
}
const a8 = myFunction7("abcdefg");
const b8 = myFunction7("1234");
const c8 = myFunction7("fgedcba");
console.log(a8, b8, c8);
// output: abc, 12, fge

// -------------------------------------------------------
// 9.) Write a function that takes a string (a) as argument
// Remove the last 3 characters of a, Return the result

function myFunction8(a) {
  return a.slice(0, a.length - 3);
}

const a9 = myFunction8("abcdefg");
const b9 = myFunction8("1234");
const c9 = myFunction8("fgedcba");
console.log(a9, b9, c9);
// output: abcd, 1, fged

// -------------------------------------------------------
// 10.) Write a function that takes two numbers (a and b) as argument
// Return b percent of a

function myFunction(a, b) {
  return (a * b) / 100;
}

const a10 = myFunction(100,50);
const b10 = myFunction(10,1);
const c10 = myFunction(500,25);
console.log(a10, b10, c10);
// output: 50, 0.1, 125  

