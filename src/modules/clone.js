const { url } = require('../data');
const run = require('./run');
const del = require('./del');

function clone(dest) {
	const cmd = run('git', ['clone', url, dest]);

	if (cmd.status == 0) {
		del(`${dest}/.git`);
		return true;
	} else {
		return false;
	}
}

module.exports = clone;
