// Write a function to return the factorial of a number.
// The factorial of a number (n!) is n * n -1 * ... * 1
// Ex. 4! is 4 * 3 * 2 * 1 = 24

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(`1! = ${factorial(1)}`);
console.log(`2! = ${factorial(2)}`);
console.log(`3! = ${factorial(3)}`);
console.log(`4! = ${factorial(4)}`);
console.log(`5! = ${factorial(5)}`);
