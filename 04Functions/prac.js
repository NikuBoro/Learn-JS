const max = (a, b) => {
  if (a > b) {
    return `max between ${a} and ${b} is: ${a}`
  } else {
    return `max between ${a} and ${b} is: ${b}`
  }
}

let result = max(3, 4);
console.log(result);