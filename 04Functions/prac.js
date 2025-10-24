//Function declaration is when u define a named function that can be called later. They are hoisted because we can call them before they're defined.
//Function expressions are not hoisted bcz we must define them before using.

const max = (a, b) => {
  if (a > b) {
    return `max between ${a} and ${b} is: ${a}`
  } else {
    return `max between ${a} and ${b} is: ${b}`
  }
}

let result = max(3, 4);
console.log(result);


//2.Explain the concept of higher-order functions. Can you provide an example of a higher-order function that takes another function as an argument?

/*
In JavaScript, functions are first-class citizens — meaning they can be:

stored in variables,

passed as arguments to other functions,

or even returned from functions.

A higher-order function is any function that does one or both of these:

Takes another function as an argument, or

Returns a function as its result.
 */

//ex1
function greetUser(name){
  return `Hello ${name}`;
}
//higher order function
function processUser(greetFn, userName){
  return greetFn(userName);
}
console.log(processUser(greetUser, "Nikx"));

//ex2
function multiplier(factor){
  return function (number){
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5));

//ex3
function sayHi(){
  return "HII";
}
function sayHiTwice(fn){
  console.log(fn());
  console.log(fn());
}
sayHiTwice(sayHi);


//Built-in js high-order functions
const numbers = [1,2,3,4];

//map() takes a fn as an argument
const squares = numbers.map(n=>n*n);
console.log(squares);

//filter() takes a fn that decides what to keep
const evens = numbers.filter(n=>n%2 ===0);
console.log(evens);

//forEach() takes a fn to run on each element
numbers.forEach(n=>console.log(n));


//3. How do you create a function that accepts a varying number of arguments using the rest operator?
const sum = (...numbers)=>{
  return numbers.reduce((total, n)=> total+n, 0); //total->fun tells how to combine each value, 0->starting value.
}
console.log(sum(2,4));
console.log(sum(1,2,3,4));

function summ(...numbers){
  let total = 0;
  for(let n of numbers){
    total = total+n;
  }
  return total;
}

console.log(summ(1,2,3));