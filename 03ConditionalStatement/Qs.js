// Write a function that takes a string and returns "short" if its length is less than 5, "medium" if between 5 and 10, and "long" if more than 10.

const isSize = (s)=>{
  if(s.length<5){
    return "short";
  }else if(s.length>=5 && s.length<=10){
    return "medium"
  }else{
    return "long"
  }
}

let result = isSize("kjsalhahjkdkkshjsslsjsjsj");
console.log(result);


//How would you use the && and || operators to simplify multiple conditional checks?

//&& - both conditions must be true and || means OR - atleast one condition must be true.

// How could you rewrite this using || or && to make it shorter?

// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80 && score < 90) {
//   grade = "B";
// }

let score=89;
if(score>=90){
  console.log("A");
}else if(score>=80){
  console.log("B")
}else{
  console.log("not valid");
}



