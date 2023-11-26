// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_782.md

export default (w: string[] | null) =>
	!w || w.every(x => x === ``)
		? ``
		: (w.filter(x => x !== ``).length > 1
				? w
						.filter(x => x !== ``)
						.slice(0, -1)
						.join(`, `) + ` and `
				: ``) + w.filter(x => x !== ``).slice(-1)[0];
