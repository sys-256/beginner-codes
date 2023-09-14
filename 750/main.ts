// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_750.md

export default (sA: string, sB: string): boolean => {
	const f = (x: string) =>
		x
			.toLowerCase()
			.replace(/[?!,]/g, ``)
			.split(` `)
			.slice(-1)[0]
			.split(``)
			.filter(x => /[aeiou]/g.test(x));

	let lastWordA = f(sA);
	let lastWordB = f(sB);
	return lastWordA.length === lastWordB.length && lastWordA.every(x => lastWordB.includes(x));
};
