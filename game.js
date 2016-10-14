module.exports = function(){	
	this.pickYourCategory = function(category){
		var chosenBank;
		var wordBankFF7 = ["Cloud", "Tifa", "Barret", "Aeris", "Cid", "Vincent"];
		var wordBankFF12 = ["Vaan", "Balthier", "Fran", "Basch", "Ashe", "Penelo", "Reks"];
		var wordBankFF13 = ["Lightning", "Snow", "Vanille", "Sazh", "Hope", "Fang"];
			
		var randomWord = function(wordbank) {
			return wordBank[Math.floor(Math.random() * wordBank.length)]
		};
		

		switch (category) {
			case "Final Fantasy 7":
				chosenBank = this.randomWord(wordBankFF7);
				console.log("Did it break?");
				break;
			case "Final Fantasy 12":
				chosenBank = this.randomWord(wordBankFF12);
				break;
			case "Final Fantasy 13":
				chosenBank = this.randomWord(wordBankFF13);
				break;
			default:
				console.log("Error");
				break;
		}
		return this.chosenBank;
	}
}

// var wordBankFF7 = ["Cloud", "Tifa", "Barret", "Aeris", "Cid", "Vincent"];
// var wordBankFF12 = ["Vaan", "Balthier", "Fran", "Basch", "Ashe", "Penelo", "Reks"];
// var wordBankFF13 = ["Lightning", "Snow", "Vanille", "Sazh", "Hope", "Fang"];

// var randomWord = function(wordbank) {
// 	return wordBank[Math.floor(Math.random() * wordBank.length)]
// };

// module.exports.pickYourCategory = function(category){
// 	var chosenBank;
// 	switch (category) {
// 		case "Final Fantasy 7":
// 			chosenBank = randomWord(wordBankFF7);
// 			console.log("Did it break?");
// 			break;
// 		case "Final Fantasy 12":
// 			chosenBank = randomWord(wordBankFF12);
// 			break;
// 		case "Final Fantasy 13":
// 			chosenBank = randomWord(wordBankFF13);
// 			break;
// 		default:
// 			console.log("Error");
// 			break;
// 	}
// 	return chosenBank;
// }