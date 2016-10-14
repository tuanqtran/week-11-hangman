var Letter = require('./letter.js')

function Word(value) {
	// The word we want our users to guess
	this.value = value;
	// An array of Letter objects that represent our word
	this.letters = value
		.split()
		.map(function(v) {
			return new Letter(v);
		});
}
// Use show to update the screen.
// Takes Letters and calls .show on each one,
// collects them into a new array,
// calls .join to return a string
Word.prototype.show = function() {
	return this.letters
		.map(function(v) {
			return v.show();
		})
		.join();
}

Word.prototype.guess = function(guess){
	this.letters.map(function(l){
		if (guess === l.value) {
			l.visible = true;
			return true;
		}
		else{
			return false;
		}
	})
	.some(function(v){
		return v;
	});
}

// Call guess. If it returns true don't decrement tries. False = decrement
// Then console.log show to print the word into the screen with the underscores in it.

// Modifiy any correctly guessed letter to set visible to true
// then it will return true or false depending on if a correct letter was guessed
// Word.prototype.guess = function(guess) {
// 	return this.letters
// 		.map(function(l) {
// 			var match = (guess === l.value);
// 			l.visible = l.visible || match;
// 			return match;
// 		})
// 		.some(function(v) {
// 			return v;
// 		});
// }

// Return true or false depending on if the word has been completely guessed
Word.prototype.finished = function() {
	return this.show() === this.value;
}

module.exports = Word;