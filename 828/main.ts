// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_828.md

export default (ma: number[][], mb: number[][]) =>
	ma.map(row => row.map((_, i1) => row.reduce((a, x, i2) => a + x * mb[i2][i1], 0)));
