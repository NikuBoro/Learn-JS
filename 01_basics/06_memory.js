// Stack(primitive), Heap(non-primitive)

let myName = "ncom";

let anotherName = myName;

anotherName = "chaaurcode";

console.log(myName);
console.log(anotherName);

let user1 = {
  email : "user@g.com",
  upi: "user@ybl"
}

let user2 = user1

user2.email = "n@g.com"

console.log(user1.email);
console.log(user2.email);
