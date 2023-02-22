#!/usr/bin/env node

function rps(shot) {
	if (shot === undefined) {
		const choice = Math.floor(Math.random() * 3); 
		switch (choice) {
			case 0:
				return {player: "rock"};
			case 1:
				return {player: "paper"};
			default:
				return {player: "scissors"};
		}
	}
}

const test = rps();
console.log(test)
