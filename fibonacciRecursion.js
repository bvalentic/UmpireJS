// Given an integer n, write a recursive function to compute the nth Fibonacci number.

// e.g. fibonacci(1) = 1; fibonacci(5) = 5; fibonacci(10) = 55;

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

console.log(`fibonacci(1): ${fibonacci(1)}`);
console.log(`fibonacci(5): ${fibonacci(5)}`);
console.log(`fibonacci(10): ${fibonacci(10)}`);
