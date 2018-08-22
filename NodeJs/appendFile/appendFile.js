// appends appendFile to file 
const fs = require('fs');

function readAppend(file, appendFile){
	fs.readFile(appendFile, (err, data) => {
    	if (err) throw err;
    	console.log('File was read');

    fs.appendFile(file, data, (err) => {
  		if (err) throw err;
  		console.log('The "data to append" was appended to file!');
	});
	});
}

file = './head_File.csv'; // first file 

appendFile = './test1.csv'; // second file
readAppend(file, appendFile); 

/*
Q: is there any way in which the header row does not duplicate in the final merged file.
Good question, I don't recall off the top of my head. However, you can call a function to delete the top row from a file before appending, by calling:     
document.getElementById("myTable").deleteRow(0);          
Be glad to look more into it if this doesn't solve your problem!﻿
*/