function Letter(value) {
	this.value = value;
	this.visible = false;
}

// Reveals what the letter should be.
Letter.prototype.show = function() {
	// ternary operator below
	return (this.visible) ? this.value : ' _ ';
}

module.exports = Letter;


// function Letter(value) {
// 	this.value = value;
// 	this.visible = false;
// 	this.show = function() {
// 	// ternary operator below
// 		return (this.visible) ? this.value : '_';
// 	}
// }
// module.exports = Letter;