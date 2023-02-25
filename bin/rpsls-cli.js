#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
	console.log(`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help		display this help message and exit
  -r, --rules		display the rules and exit

Examples:
  node-rpls		Return JSON with single player RPSLS result.
  			e.g. {"player":"rock"}
  node-rpls rock	Return JSON with results for RPSLS played against a simulated opponent.
  			e.g. {"player":"rock","opponent":"Spock","result":"lose"}`);
	process.exit(0);
}

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`

if (args.r || args.rules) {
	console.log(rules);
	process.exit(0);
}

var game_result;
if (args._[0]) {
	game_result = rpsls(args._[0]);
} else {
	game_result = rpsls();
}

if (game_result === undefined) {
	console.error(`${args._[0]} is out of range. Please choose rock, paper, scissors, lizard, or spock.`);
	console.log(rules);
} else {
	console.log(JSON.stringify(game_result));
}
