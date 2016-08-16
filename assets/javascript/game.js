
var words = ["hello", "chicken", "people", "school"];
var answer=[];	
var guesses = 6;
var wins = 0;
				//picks random word in the array words
var rand = words[Math.floor(Math.random()*words.length)];
console.log(rand);			
	// array for each letter in the  word that is picked
var answer =[];	
//cycle through word and seperate each leter into index of array answer
for (var i = 0; i < rand.length; i++){ 
	answer[i] = "_";
}
console.log(answer);

//  user picks a letter to guess word
 document.onkeyup = function(event){    
 		var letter = String.fromCharCode(event.keyCode).toLowerCase();
		var found = false;
		var correct = false;
		for(var i =0; i < rand.length; i++){
			found = false;
 			if(letter == rand[i]){
 				found = true;
 				correct = true;			
 			}
 			if(found === true){
 				answer[i] = letter;
 			}
 		}
 		console.log(answer);
 		console.log(correct);
 	}
 	