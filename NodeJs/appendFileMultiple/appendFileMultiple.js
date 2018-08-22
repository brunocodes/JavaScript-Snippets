// appends appendFile to file and so on 
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

appendFile = './test2.csv';  // third file
readAppend(file, appendFile);