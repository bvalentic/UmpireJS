// Write a function that determines if a string is a palindrome (the string is the same forwards and backwards)
// The function should return the Boolean true if it is a palindrome, and false if not

function palindrome(string) {
  let reverse = string.split("").reverse().join("");
  console.log(reverse);
  if (string === reverse) {
    return true
  } else return false
}

console.log('"racecar" is a palindrome: ' + palindrome("racecar"))
console.log('"hello world" is a palindrome: ' + palindrome("hello world"))
