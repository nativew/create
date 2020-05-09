const { spawnSync } = require('child_process');

function run(cmd, args) {
	return spawnSync(cmd, args, { stdio: 'inherit' });
}

module.exports = run;
