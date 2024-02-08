// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_803.md

const f = (n: number) => {
	if (n === 1) return [];

	for (let i = 2; i < n; ++i) {
		if (n % i === 0) return [i, ...f(n / i)];
	}

	return [n];
};
export default f;
