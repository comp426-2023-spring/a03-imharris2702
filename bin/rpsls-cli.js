#!/usr/bin/env node

function rpsls(shot) {
	const choice_number = Math.floor(Math.random() * 5); 
	var opponent;
	switch (choice_number) {
		case 0:
			opponent = "rock";
			break;
		case 1:
			opponent = "paper";
			break;
		case 2:
			opponent = "scissors";
			break;
		case 3:
			opponent = "lizard";
			break;
		default:
			opponent = "spock";
			break;
	}
	if (shot === undefined) { return {player: opponent} }

	var result;
	shot = shot.toLowerCase();
	switch (shot) {
		case "rock":
			switch (opponent) {
				case "rock":
					result = "tie";
					break;
				case "paper":
					result = "lose";
					break;
				case "scissors":
					result = "win";
					break;
			}
			break;
		case "paper":
			switch (opponent) {
				case "rock":
					result = "win";
					break;
				case "paper":
					result = "tie";
					break;
				case "scissors":
					result = "lose";
					break;
			}
			break;
		case "scissors":
			switch (opponent) {
				case "rock":
					result = "lose";
					break;
				case "paper":
					result = "win";
					break;
				case "scissors":
					result = "tie";
					break;
			}
			break;
		default:
			console.error(`${shot} is out of range. Please choose rock, paper, scissors, lizard, or spock.`);
			return;
	}
	return {
		player: shot,
		opponent: opponent,
		result: result
	}
}

console.log(rpsls());
