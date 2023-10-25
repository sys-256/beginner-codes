// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_779.md

export default (v: number[], p: number[], n: number) =>
	!v.includes(n) ? `Doesn't exist` : p[v.indexOf(n)] === -1 ? `Root` : p.includes(n) ? `Inner` : `Leaf`;
