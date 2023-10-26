// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_772.md

export default (s: number[]): number =>
	Math.max(...s.map((p, i) => s.slice(i + 1).reduce((x, a) => (x > a - p ? x : a - p), 0)));
