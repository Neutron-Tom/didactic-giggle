var number = 7; 

var input = 0; 

while (input != number){

	var input = prompt("What is your guess?"); 

	if (input == number) {
		alert("Congrats, you guessed correctly");
	}
	else if (input > number){
		alert("Guess is too high");
	}
	else{
		alert("Guess is too low");
	}

}