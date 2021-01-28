import fs from 'fs';

const exists = path => (fs.existsSync(path) ? true : false);

export default exists;
