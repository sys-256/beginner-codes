// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_749.md

export default (l1: number[], l2: number[]) =>
	!!l1 &&
	!!l2 &&
	l1
		.map(x => x * x)
		.sort()
		.toString() === l2.sort().toString();
