/*
  Number methods are functions that are built into the JavaScript language. They are used to perform operations on numbers.

toString() Returns a number as a string
toExponential() Returns a number written in exponential notation
toFixed() Returns a number written with a number of decimals
valueOf() Returns a number as a number
toPrecision() Returns a number written with a specified number of digits
isInteger() Returns true if the value is an integer
isNaN() Returns true if the value is NaN
parseFloat() Parses an argument (converting a string to a floating-point number)
parseInt() Parses an argument (converting a string to an integer)
prototype Allows you to add properties and methods to an object
*/


let num = 10;

console.log(num.toString()); //"10"

console.log(num.toExponential()); //1e+1

console.log(num.toFixed(2)); //controls digits appearing after decimal

console.log(num.valueOf()); //unwraps the object and gives you the plain value inside.

let num1 = new Number(100.7);
console.log(num1+50); //JavaScript automatically calls valueOf() on the object to get its primitive value first. So it becomes effectively 100+50

console.log(num.toPrecision(2)) //controls total digits (before + after), rounding if necessary.

console.log(Number.isInteger(num));

console.log(Number.isNaN(num));

let num3="45.5xv"
let num4 = "gh12.7"
console.log(parseFloat(num3));
console.log(parseFloat(num4));

console.log(parseInt(num1));

