var button = document.querySelector("#colorChangeBtn"); 

button.addEventListener("click", colorChanger); 

function colorChanger(){
	
	document.body.classList.toggle("purple");
	
}


// Crude method: 

// var body = document.querySelector("body");
// body.style.background = "white"; 

// function colorChanger(){
	
// 	if (body.style.background=="white"){
// 		body.style.background="red";
// 	}
// 	else{
// 		body.style.background="white";
// 	}
	
// }