var body = document.querySelector("body");

var isBlue = false; 

var redAmt = 0;

// setInterval(function(){
// 	if (isBlue){
// 		body.style.background = "white";
// 	}
// 	else{
// 		body.style.background = "blue";
// 	}
// 	isBlue = ~isBlue;

// }, 500);

setInterval(function(){
	body.style.background = rgb(redAmt,255,255);
	redAmt += 1; 
},50);



function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}