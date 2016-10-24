// Array of Word Options (all lowercase)
var wordsList   = ["basketball", "baseball", "soccer", "football", "golfing", "bowling", "tennis", "swimming", "boxing", "futbol", "cheerleading"];
var chosenWord  = ""; 
var lettersInChosenWord = []; 
var numBlanks	= 0; 
var blanksAndSuccesses = []; 
var wrongGuesses = []; 

// Game counters
var winCounter  = 0;
var lossCounter = 0;
var numGuesses  = 9;


// how we we will start and restart the game. 
function startGame() {
	numGuesses = 9;

	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
	lettersInChosenWord = chosenWord.split(""); 
	numBlanks = lettersInChosenWord.length; 

	console.log(chosenWord); 

	blanksAndSuccesses = []; 
	wrongGuesses = []; 

	// Fill up the blanksAndSuccesses list with appropriate number of blanks. This is based on number of letters in solution
	for (var i=0; i <numBlanks; i++){
		blanksAndSuccesses.push("_");
	}
	document.getElementById("guessesLeft").innerHTML = numGuesses;
	
	document.getElementById("wordblanks").innerHTML= blanksAndSuccesses.join(" ");

	document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");
}

// comparisons for matches. 
function checkLetters(letter) {
	var letterInWord = false; // 	
	for (var i=0; i<numBlanks; i++) {
		if(chosenWord[i] == letter) {
			letterInWord = true; 
 		}
	}
	if(letterInWord){
		for (var i=0; i<numBlanks; i++){
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter; 
			}
		}
		console.log(blanksAndSuccesses);
	}
	else {
		wrongGuesses.push(letter); 
		numGuesses--; 
	}
}
function roundComplete(){

	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
	// Update the HTML to reflect the new number of guesses. Also update the correct guesses.
	document.getElementById("guessesLeft").innerHTML= numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); 
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" "); 

	if (lettersInChosenWord.toString() == blanksAndSuccesses.toString()) {
		winCounter++; 
		alert("You win!"); 
		// Update the win counter in the HTML
		document.getElementById("winCounter").innerHTML= winCounter;
		startGame(); // restart the game 
	}
	// If we've run out of guesses
	else if(numGuesses == 0) {
		lossCounter++; 	
		// Update the loss counter in the HTML
		document.getElementById("lossCounter").innerHTML= lossCounter; 
		startGame(); // restart the game
	}
}
// Starts the Game by running the startGame() function
startGame();
// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
	checkLetters(letterGuessed); // runs the code to check for correctness 
	roundComplete(); // runs the code after each round is done
}