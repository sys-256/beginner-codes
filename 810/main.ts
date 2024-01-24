// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_810.md

export default (k: string[], v: string[], s: boolean) =>
	Object.fromEntries(k.map((x, i) => (s ? [v[i], x] : [x, v[i]])));
