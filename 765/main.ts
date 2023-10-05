// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_765.md

export default (l1: number, w1: number, h1: number, l2: number, h2: number) => {
	const c = l2 * h2;
	return l1 * w1 <= c || w1 * h1 <= c || l1 * h1 <= c;
};
