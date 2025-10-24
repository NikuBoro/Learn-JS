//Type casting is the process of converting one data type to another

//Implicit type conversion(Type Coercion): This is when JS automatically converts one data type to another.  For example, when you add a number to a string, JavaScript will convert the number to a string and then concatenate them.

//Explicit type conversion(Type Casting): This is when programmer manually converts one data type to another using functions like Number(), String(), or Boolean().


//implicit type conversion
let x = 10;
let y = 20;
let res = x + y;
console.log(res);

let a = "100" + 23;
console.log(a) //10023
console.log(typeof(a)); //string
let a1 = 20 + 30 + '400';
console.log(a1); //50400

let a2 = "20" + 30 + 40;
console.log(a2); //203040
console.log(typeof(a2));

let a3 = 10 + "20" + 30;
console.log(a3); //102030
console.log(typeof(a3));


//explicit type conversion

let x1 = 10;
let y1 = "20";
let rez = x + Number(y1);
console.log(rez); // 30
console.log(typeof(rez)) // Number

//string to integer type casting
let age1 = "20";
console.log(typeof(age1));
age1 = Number(age1)
console.log(typeof(age1));

//integr to string type casting
let age2 = 30;
console.log(typeof(age2));
age2 = String(age2);
console.log(typeof(age2))