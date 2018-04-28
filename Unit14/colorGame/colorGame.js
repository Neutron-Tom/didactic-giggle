var colors = [];
var numSquares = 6;
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

// Add event listeners for squares

    for(var i = 0; i<squares.length; i++){
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked saquare
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);

            } else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });

        reset();
    }

    /**
     * Add event listeners for mode buttons
     */
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.toggle("selected");

            //Ternary operator - if this.textContent is Easy, then numsquare = 3, else =6
            this.textContent === "Easy" ? numSquares=3: numSquares = 6;

            reset();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    }

}



// Add event listener for reset button
resetButton.addEventListener("click", function(){
    reset()
});

// Utility function to reset the game
function reset(){
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change the colors of squares on the page.
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]
        }
        else{
            squares[i].style.display = "none";
        }
    }

    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

}

function changeColors(color){
    //loop through all squares
    //change each color to match given color
    for ( var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(n){
    //make an array
    var arr = [];
    //add n random colors to array
    for (var i=0; i<n; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var col = "rgb("+r+", "+g+", "+b+")";
    return col;
}