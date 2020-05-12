const { url } = require('../data');
const run = require('./run');

function clone(dest) {
	const cmd = run('git', ['clone', '--depth=1', url, dest]);

	if (cmd.status == 0) {
		// Delete .git folder
		run('rm', ['-rf', `${dest}/.git`]);
		return true;
	} else {
		return false;
	}
}

module.exports = clone;
