const { yellow, reset } = require('./styles');

function color(text) {
	return yellow + text + reset;
}

module.exports = color;
