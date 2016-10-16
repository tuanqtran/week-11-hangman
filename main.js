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
	lettersGuess = "";
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
			choices: ["Final Fantasy Type-0", "Final Fantasy", "Final Fantasy II", "Final Fantasy III", "Final Fantasy IV",
			"Final Fantasy V", "Final Fantasy VI", "Final Fantasy VII", "Final Fantasy VIII", "Final Fantasy IX", "Final Fantasy X",
			"Final Fantasy X-2", "Final Fantasy XIII"]
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
		inquirer.prompt([
			{
				type: "input",
				name: "guessLetter",
				message: "Guess a letter."
			}
		]).then(function(guess){
			process.stdout.write("\u001b[2J\u001b[0;0H");

			letterCheck(currentWord, guess);
		})		
}

function letterCheck(currentWord, guess){
	var userGuess = guess.guessLetter.trim().toUpperCase();

	if (lettersGuess.includes(userGuess) == true){
		console.log("Letter was already used. Please try again.");
		logProgress();
	}else{
		lettersGuess += userGuess;
		var guessWord = word.guess(userGuess);
		// console.log("This should be true or false: " + guessWord);
		if (word.finished() === true){
			console.log("You Won!");
			wins++;
			tryAgainOrLeave();
		}else if (guessesRemaining == 1){
			losses++;
			console.log("You lost!");
			tryAgainOrLeave();
		}else if (guessWord === true){
			console.log("Good Guess!");
			logProgress();
		}else if (guessWord === false){
			guessesRemaining--
			console.log("Bad Guess!");
			logProgress();
		}

	}
	function logProgress(){
		console.log(word.show());
		console.log("\nYou guess the letter: " + userGuess);
		console.log("Current guesses: " + lettersGuess);
		console.log("Guess remaining: " + guessesRemaining);
		userLetterGuess(currentWord);
	}
};

function logWinsLosses(){
	console.log("Wins: " + wins);
	console.log("Losses: " + losses);
}

function tryAgainOrLeave(){
	logWinsLosses();
	inquirer.prompt([
		{
			type: "confirm",
			name: "tryAgain",
			message: "Would you like to try again?"
		}
	]).then(function(userChoice){
		if (userChoice.tryAgain == true){
			reset();
			// start();
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