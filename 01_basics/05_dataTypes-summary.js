// Primitive

// 7 types : String, Num, Bool, null, undefinded, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail ;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12334444444444456667899n


//Reference (non primitive)

//Array , Objects, Functions

const heros = ["sman", "nagraj", "doga"] 

let myObj = {
  name: "nikx",
  age: 23
}

const myFun = function(){
  console.log("hello !")
}

console.log(typeof outsideTemp) //prints null
console.log(typeof myFun) // object function