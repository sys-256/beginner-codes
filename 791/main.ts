// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_791.md

export default (m1: number[][], m2: number[][]) =>
	m1.length === m2.length && m1.every((x, i) => x.length === m2[i].length)
		? m1.map((row, i1) => row.map((x, i2) => x - m2[i1][i2]))
		: [];
