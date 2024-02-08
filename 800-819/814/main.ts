// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_814.md

export default (a: number, b: number) =>
	a !== 1 ? Number(((b - 1) / (a - 1)).toFixed(3)) : b === 1 ? `Any number` : `No solution`;
