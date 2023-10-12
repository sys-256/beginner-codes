// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_770.md

export default (w: string[]) =>
	w.filter(x => /^[^kmvwx]+$/gm.test(x)).sort((a, b) => b.length - a.length)[0] || ``;
