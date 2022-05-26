// console.log(+![]);
// console.log(![] + []);
// console.log(![]+[].toString());
// console.log(+{});
// console.log([] + {});
// console.log([][[]]);
// console.log(+!![]/+![]);

// -------------------------------------------------------------------  

// This is How to Check if an Array is Empty or Not in Javascript
// @rahulbarnwal

// const checkEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

// let arr1 = [1, 2, 3, 4, 5];
// console.log(checkEmptyArray(arr1));
// output: false

// let arr2 = [];
// console.log(checkEmptyArray(arr2));
// output: true

// let arr3 = [""];
// console.log(checkEmptyArray(arr3));
// output: false

// ---------------------------------------------------   

// let a = 5;
// let b = 6;
// {
//   console.log(b);
//   {
//     console.log(a);
//   }
// }

// console.log(boolean(a));
// console.log(boolean(b));
// console.log(a && b);
// console.log(b && a);
// console.log(a ||  b);
// console.log(b || a);

// a = 3, b=2, c=8, d=9;
// console.log(a || b || c || d);
// console.log(a && b && c && d);
// console.log(d && a && b && c);



// Spread Operator --------------------------
// let a = [2,4,7,9,55];
// console.log(...a);

// let b = [9,6,5,4,33];
// let c = a.concat(b);
// console.log(c);
// let d = [...a, ...b]
// console.log(d);



// Destructing Operator --------------------
// let z = [4,6,8,9,33];

// let [y,x, ,e] = z;
// console.log(y);
// console.log(e);

// rest operator -----------------------------
// let m = [1,2,3,4,5,6,7,];

// let [n,o,p, ...f] = m;
// console.log(n,o,p);
// console.log(...f);

// Multidimensional Array -------------------- 
// create an array    
// const a = [
//     [1,'go', 4],
//     [56,95, 23],
//     [75],
//     ['Hello']
// ]

// Read //name[index]
// console.log(a[1][2]);
// console.log(a[2][0]);
// console.log(a[3][0]);


// Updating Array ------------------------ 
// const b = [4,8,6,9,2];
// console.log(b[3]);

// b[3] = 45;
// console.log(b);

// to remove items of an array ------------------  
// b.pop([3]);
// console.log(b);


// find the length of an array--------------------
// console.log(b.length);

// remove the item at 3 element;
// const z = [5,8,3,6,9];
// let y = z.splice(3, 1);
// console.log(y);

// toString Method -------------z--------- 
// let o = [7,9,0,3,30];
// let k = o.toString();
// console.log(k); 
// console.log(+![]);
// console.log(![] + []);
// console.log(![]+[].toString());
// console.log(+{});
// console.log([] + {});
// console.log([][[]]);
// console.log(+!![]/+![]);

// This is How to Check if an Array is Empty or Not in Javascript
// @rahulbarnwal

// const checkEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

// let arr1 = [1, 2, 3, 4, 5];
// console.log(checkEmptyArray(arr1));
// output: false

// let arr2 = [];
// console.log(checkEmptyArray(arr2));
// output: true

// let arr3 = [""];
// console.log(checkEmptyArray(arr3));
// output: false

// let a = 5;
// let b = 6;
// {
//   console.log(b);
//   {
//     console.log(a);
//   }
// }

// console.log(boolean(a));
// console.log(boolean(b));
// console.log(a && b);
// console.log(b && a);
// console.log(a ||  b);
// console.log(b || a);

// a = 3, b=2, c=8, d=9;
// console.log(a || b || c || d);
// console.log(a && b && c && d);
// console.log(d && a && b && c);



// Spread Operator --------------------------
// let a = [2,4,7,9,55];
// console.log(...a);

// let b = [9,6,5,4,33];
// let c = a.concat(b);
// console.log(c);
// let d = [...a, ...b]
// console.log(d);



// Destructing Operator --------------------
// let z = [4,6,8,9,33];

// let [y,x, ,e] = z;
// console.log(y);
// console.log(e);

// rest operator -----------------------------
// let m = [1,2,3,4,5,6,7,];

// let [n,o,p, ...f] = m;
// console.log(n,o,p);
// console.log(...f);

// Multidimensional Array -------------------- 
// create an array    
// const a = [
//     [1,'go', 4],
//     [56,95, 23],
//     [75],
//     ['Hello']
// ]

// Read //name[index]
// console.log(a[1][2]);
// console.log(a[2][0]);
// console.log(a[3][0]);


// Updating Array ------------------------ 
// const b = [4,8,6,9,2];
// console.log(b[3]);

// b[3] = 45;
// console.log(b);

// to remove items of an array ------------------  
// b.pop([3]);
// console.log(b);


// find the length of an array--------------------
// console.log(b.length);

// remove the item at 3 element;
// let arr = [5,8,3,6,9];
// let arr4 = arr.splice(3, 1);
// console.log(arr4);

// flat method ------------------------
// let arr1 = [3,5,7,90,[3,87,45]];
// let arr2 = arr1.flat();
// console.log(arr2); 

// splice Method -----------------------------  
// const arr5 = ['mon','wed','thurs'];
// const arr6 = arr.splice(1,0,'tues');
// console.log(arr5);   // output: ["mon", "tues", "wed", "thurs"] 

// const arr7 = arr.splice(4,0,'fri');
// console.log(arr5);  //output; ["mon", "tues", "wed", "thurs", 'fri']

// const arr8 = arr.splice(4,1, 'sat');
// console.log(arr5); //output; ["mon", "tues", "wed", "thurs", 'sat']

console.log(Boolean("s"));
console.log(Boolean(`s`));


