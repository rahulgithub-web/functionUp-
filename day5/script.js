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
  var ele = document.getElementById("demo7");
  ele.innerHTML = ele.innerHTML.toUpperCase();
}





// <---------------------------------->





//  DATA TYPES:-

// var a= 4
// var b= 6

// console.log( "the sum is " +  ( a + b) )

// var naming":-
//  begin with alphabets
//  aplphabets , digits, _ and $ (not contain -)
// case sesitive
//  dont use reserved words

// var myCar 
// camel case :-
// start with a lower case alphabte. and if more than 1 word is there in the name, then next words to start with capital

// var a= 5 // NUmber
// var b= " hi there" // String
// var c= [ 23, 6 , "hello", 4] // array



// OBJECT
//  OBJECT is a collection of variable and their values..or keys and their values...or attributes/properties
// .. object is a collection of key - value pairs
// var person1 = {
//     "name" : "PK",
//     "age": 67,
//     "occupation": "shopkeeper",
//     "weight": "40kgs",
//     "height": "5 ft 11inch"
// } // OBJECT


// console.log( person1.name )
// console.log( person1["age"] )

// console.log( "My name is ", person1.name , " and I am of " , person1.weight)


//  STRINGS

// var str= "Functionup Is awesome. It is the best thing to happen to our lives"
// // console.log( str.length )

// var vow= " Pritesh Sir said:  \"Functionup will always be there for you \"  "  // escape character


// console.log( vow)


// NUmbers

// var num= 20
// console.log(++num)
// console.log(num)

// ++ and --


//  Math fcuntions in JS:- 
// var rst= Math.round(4.3)
// console.log(rst)

// var randomlyGeneratedNumber= Math.random() // it generates a random number between 0(inlcuding 0) and 1(not including 1).  [0, 1)
// console.log(randomlyGeneratedNumber) 

//  generate a random number between 100 to 200 [100 , 200)
// var numBw100To200= (Math.random() * 100)  + 100


//  generate a random number between 123 to 210 [123 , 210)
// var numBw123to210 = (Math.random() * 87) + 123

//  var upper = Math.ceil( 4.9999999)
// console.log(upper)

//  var lower = Math.floor( 4.999999)
// console.log(lower)

// Math.min( 12, 8, 78, 45)
// Math.max( 12, 8, 78, 45)


// <---------------------------------->

// JOURNAL
//5.) - What is your expectation from yourself in the coming week

//4.) - change in your skills

//3.) - change is discipline/habits

//2.) - Confidence change

//1.) - Progress so far