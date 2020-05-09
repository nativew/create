#!/usr/bin/env node
const { msgs } = require('./data');
const log = require('./modules/log');
const color = require('./modules/color');
const highlight = require('./modules/highlight');
const clone = require('./modules/clone');
const install = require('./modules/install');

// Get argument for name
let name = process.argv[2];

if (name) {
	// Has name, start cloning
	log(msgs.twoStart + name + msgs.twoEnd);
	start();
} else {
	// Doesn't have name, ask question
	const rl = require('./modules/rl');

	rl.question(color(msgs.one), (answer) => {
		// Set answer as name & start cloning
		name = answer;
		log(msgs.twoStart + answer + msgs.twoEnd);
		rl.close();
		start();
	});
}

function start() {
	if (clone(name)) {
		// Clone sucess, install packages
		install(name);
		log(msgs.three + highlight(msgs.cmdStart + name + msgs.cmdEnd));
	} else {
		// Clone fail, log error message
		log(msgs.error);
	}
}
