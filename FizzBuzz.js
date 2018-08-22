/* By twitter.com/brun0_batista
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


/* you could shorten the first if statement boolean expression as follows:
i % 3 == 0 && i % 3 == 5 is exactly the same as i % 15 == 0
What that means is that anything divisible by both 3 and 5 must be divisible by their product, which is 3 x 5 = 15 */

// You can sherten the if statement by using ****** instead
i % 3 == 0 && i % 5 == 0 ? console.log('FizzBuzz'+" "+ i):
i % 3 == 0 ? console.log('Fizz'+" "+ i) :
i % 5 == 0 ? console.log('Buzz'+" "+ i)