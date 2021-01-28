import { spawnSync } from 'child_process';

const run = (cmd, args) => spawnSync(cmd, args, { stdio: 'inherit' });

export default run;
