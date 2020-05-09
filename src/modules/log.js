const color = require('./color');

function log(message) {
	console.log(color(message));
}

module.exports = log;
