const name = "nikx";
const repoCount = 50

// console.log(name + repoCount + "Val")

console.log(`heloo my name ${name} and my repo count is ${repoCount}`);

const gameName = new String('nikz-bd-bs')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('-'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(1, -3);
console.log(anotherString)

const newStringOne = "  nikxz  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nick.com/nick%20bd";
console.log(url.replace("%20", "-"));

console.log(url.includes('nickz')); // false

console.log(gameName.split('-'));
console.log(gameName.split('b'));
