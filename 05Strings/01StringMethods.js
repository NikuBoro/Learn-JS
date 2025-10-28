let str = "Hello World";

console.log(str.length); //length is a property, not a function
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim()); //used on strings to remove extra spaces but only at the beginning and end of the string
console.log(str.charAt(0)); 
console.log(str.charCodeAt(0)); //returns the Unicode value (a number) of the character at a given index in a string.
console.log(str.concat(", Welcome to JS World"));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("l"));
console.log(str.slice(0,7));
console.log(str.substring(0,7));
console.log(str.substr(0,7));
console.log(str.split(" "));
console.log(str.split(" ")[0]);
console.log(str.split(" ")[1]);
console.log(str.split(" ")[2]);//undefined

console.log(str.replace("Hello", "Hi"));
console.log(str.replaceAll("o", "a"));
console.log(str.search("W"));
console.log(str.match("W"));
console.log(str.match("o"));
console.log(...str.matchAll("l"));
console.log(str.includes("W"));
console.log(str.startsWith("H"));
console.log(str.endsWith("d"))