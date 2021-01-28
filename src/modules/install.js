import exists from './exists.js';
import run from './run.js';

const install = dest =>
	exists(`${dest}/package.json`) && run('npm', ['install', '--prefix', dest]);

export default install;
