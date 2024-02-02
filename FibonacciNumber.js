// Given an integer n, write a function to compute the nth Fibonacci number.

// e.g. fibonacci(1) = 1; fibonacci(5) = 5; fibonacci(10) = 55;

function fibonacci(n) {
    // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
    // n = n-2 + n-1
    
    let fibonacciNumbers = [1, 1, 2]; // initial set to start

    if (n <= fibonacciNumbers.length) {
        return fibonacciNumbers[n - 1];
    } else {
        let i = fibonacciNumbers.length; // currently 3
        while (i <= n) {
            fibonacciNumbers[i] = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1];
            i++;
        }
        return fibonacciNumbers[n - 1];
    }
}

for (let i = 1; i <= 10; i++) {
    console.log("fibonacci(" + i + ") = " + fibonacci(i));
}
