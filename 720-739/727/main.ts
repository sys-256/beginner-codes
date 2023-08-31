// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_727.md

export default (message: string): string =>
	message
		.split(``)
		.map(x => `0`.repeat(8 - x.charCodeAt(0).toString(2).length) + x.charCodeAt(0).toString(2))
		.join(``)
		.split(``)
		.map(x => x.repeat(3))
		.join(``);
