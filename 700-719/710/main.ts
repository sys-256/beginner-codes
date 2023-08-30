// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_710.md

export default (iterations: number): number => {
	let total = 0,
		stars = 1;
	for (let i = 1; i < iterations; ++i) {
		total += stars;
		stars += 2;
	}

	for (let i = stars; i >= iterations; --i) {
		total += i;
	}

	return total;
};
