
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
document.write(answer);
//  user picks a letter to guess word
 document.onkeyup = function(event){    
 		var letter = String.fromCharCode(event.keyCode).toLowerCase();
			
			//if the letter matches a index in answer array, replace the index. 
 		for(var i =0; i < rand.length; i++){
 			if(letter == rand[i]){
 				answer[i] = letter;
 				alert(letter + " "+ "is correct!")
 			}
 			else{
 				console.log(letter +" "+ "is not correct. Guess again!")
 			}
 		}
 		console.log(answer)
 		document.write(answer);
 	}