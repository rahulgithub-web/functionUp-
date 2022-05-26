// -------------------- CRUD OPERATIONS IN OBJECT ------------------  
// 1.) C - CREATE
// 2.) R - READ
// 3.) U - Update
// 4.) D - Delete

// Creating Object
// let obj = {
//     "name": "Rahul",
//     "place": "bang",
//     "country": "india"
// }

// Reading Object
// console.log(obj.name);
// output: Rahul

// const d = "name";  //getting value by key
// const e = obj[d];
// console.log(e);

// // Updating Object
// const u = obj.name = "bang";
// console.log(obj);  // output: { name: 'bang', place: 'bang', country: 'india' }

// // Remove Object
// const r = delete obj.name;
// console.log(obj);  //output: { place: 'bang', country: 'india' }

// // Add Object
// const a = obj.age = 23;
// console.log(obj);  //output: { place: 'bang', country: 'india', age: 23 }

// -------------- CRUD OPERATIONS ---------------------

// const person = {
//   name: "John",
//   gender: "Male",
//   like: ["coding", "cycling", "internet"],
//   address: {
//     city: "bangalore",
//     pincode: 560017,
//     country: "india",
//   },
// };

// person.like[1];
// console.log(person);

// ----------------------------------------
// const facebookData = [
//   {
//     name: "John",
//     age: 21,
//     gender: "male",
//   },
//   {
//     name: "Rahul",
//     age: 23,
//     gender: "male",
//   },
//   {
//     name: "Kajol",
//     age: 20,
//     gender: "female",
//   },
// ];

// console.log(facebookData[1].age); //output: 23

// ------------------------------------
// const abc = [5, 6, 7, 8, 9, 10, 11, 12, 13];
// const efg = {
//   name: "pagal",
//   name: "nanhi",
//   city: "patna",
//   country: "bihar",
// };

// console.log(efg);

// --------------------------------------
// list of the keys
// const person = {
//   name: "John",
//   gender: "male",
//   city: "patna",
// };

// const k = Object.keys(person);
// console.log(k);

// --------------------------------------
// list of the values
// const person = {
//     name: "John",
//     gender: "male",
//     city: "patna",
//   };

//   const v = Object.values(person);
//   console.log(v);

//   ---------------------------
//   spread, destructure
// const unknown = {
//     name: "unknown",
//     gender: "male",
//     city: "patna",
// }

// const un = {...unknown};
// console.log(un);

// ---------------------------------
// unpack name and city
// const unknown = {
//     names: "unknown",
//     gender: "male",
//     city: "patna",
// }
// console.log(unknown.city)

// const { names, gender, city} = unknown;

// console.log(names, gender, city);

// const name = unknown.name;
// const city = unknown.city;
// console.log(unknown.gender);

// const arr1 = [1,4,5,7];

// console.log(arr1[0]);

// ------------------------------------
// destructure
// const unknown = {
//     name: "unknown",
//     gender: "male",
//     city: "patna",
// }

// const n = {name, gender, city}

// ------------------------------------
// freeze
// const obj = {
//     prop: 56,
// };

// Object.freeze(obj);

// obj.prop = 96;

// console.log(obj);

// ------------------------------------
// seal

// console.log('');
