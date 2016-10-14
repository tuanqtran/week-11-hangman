var inquirer = require("inquirer"),
	Game = require("./game.js"),
	Word = require("./word.js"),
	Letter = require("./letter.js");


console.log("Just how well do you know your Final Fantasy Characters names?");
inquirer.prompt([
	{
		type: "input",
		name: "name",
		message: "What is your name?"
	}
]).then(function(user){
	inquirer.prompt([
		{
			type: "list",
			name: "ffChoices",
			message: "Welcome " + user.name + "! What Final Fantasy series would you like to guess from?",
			choices: ["Final Fantasy 7", "Final Fantasy 12", "Final Fantasy 13", "Bamn"]
		}
	])
	.then(function(choosenCategory){
		console.log(choosenCategory.ffChoices);
		var currentWord = new Game.pickYourCategory(choosenCategory.ffChoices);
		console.log(currentWord);
		// console.log("Did it break?");
	})
})



	// .then(function(choosenCategory){
 //        console.log(choosenCategory.ffChoices);
 //        var currentWord = new Game.pickYourCategory(choosenCategory.ffChoices);
 //        console.log(currentWord);
 //        // console.log("Did it break?");
 //    }).catch(function(err){ //-------this
 //        console.log(err);
 //    })


