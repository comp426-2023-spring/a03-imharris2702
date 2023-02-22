#!/usr/bin/env node

function rps(shot) {
	const choice_number = Math.floor(Math.random() * 3); 
	var opponent;
	switch (choice_number) {
			case 0:
				opponent = "rock";
				break;
			case 1:
				opponent = "paper";
				break;
			default:
				opponent = "scissors";
				break;
	}
	if (shot === undefined) { return {player: opponent} }

}

const test = rps();
console.log(test)
