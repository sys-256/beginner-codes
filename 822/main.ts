// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_822.md

export default (...a: number[]) =>
	a.sort((...[a, b]: number[]) => a - b).every(x => x > 0) && a[0] ** 2 + a[1] ** 2 === a[2] ** 2;
