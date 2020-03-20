var numOfSquares = 6;
//random color generator
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
// get a random color
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//easybutton 
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	// generate colors
	numOfSquares = 3;
	colors = generateRandomColor(numOfSquares);	
	// pick a new random color from the colors array
	pickedColor = randomColor();
	colorDisplay.textContent =  pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});


//easybutton 
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	// generate colors
	numOfSquares = 6;
	colors = generateRandomColor(numOfSquares);	
	// pick a new random color from the colors array
	pickedColor = randomColor();
	colorDisplay.textContent =  pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";

	}	
});

// when clicking new game button
resetBtn.addEventListener("click", function(){
	// generate colorsa
	colors = generateRandomColor(numOfSquares);	
	// pick a new random color from the colors array
	pickedColor = randomColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;

	// display message to empty string
	messageDisplay.textContent = "";

	resetBtn.textContent = "New Colors";
	//change the colors of sqaures
	for (var i = 0; i < squares.length ; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listner to squares
	squares[i].addEventListener("click",function(){
		//get the color
		var clickedColor = this.style.backgroundColor;
		//compare with picked color
		//if correct
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetBtn.textContent = "Play Again?";
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;


		} //if wrong
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

// change the color of squares when correct
function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	//change color to picked color
		squares[i].style.backgroundColor = color;
	}
}

// get a random color
function randomColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//generate random colors
function generateRandomColor(count){
	//make a array
	var arr = [];
	//add random numbers to the array
	for (var i = 0; i < count; i++) {
	// get random color
	arr.push(randomColorGenerator());
	}
	//return the array
	return arr;
}

function randomColorGenerator(){
	//pick red 0-255
	var red = Math.floor(Math.random() * 256);
	//pick green 0-255
	var green = Math.floor(Math.random() * 256);
	//pick blue 0-255
	var blue = Math.floor(Math.random() * 256);

	return "rgb("+red+", "+green+", "+blue+")";
}



