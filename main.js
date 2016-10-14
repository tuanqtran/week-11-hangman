var inquirer = require("inquirer"),
	Game = require("./game.js"),
 	Word = require("./word.js"),
	Letter = require("./letter.js");

var wins = 0,
	losses = 0,
	guessesRemaining = 10;

function reset(){
	guessesRemaining = 10;
	categoryQuestion();
}

function userCategory(choosenCategory){
	console.log("\nYou have chosen the category " + choosenCategory.ffChoices);
	var gameObj = new Game();
	var currentWord = gameObj.pickYourCategory(choosenCategory.ffChoices);
	console.log("Current word is " + currentWord); //Remove Later

	userLetterGuess(currentWord);
}

function userLetterGuess(currentWord) {
	if (guessesRemaining > 0){
		inquirer.prompt([
			{
				type: "input",
				name: "guessLetter",
				message: "Guess a letter."
			}
		]).then(function(guess){
			var userGuess = guess.guessLetter;
			console.log("\nYou guess the letter: " + userGuess);
			// Need to figure out how to call word/letter.js 
			// if(guessesRemaining > 0){
				// console.log();
				// right section
			// }else{
				// console.log();
				// wrong section (Decrement guessesRemaining.)
			// }

			// console.log("Current word " + currentWord);
			// var randomthing = new Word(currentWord);
			// console.log(randomthing);

			var randomthing = new Word(currentWord).value;
			console.log(randomthing);

			// var thisthing = new Word.currentWord.guess;
			// console.log(thisthing);

			// var newthing = new Word(randomthing).guess;
			// console.log(newthing);
			
			// var something = new Letter(newthing).show;
			// console.log(something);
			// console.log(Word.show(currentWord));


			// var wordToGuess = this.currentWord.show();
			// console.log(Word.show(currentWord));
			userLetterGuess(currentWord);
		})		
	}else{
		tryAgainOrLeave();
	}
}

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

start();



// .catch(function(err){
// 	console.log(err);
// })
