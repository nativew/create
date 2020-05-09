const fs = require('fs');

function del(path) {
	fs.rmdirSync(path, { recursive: true });
}

module.exports = del;
