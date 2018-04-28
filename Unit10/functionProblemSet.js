// Problem 1, isEven

function isEven(x){
	r = x%2; 
	if (r) {
		return false;
	}
	else{
		return true; 
	}
	
}


// Problem 2, factorial

function factorial(x){

	// First, check for integer and type
	var f = 1; 
	for (i = x; i>0; i--){
		f*=i;
	}

	return f;
}

// Problem 3, kebab to snake
function kebabToSnake(kebab){

	if (typeof arguments[0] != "string") {
		alert("Has to be string");
	}

	// Define a regex to find all hypens
	re =  RegExp("-", 'g');

	snake = kebab.replace(re, "_");

	return snake;
}
