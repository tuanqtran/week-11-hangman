module.exports = function(){	
	var chosenBank;
	var wordBankFF = ["Black Mage", "White Mage"],
		wordBankFF7 = ["CLOUD", "TIFA", "BARRET", "AERIS", "CID", "VINCENT"],
		wordBankFF12 = ["VAAN", "BALTHIER", "FRAN", "BASCH", "ASHE", "PENELO", "REKS"],
		wordBankFF13 = ["LIGHTNING", "SNOW", "VANILLE", "SAZH", "HOPE", "FANG"];

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