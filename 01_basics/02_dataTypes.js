"use strict"; // treat all js code as newer version

// alert() we r using node js not browser

//code readability should be high
console.log("Nikz");

let name = "nikz"
let age = 23
let isLoggedIn = false;

//number => 2 to power 53
//bigInt 
//string => ""
//boolean
//null => standAlone value
//undefined
//symbol => used in uniqueness of components

//object

console.log(typeof null); //object


//objects

//objects in javascript are complex data types that can hold multiple values and properties

//ex1
let ob1 = {
  name: "nick",
  age: 23
}

let key = "name"

console.log(typeof ob1);
console.log(ob1);

//value access
console.log(ob1['age']); //bracket notation
console.log(ob1.age); //dot notation

console.log(ob1[name]); //works
console.log(ob1.name); //undefined

let p1 = {
  "first name": "Jacob"
}
console.log(p1["first name"])// this way works

let prop = "age";
let obz = {age: 30};
console.log(obz[prop]); //30
console.log(obz.prop) //undefined as prop has no value as a key

//ex2
let fruits = {
  f1 : "apple",
  f2 : "banana"
}
console.log(fruits.f1);
console.log(fruits["f1"]);
console.log(fruits.f2)

//ex3
let person = {
  name : "nix",
  age : 23,
  address: "delhi",
  hobbies : ["cricket", "football", "coding"],
  marks: {
    maths: 90,
    science: 80
  }
};

console.log(person);
console.log(person.hobbies);
console.log(person["hobbies"]);
console.log(person.hobbies[0], person.hobbies[2]);
console.log(person.marks.maths)
console.log(person.marks['maths']);

//Arrays
//Arrays are ordered lists of values.

// ex1
let fruitz = ['apple', 'banana', 'orange'];
console.log(fruitz);

//ex2
let array1 = [
  "nikx",
  23,
  {
    name: "nikx",
    age: 23,
  },
  ["apple", "banana", "cherry"],
];

console.log(array1);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]["name"]);
console.log(array1[2].name);
console.log(array1[3][2]);

//ex3
let array2 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(array2[1][2]);
console.log(array2[2][1]);


//Very Important:
//undefined-> missing value/not assigned
//null->explicitly set to "no value"
// let y = null;
// console.log(y); //null


//Functions
//Functions in javascript are reusable blocks of code that can be called to perform a specific task. 

//ex1
function greet(name){
  return `Hello, ${name}`
}
console.log(greet("Nikx")); // hello, Nikx

//ex2
function add(a, b){
  return a + b;
}
console.log(add(20, 30)); // 50

//ex3
function multiply(a, b){
  return a*b;
}
console.log(multiply(2, 5)); // 10

//ex4
function divide(a, b){
  return a/b;
}
console.log(divide(10, 2)); //5

//ex5
function subtract(a, b){
  return a-b;
}
console.log(subtract(12, 7));

//Arrow function
const adding =(a,b)=>{
  return a + b;
}
console.log(adding(4,6));