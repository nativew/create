#!/usr/bin/env node
import clone from './modules/clone.js';
import install from './modules/install.js';
import log from './modules/log.js';
import highlight from './modules/highlight.js';
import rl from './modules/rl.js';
import color from './modules/color.js';
import { msgs } from './data.js';

let name = process.argv[2];

const start = () => {
	if (clone(name)) {
		install(name);
		log(msgs.three + highlight(msgs.cmdStart + name + msgs.cmdEnd));
	} else {
		log(msgs.error);
	}

	process.exit();
};

const askName = () =>
	rl.question(color(msgs.one), answer => {
		name = answer;
		log(msgs.twoStart + answer + msgs.twoEnd);
		rl.close();
		start();
	});

if (name) {
	log(msgs.twoStart + name + msgs.twoEnd);
	start();
} else {
	askName();
}
