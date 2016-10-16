module.exports = function(){	
	var chosenBank;
	var wordBankFFT0 = ["ACE", "DEUCE", "TREY", "CATER", "CINQUE", "SICE", "SEVEN", "EIGHT", "NINE", "JACK", "QUEEN", "KING", "MACHINA", "REM"],
		wordBankFF = ["WARRIOR", "THIEF", "MONK"],
		wordBankFF2 = ["FIRION", "MARIA", "GUY", "LEON", "MINWU", "JOSEF", "GORDON", "LEILA", "RICARD", "SCOTT"],
		wordBankFF3 = ["LUNETH", "ARC", "REFIA", "INGUS"],
		wordBankFF4 = ["CECIL", "ROSA", "KAIN", "CID", "POROM", "PALOM", "YANG", "TELLAH", "EDWARD", "FUSOYA", "RYDIA", "EDGE"],
		wordBankFF5 = ["BARTZ", "LENNA", "FARIS", "GALUF", "KRILE"],
		wordBankFF6 = ["TERRA", "LOCKE", "EDGAR", "SABIN", "CYAN", "SHADOW", "RELM", "STRAGO", "GAU", "CELES", "SETZER", "MOG", "GOGO", "UMARO"],
		wordBankFF7 = ["CLOUD", "TIFA", "BARRET", "AERIS", "CID", "VINCENT"],
		wordBankFF8 = ["SQUALL", "QUISTIS", "ZELL", "SELPHIE", "RINOA", "IRVINE", "LAGUNA", "KIROS", "WARD", "EDEA", "SEIFER"],
		wordBankFF9 = ["ZIDANE", "VIVI", "DAGGER", "STEINER", "FREYA", "QUINA", "EIKO", "AMARANT", "BEATRIX", "BLANK", "CINNA", "MARCUS"],
		wordBankFF10 = ["TIDUS", "YUNA", "AURON", "KIMAHRI", "WAKKA", "LULU", "RIKKU", "SEYMOUR"],
		wordBankFF12 = ["VAAN", "BALTHIER", "FRAN", "BASCH", "ASHE", "PENELO", "REKS"],
		wordBankFF13 = ["LIGHTNING", "SNOW", "VANILLE", "SAZH", "HOPE", "FANG"];

	var randomWord = function(wordbank) {
		return wordbank[Math.floor(Math.random() * wordbank.length)]
	};
	
	this.pickYourCategory = function(category){

		switch (category) {
			case "Final Fantasy Type-0":
				chosenBank = randomWord(wordBankFFT0);
				break;
			case "Final Fantasy":
				chosenBank = randomWord(wordBankFF);
				break;
			case "Final Fantasy II":
				chosenBank = randomWord(wordBankFF2);
				break;
			case "Final Fantasy III":
				chosenBank = randomWord(wordBankFF3);
				break;			
			case "Final Fantasy IV":
				chosenBank = randomWord(wordBankFF4);
				break;
			case "Final Fantasy V":
				chosenBank = randomWord(wordBankFF5);
				break;
			case "Final Fantasy VI":
				chosenBank = randomWord(wordBankFF6);
				break;
			case "Final Fantasy VII":
				chosenBank = randomWord(wordBankFF7);
				break;
			case "Final Fantasy VIII":
				chosenBank = randomWord(wordBankFF8);
				break;			
			case "Final Fantasy IX":
				chosenBank = randomWord(wordBankFF9);
				break;
			case "Final Fantasy X":
				chosenBank = randomWord(wordBankFF10);
				break;
			case "Final Fantasy X-2":
				chosenBank = randomWord(wordBankFF12);
				break;
			case "Final Fantasy XIII":
				chosenBank = randomWord(wordBankFF13);
				break;
			default:
				console.log("Error");
				break;
		}
		return chosenBank;
	}
}