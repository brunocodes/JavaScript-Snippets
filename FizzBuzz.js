/* 											By twitter.com/brun0_batista
FizzBuzz
*/
// If a number is divisible by 3 Fizz
// If a number is divisible by 5 buzz
// If a number is divisible by both Fizz Buzz
// NOTE: You have to check if both conditions first or conditiond will never be reached 
for (let i = 0; i <= 100; i++) { // for loop starts at 0 goes to 100
		if (i % 3 == 0 && i % 5 == 0) { // if statment checks if i is divisible by 3 by cheching if the remainder of 3 equals 0  and(&&) checks if i is divisible by 5 by cheching if the remainder of 5 equals 0
			console.log('FizzBuzz'+" "+ i); // if so console logs a string FizzBuzz to the browser console
		} else if (i % 3 == 0) { // if/else statment checks if i is divisible by 3 by cheching if the remainder of 3 equals 0
			console.log('Fizz'+" "+ i); // if so console logs a string Fizz to the browser console
		} else if (i % 5 == 0) { // if/else statment checks if i is divisible by 5 by cheching if the remainder of 5 equals 0
			console.log('Buzz'+" "+ i); // if so console logs a string Buzz to the browser console
		}
	}

// You can sherten the if statement by using ternary operator instead
for(i=1; i<=100; i++) {
console.log(((i%3)?(i%5)?i:'Buzz':(i%5)?'Fizz':'FizzBuzz'));
};