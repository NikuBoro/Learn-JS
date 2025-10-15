const acId = 14452
let acEmail = "n@gmail.com"
var acPw = "12345"
acCity = "Jaipur"

let acState ;

acEmail = "h@gmail.com"
acPw = "212212"
acCity = "Beng"

console.log(acId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([acId, acEmail, acPw, acCity, acState ]);
