// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_748.md

export default (y: number): number =>
	new Array(12)
		.fill(0)
		.map((_, i) => new Date(`${y}-${i + 1}-13`))
		.filter(x => x.getDay() === 5).length;
