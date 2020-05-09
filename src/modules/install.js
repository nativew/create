const exists = require('./exists');
const run = require('./run');

function install(dest) {
	exists(`${dest}/package.json`) && run('npm', ['install', '--prefix', dest]);
}

module.exports = install;
