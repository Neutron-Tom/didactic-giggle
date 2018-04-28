function printReversed(arr){
	//Iterate through the array and print it out to console reversed
	console.log("***");
	l = arr.length; 
	for (i=l-1 ; i>=0; i--){
		console.log(arr[i]);
	}
	console.log("***");
}



function isUnique(arr){
	//Determines whether each element of an array is unique
	first = arr[0]; 

	for (i=0; i<arr.length; i++){
		if (arr[i]!==first){
			return false;
		}

	}

	return true; 
}

function sum(arr){
	//Assuming numeric input, do a sum

	runningTotal = 0; 
	for (i=0; i<arr.length; i++){
		runningTotal+=arr[i];
	}

	return runningTotal;

}