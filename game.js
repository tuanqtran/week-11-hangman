module.exports = function(){	
	var chosenBank;
	var wordBankFF = ["Black Mage", "White Mage"],
		wordBankFF7 = ["Cloud", "Tifa", "Barret", "Aeris", "Cid", "Vincent"],
		wordBankFF12 = ["Vaan", "Balthier", "Fran", "Basch", "Ashe", "Penelo", "Reks"],
		wordBankFF13 = ["Lightning", "Snow", "Vanille", "Sazh", "Hope", "Fang"];

	var randomWord = function(wordbank) {
		return wordbank[Math.floor(Math.random() * wordbank.length)]
	};
	
	this.pickYourCategory = function(category){

		switch (category) {
			case "Final Fantasy":
				chosenBank = randomWord(wordBankFF);
				break;
			case "Final Fantasy 7":
				chosenBank = randomWord(wordBankFF7);
				break;
			case "Final Fantasy 12":
				chosenBank = randomWord(wordBankFF12);
				break;
			case "Final Fantasy 13":
				chosenBank = randomWord(wordBankFF13);
				break;
			default:
				console.log("Error");
				break;
		}
		return chosenBank;
	}
}