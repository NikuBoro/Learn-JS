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

let g1 =[4,9,2,0,1];
g1.sort((a,b)=>b-a);
console.log(g1);

let g2 = [4,9,2,0,1];
g2.sort((a,b)=>a-b);
console.log(g2);