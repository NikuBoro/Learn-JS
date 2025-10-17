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
console.log(typeof ob1);
console.log(ob1);

//value access
console.log(ob1['age']); //bracket notation
console.log(ob1.age); //dot notation

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