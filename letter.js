function Letter(value) {
	this.value = value;
	this.visible = false;
}

Letter.prototype.show = function() {
	// ternary operator below
	return (this.visible) ? this.value : '_';
}

module.exports = Letter;