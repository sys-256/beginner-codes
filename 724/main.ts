// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_724.md

export default (numbers: number[]): [number, number] | [] =>
	numbers.length
		? [numbers.filter(x => x > 0).length, numbers.filter(x => x < 0).reduce((a, b) => a + b)]
		: [];
