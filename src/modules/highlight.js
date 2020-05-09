const { bgGreen, black, reset } = require('./styles');

function highlight(text) {
	return bgGreen + black + text + reset;
}

module.exports = highlight;
