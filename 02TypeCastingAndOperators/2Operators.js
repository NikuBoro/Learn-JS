// Operators are symbols that perform operations on variables and values. JavaScript provides various types of operators, including:

// Arithmetic Operators: Used to perform mathematical operations.
// Assignment Operators: Used to assign values to variables.
// Comparison Operators: Used to compare values.
// Logical Operators: Used to perform logical operations.
// Bitwise Operators: Used to perform bitwise operations.
// String Operators: Used to concatenate strings.
// Conditional (Ternary) Operator: Used to perform conditional operations.
// Nullish Coalescing Operator
// Spread Operator
// Rest operator


//1. Arithmetic 

let num1 = 10;
let num2 = 20;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);
console.log(num1%num2); // modulus - returns reminder of a division

num1++ //increment
console.log(num1) // 11

num1-- //decrement
console.log(num1); //10

for(let i=0; i<=10; i++){
  console.log(i);
}

for(let i =10; i>=0; i--){
  console.log(i);
}

for(let i =4; i>=-2; i-- ){
  console.log(i);
}


//2. Assignment - these operators are used to assign values to variables

// Simple Assignment (=): Assigns a value to a variable.
// Addition Assignment (+=): Adds a value to a variable and assigns the result to the variable.
// Subtraction Assignment (-=): Subtracts a value from a variable and assigns the result to the variable.
// Multiplication Assignment (*=): Multiplies a variable by a value and assigns the result to the variable.
// Division Assignment (/=): Divides a variable by a value and assigns the result to the variable.
// Modulus Assignment (%=): Calculates the remainder of a division and assigns the result to the variable.
// Exponentiation Assignment (=)**: Raises a variable to the power of a value and assigns the result to the variable.

let numx = 100;
numx += 200;
console.log(numx); 

numx -= 50;
console.log(numx)

numx *= 2;
console.log(numx);

numx /= 100;
console.log(numx)

numx **= 2;
console.log(numx)

numx %= 5;
console.log(numx)


//comparision operators - these are used to compare values

/*
Equal (==): Checks if two values are equal.
Strict Equal (===): Checks if two values are equal and of the same type.
Not Equal (!=): Checks if two values are not equal.
Strict Not Equal (!==): Checks if two values are not equal and not of the same type.
Greater than (>): Checks if one value is greater than another.
Less than (<): Checks if one value is less than another.
Greater than or equal (>=): Checks if one value is greater than or equal to another.
Less than or equal (<=): Checks if one value is less than or equal to another.
 */

let x = 10;
let y = 15;

console.log(x == y) //false
console.log(x === y) //false
console.log(x != y) //true
console.log(x !== y) //true
console.log(x > y) //false
console.log(x < y) //true
console.log(x >= y) //false
console.log(x <= y) //true


//Logical operators 
/*
Logical AND (&&): Returns true if both operands are true.
Logical OR (||): Returns true if at least one operand is true.
Logical NOT (!): Returns the opposite boolean value.
*/

let Y = true;
let N = false;

console.log(Y && N); //false
console.log(Y || N); //true
console.log(!Y); //false
console.log(N || Y); //true
console.log(N && Y); //false


let n1 = 10;
let n2 = 20;

//AND
console.log(n1>20 && n2<10); //false;
console.log(n1>5 && n2<10); //false;
console.log(n1>5 && n2>10); //true

//OR
console.log(n1>20 || n2<10); //false;
console.log(n1>5 || n2<10); //true

//NOT
console.log(n1 != 10); //false


/*
String operators are used to concatenate strings.

Concatenation (+): Concatenates two strings.
*/

let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2); // Hello World . But in modern way we use string interpolation.


//Conditional (ternary) operator
//The conditional (ternary) operator is used to perform conditional operations.

let age = 19;
let canVote = age>=18 ? 'Yes': 'No';
console.log(canVote);

let s1 = "Hello World";
let s2 = "Bye World";

true ? console.log(s1) : console.log(s2);
false ? console.log(s1) : console.log(s2);


//Nullish Coalescing Operator
//The nullish coalescing operator is used to provide a default value if a variable is null or undefined.
let x1 = 10;
let y1 = null;
let z1 = undefined;

console.log(x1 ?? y1 ?? z1 ); 
console.log(y1 ?? x1 ?? z1 );
console.log(z1 ?? y1 ?? x1 );

//but
let count = 0;
console.log(count || 10); //prints 10
//then
console.log(count ?? 10); //prints 0


//Spread Operator
//The spread operator , also known as spread syntax , is used to expand an array or an object into a new array or object. It is denoted by ... sybol

//ex1.copying an array
const oldArr = [1,2,3];
const newArr = [...oldArr];
console.log(newArr); // [1,2,3]

//ex2.Merging objects
const oldObj = {a:1, b:2};
const newObj = {...oldObj, c:3};
console.log(newObj); // {a:1, b:2, c:3}

//Passing an array as arguments to a fn.
function myFun(a, b, c){
  console.log(a, b, c)
}
const args = [1, 2, 3]
myFun(...args); //123


//Rest Operator
//The rest operator, also denoted by the … symbol, is used to collect the rest of the elements in an array or the rest of the properties in an object into a new array or object.

//ex1.collecting the rest of the elements in an array
function myFn(a, b, ...rest){
  console.log(a, b, rest);
}
myFn(1,2,3,4,5); // 1 2 [3,4,5]

//ex2.collecting the rest of the properties in an object
const myObj = {a: 1, b: 2, c: 3, d: 4}
const {a, b, ...rest} = myObj;
console.log(a,b,rest); // 1 2 {c:3, d:4}

//ex3.using rest operator in array destructuring 
const arr = [1,2,3,4,5];
const[c, d, ...rests] = arr;
console.log(a, b, rests);


//Important** Rest is used in a function definition while spread is used in a function call. Rest -> Collect & Spread-> Unpack
