// Write a function to calculate the number of digits in a string.

function digitsInString(string) {
  let stringArray = string.split("");
  let count = 0;
  for (let i = 0; i < 10; i++) {
    stringArray.forEach((character) => {
      if (character === i.toString()) {
        count++;
      }
    })
  }
  return count;
}

let sample = "abc123" // 3
let sample2 = "a1s2d3f4g5" // 5
let sample3 = "hello world" // 0

console.log(digitsInString(sample))
console.log(digitsInString(sample2))
console.log(digitsInString(sample3))
