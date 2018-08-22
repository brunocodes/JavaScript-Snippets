/* Capitalize first letter of ever word in a string 
 letter Capitalize  function */ 
// 

function letterCapitalize(str) {
	var words = str.split(" ");
	
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].substr(0 ,1).toUpperCase() + words[i].substr(1);
	}

return words.join(" ");

}

letterCapitalize("argument goes here"); // readline function not work ing maybe 