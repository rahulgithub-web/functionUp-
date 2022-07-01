document.getElementById("demo").innerHTML = myFunction();

document.getElementById("demo1").innerHTML = multiplication(20, 3);

function myFunction() {
  return "hello";
}

function multiplication(a, b) {
  return a * b;
}

function changeContent() {
  document.getElementById("demo3").innerHTML = "After";
}

function replaceContent() {
  document.getElementById("demo4").innerHTML = "After Hover";
}

function printText() {
  document.getElementById("demo5").innerHTML = "Hello World";
}

function capital() {
  let element = document.getElementById("demo7");
  element.innerHTML = element.innerHTML.toUpperCase();
}





// <---------------------------------->





//  DATA TYPES:-

// let a= 4
// let b= 6

// console.log( "the sum is " +  ( a + b) )

// let naming":-
//  begin with alphabets
//  aplphabets , digits, _ and $ (not contain -)
// case sesitive
//  dont use reserved words

// let myCar 
// camel case :-
// start with a lower case alphabte. and if more than 1 word is there in the name, then next words to start with capital

// let a= 5 // NUmber
// console.log(typeof(a));
// let b= " hi there" // String
// let d= {23: "1", 6:"2" , 4:"3"} // array
// let e = [2];
// console.log(typeof(e))
// console.log(typeof(d));


// OBJECT
//  OBJECT is a collection of keys and their values..or attributes/properties
// .. object is a collection of key - value pairs
// let person1 = {
//     "name" : "PK",
//     "age": [67, 90, 99],
//     "occupation": "shopkeeper",
//     "weight": "40kgs",
//     "height": "5 ft 11inch"
// } // OBJECT


// console.log( person1.name );
// console.table(person1["age"] )
// console.log(person1.age);

// console.log( "My name is ", person1.name , " and I am of" , person1.weight)


//  STRINGS

// let str= "Functionup Is awesome.It is the best thing to happen to our lives"
// console.log( str.length )

// let vow= " Pritesh Sir said:  \"Functionup will always be there for you \"  "  // escape character


// console.log(vow)


// NUmbers

// let num = 20;
// console.log(++num)
// console.log(num)

// ++ and --


//  Math functions in JS:- 
// let rst= Math.round(4.6)
// console.table(rst)

// let randomlyGeneratedNumber= Math.random() // it generates a random number between 0(inlcuding 0) and 1(not including 1).  [0, 1)
// console.log(randomlyGeneratedNumber) 

//  generate a random number between 100 to 200 [100 , 200)
// let numBw100To200= (Math.random() * 100)  + 100
// console.log(numBw100To200)

//  generate a random number between 123 to 210 [123 , 210)
// let numBw123to210 = (Math.random() * 87) + 123
// console.log(numBw123to210)

//  let upper = Math.ceil( 4.111111111111)
// console.log(upper)

//  let lower = Math.floor( 4.999999)
// console.log(lower)

// let min = Math.min( 12, 8, 78, 45);
// console.log(min);
// let max = Math.max( 12, 8, 78, 45)
// console.log(max)


// <---------------------------------->

// JOURNAL
//5.) - What is your expectation from yourself in the coming week

//4.) - change in your skills

//3.) - change is discipline/habits

//2.) - Confidence change

//1.) - Progress so far