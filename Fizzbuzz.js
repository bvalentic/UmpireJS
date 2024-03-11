// Write a function that prints the integers 1 to 100 using FizzBuzz rules:
// Any number divisible by 3 is replaced with the string "fizz"
// Any number divisible by 5 is replaced with the string "buzz"
// Any number divisible by both 3 and 5 is replaced with the string "fizzbuzz"

for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
}
