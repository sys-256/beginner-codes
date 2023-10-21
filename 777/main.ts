// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_777.md

export default (n: number): number[] => {
	const result = [] as number[];
	for (let base = 2; base <= 10; ++base) {
		const a = n.toString(base).split(``).map(Number);
		if (a.every((x, i) => i + 1 === a.length || Math.abs(x - a[i + 1]) === 1)) {
			result.push(base);
		}
	}
	return result;
};
