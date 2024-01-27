// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_813.md

export default (n: number[]) => {
	let factorsAmount = (x: number) => {
		let n = 0;
		for (let i = 0; i <= x; ++i) if (x % i === 0) n++;
		return n;
	};
	return n
		.map(x => [x, factorsAmount(x)])
		.sort((b, a) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
		.map(x => x[0]);
};
