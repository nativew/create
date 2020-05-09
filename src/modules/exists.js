const fs = require('fs');

function exists(path) {
	return fs.existsSync(path) ? true : false;
}

module.exports = exists;
