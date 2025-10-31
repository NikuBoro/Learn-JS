/*
  Array is a special variable that can store multiple values in a single variable.

// Array
let fruits = ["apple", "banana", "orange"]

console.log(fruits)

Different way to create an array
Using the new keyword
Using the Array constructor
Using the Array.of method
Using the Array.from method
*/


// Using the `new` keyword
let fruits1 = new Array(2)

// Using the `Array` constructor
let fruits2 = Array(3)

// Using the `Array.of` method
let fruits3 = Array.of(4)

// Using the `Array.from` method

let fruits4 = Array.from("hi")

console.log(fruits1)
console.log(fruits2)
console.log(fruits3)
console.log(fruits4)


//Array methods


//push() : adds new item to the end of an array
let a = ["apple", "banana", "orange"];
a.push("grape");
console.log(a);

//pop(): removes the last item from an array
let b = ["apple", "banana", "orange"];
b.push();
console.log(b);

//shift(): removes the first item from an array
let c = ["apple", "banana", "orange"];
c.shift()
console.log(c);

//unshift(): adds new item to the beginning of am array
let d = ["apple", "banana", "orange"];
d.unshift("grape");
console.log(d);

//slice(): selects a part of an array and returns a new array
let e = ["apple", "banana", "orange", "grape"];
let citrus = e.slice(1, 3);
console.log(citrus); //['banana', 'orange']

//splice(): adds/removes items to/from an array
/*
  array.splice(start, deleteCount, item1, item2, ...)

Meaning:
start → where to begin changing the array (index position)
deleteCount → how many elements to remove
item1, item2, ... → optional: new items to insert at that spot
 */
let f = ["apple", "banana", "orange", "grape"];
f.splice(3, 0, "kiwi", "mango");
console.log(f);


//sort()
/*
1. Without compare function it prints arrays(strings) in alphabetical order

But,
With numbers (and no compare function)
let numbers = [10, 2, 30, 5];
numbers.sort();
console.log(numbers);
By default, JavaScript turns numbers into strings and compares them alphabetically:
"10" < "2" because "1" comes before "2" in Unicode.

 */

let g = ["apple", "banana", "orange", "grape"];
g.sort();
console.log(g);

let g0 = [100, 23, 32, 101, 110, 33];
g0.sort();
console.log(g0)

let g1 = [4, 9, 2, 0, 1];
g1.sort((a, b) => b - a);
console.log(g1);

let g2 = [4, 9, 2, 0, 1];
g2.sort((a, b) => a - b);
console.log(g2);

//reverse(): reverses the order of items in an array
let g4 = [1, 2, 3, 4];
g4.sort((a, b) => b - a).reverse();
console.log(g4);


//join()
//joins all items in array into a string. Turn an array into a single string.
let fruits = ["apple", "banana", "orange", "grape"]
let fruitsString = fruits.join("")
console.log(fruitsString)

//concat(): joins two or more arrays
let fruitz1 = ["apple", "banana", "orange", "grape"]
let fruitz2 = ["kiwi", "mango"]
let fruitz3 = fruitz1.concat(fruitz2);
console.log(fruitz3);

//indexOf: Finds the first position (index) where a value appears in an array.
//lastIndexOf:Finds the last position (index) where that same value appears.
//If it doesn’t find the value, it returns -1.
const nums = [1, 2, 3, 2, 4];
console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(2));

//forEach(): forEach() method lets you run a function once for every element in an array.
const fruts = ["apple", "banana", "orange", "grape"];
fruts.forEach((frut) => {
  console.log("I like", frut);
})
fruts.forEach((frut, index) => {
  console.log(index, frut);
})

const nmbrs = [1, 2, 3, 4, 5];
nmbrs.forEach((ns) => {
  console.log(ns * 2);
});


//map() : Creates a new array by performing a function on each array element
let frtuz = ["apple", "banana", "orange", "grape"];
let fruz = frtuz.map((frut) => {
  return frut + "s";
})
console.log(fruz);
//shorter arrow function version
let fruj = frtuz.map(frut => frut + "s");
console.log(fruj);

//mapa() with objects
const users = [
  { name: "Aarav", age: 20 },
  { name: "Neha", age: 22 },
  { name: "Kabir", age: 19 },
  { name: "Karan", age: 17 }

]

const names = users.map((user) => user.name);
console.log(names);

const ages = users.map((user) => user.age);
console.log(ages);

//transforming each user into a sentence:
const info = users.map((user) => `${user.name} is ${user.age} years old`);
console.log(info);
/*
map() can:
✅ Work on numbers → transform values
✅ Work on strings → change text
✅ Work on objects → extract or modify data
*/

//filter(): filter() creates a new array with only the elements that pass a test (a condition you write).
const numberz = [1, 2, 3, 4, 5, 6];
const even = numberz.filter((nz) => nz % 2 == 0);
console.log(even);
const odd = numberz.filter((nz) => nz % 2 !== 0);
console.log(odd);

const adults = users.filter((user) => user.age > 18);
console.log(adults);

//combining map() and filter()
const combs = numberz
  .filter((nz) => nz % 2 === 0)
  .map((n) => n * n);
console.log(combs);