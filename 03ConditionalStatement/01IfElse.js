//Conditional statement is a statement that has one or two alternatives, depending on a boolean expression (condition) that is evaluated before the statement is executed. If the condition is true, one alternative is executed; if the condition is false, the other alternative is executed.

let hr = 8
if(hr < 18){
  greeting = "Good Day";
}else{
  greeting = "Good Evening";
}

let time = 11;
if(time<10){
  greet = "good morning";
}else if(time < 20){
  greet = "good day"
}else{
  greet = "good evening";
}

//Nested if else

  //ex1
  let num = 150;

  if(num>100){
    console.log("num is greater than 100");
    if(num<200){
      console.log("num is between 100 and 200")
    }else{
      console.log("num is greater than 200");
    }
  }else{
    console.log("num is less than 100");
  }


//ex2
let i = 20;
let j = 21;

if(i==10){
  if(j==20){
    console.log("i is 10 and j is 20")
  }else{
    console.log("i is 10 but j is not 20");
  }
}else{
  if(j == 20){
    console.log("i is not 10 but j is 20")
  }else{
    console.log("i is not 10 and j is not 20");
  }
}


let x = 8;
console.log(x%2 == 0 ? "even" : "odd"); 