// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_754.md

export default (n: number): string => {
	const f = (s: number) =>
		[...Array(s).keys()]
			.slice(1)
			.filter(x => !(s % x))
			.reduce((a, x) => a + x);

	return f(n) === n ? `Perfect` : f(f(n)) === n ? `Amicable` : `Neither`;
};
