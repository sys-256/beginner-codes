// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_759.md

export default (s: string) =>
	s
		.match(/-[\d]+/g)
		.map(Number)
		.reduce((a, x) => a + x);
