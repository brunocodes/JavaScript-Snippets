/* JavaScript Snippets*/ 


/* Geolocation built in Function */
// navigator globle veriable 
// navigator.geolocation
// asynchronous implementation
navigator.geolocation.getCurrentPosition(function(position) {
	document.write(position.coords.latitude + ', ' + position.coords.longitude);
});