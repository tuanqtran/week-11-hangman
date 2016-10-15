var inquirer = require("inquirer"),
	Game = require("./game.js"),
 	Word = require("./word.js"),
	Letter = require("./letter.js");

var wins = 0,
	losses = 0,
	guessesRemaining = 10,
	word = null,
	lettersGuess = "";

function reset(){
	guessesRemaining = 10;
	categoryQuestion();
}

function start(){
	console.log("***************************************************************" +
		"\n***************************************************************" +
		"\n************   Welcome to Final Fantasy Hangman!   ************" +
		"\n***************************************************************" +
		"\n***************************************************************")

	inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "Please state is your name to begin."			
		}
	]).then(function(user){
		console.log("\nThanks " + user.name + "!\n");
		categoryQuestion();
	})
}

function categoryQuestion(){
	inquirer.prompt([
		{
			type: "list",
			name: "ffChoices",
			message: "What Final Fantasy series would you like to guess from?\n",
			choices: ["Final Fantasy", "Final Fantasy 7", "Final Fantasy 12", "Final Fantasy 13", "Bamn"]
		}
	]).then(function(choosenCategory){
		userCategory(choosenCategory);
	})
};

function userCategory(choosenCategory){
	console.log("\nYou have chosen the category " + choosenCategory.ffChoices);
	var gameObj = new Game();
	var currentWord = gameObj.pickYourCategory(choosenCategory.ffChoices);
	console.log("Current word is " + currentWord); //Remove Later
	word = new Word(currentWord);
	userLetterGuess(currentWord);
}

function userLetterGuess(currentWord) {
	// if (guessesRemaining > 0){
		inquirer.prompt([
			{
				type: "input",
				name: "guessLetter",
				message: "Guess a letter."
			}
		]).then(function(guess){
			letterCheck(currentWord, guess);
		})		
	// }else{
	// 	tryAgainOrLeave();
	// }
}

function letterCheck(currentWord, guess){
	var userGuess = guess.guessLetter.toUpperCase();

	// if (userGuess.trim().toUpperCase().includes(lettersGuess) == true){
	// 	console.log("Wth");
	// }else{
	// 	console.log("OMG");
	// }

	console.log("\nYou guess the letter: " + userGuess);

	var guessWord = word.guess(userGuess);
	console.log("This should be true or false: " + guessWord);
	console.log(word.show());
	if (word.finished() === true){
		console.log("You Won!");
		tryAgainOrLeave();
	}else if (guessesRemaining == 1){
		console.log("You lost!");
		tryAgainOrLeave();
	}else if (guessWord === true){
		console.log("Good Guess!");
	}else if (guessWord === false){
		guessesRemaining--
		console.log("Bad Guess!");
		console.log("Guess remaining: " + guessesRemaining);
	}

	lettersGuess += userGuess;
	console.log("Current guesses: " + lettersGuess);
	// console.log(word.guess(userGuess));

	userLetterGuess(currentWord);
};

function tryAgainOrLeave(){
	inquirer.prompt([
		{
			type: "confirm",
			name: "tryAgain",
			message: "Would you like to try again?"
		}
	]).then(function(userChoice){
		if (userChoice.tryAgain == true){
			reset();
		}else{
			console.log("Bye!");
		}
	})
}

start();



// .catch(function(err){
// 	console.log(err);
// })






// console.log("Current word " + currentWord);
// var randomthing = new Word(currentWord);
// console.log(randomthing);
// var thisthing = new Word.currentWord.guess;
// console.log(thisthing);

// var newthing = new Word(randomthing).guess;
// console.log(newthing);

// var something = new Letter(newthing).show;
// console.log(something);
// console.log(Word.show(currentWord));


// var wordToGuess = this.currentWord.show();
// console.log(Word.show(currentWord));