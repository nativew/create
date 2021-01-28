import run from './run.js';
import { url } from '../data.js';

const clone = dest => {
	const cmd = run('git', ['clone', '--depth=1', url, dest]);

	if (cmd.status == 0) {
		run('rm', ['-rf', `${dest}/.git`]);
		return true;
	}

	return false;
};

export default clone;
