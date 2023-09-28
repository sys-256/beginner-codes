// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_740.md

export default (n: number) =>
	new Array(n)
		.fill(0)
		.map((_, i) => (n * (n - 1)) / 2 + 1 + i)
		.reduce((a, x) => a + x);
