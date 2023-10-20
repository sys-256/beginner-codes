// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_776.md

export default (v: number, n: number[]) =>
	n
		.map(x => Math.abs(x - v))
		.reduce((iMin, x, i, a) => (x < a[iMin] || (x === a[iMin] && n[i] > n[iMin]) ? i : iMin), 0);
