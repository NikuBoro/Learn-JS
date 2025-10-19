//named functions
function hello(){
  console.log("hello world");
}
hello();

//anonymous function
const nikx = function(){
  console.log("hello nikx");
};
nikx();

//arrow function 
const nikz = (a, b)=>{
  console.log(a+b)
}
nikz(2, 3);

//IIFE (immediately invoked function expression)
(function(){
  console.log("hello guys");
})();