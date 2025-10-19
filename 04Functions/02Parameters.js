function greet(name){ //name is a parameter
  console.log("Hello, "+ name);
}
greet("Nikx"); //Nikx is an argument

//named functions with parameters
function add(a, b){
  console.log(a + b);
}
add(1,2);

function sub(a, b){
  console.log(a-b);
}
sub(3,1);


//anonymous function with parameters
const add1 = function(a, b){
  if(a === Number(10) && b === Number(5)){
    console.log(a+b);
  }else{
    console.log("invalid input");
  }
}
add1(3,4)

//arrow function with parameters
const add2 = (num1, num2)=>{
  console.log(num1 + num2)
}
add2(10, 20);

//IIFE with parameters
(function(a,b){
  console.log(a+b);
})(10,5);


//NaN

function add(x, y){
  console.log(x+y);
}
add(10) // NaN .  when you try to perform arithmetic operations with undefined, the result is NaN. This is because undefined cannot be converted to a number in a meaningful way.

function sum(num1, num2){
  if(num2 === undefined){
    console.log("Please provide two numbers")
  }else{
    console.log(num1 + num2);
  }
}
sum(2); //Please provide two numbers

function addition(a,b){
  console.log(a + (b || 0));
}
addition(2);

//arrow function with default parameters
const add3 = (x, y=10)=>{
  console.log(x+y);
}
add3(12);

//alert, confirm
// alert("hello world");
// confirm("hello earth");

//user input
// let name = prompt("Enter your name: ");
// console.log(name);