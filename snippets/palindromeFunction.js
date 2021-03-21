// Palindrome Function
// Check if  word is is spelt the same why backwarders 

function checker(word) {
	var palindrome = word.split('').reverse().join('');
	if (word == palindrome) {
		console.log("Is Palindrome");
	}
	else {
		console.log("Not Palindrome")
	}	
}

checker("racecar")

