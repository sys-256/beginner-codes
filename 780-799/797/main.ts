// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_797.md

export default (w: number, l: number, g: number) => {
	const p = w * l - (w - 2) * (l - 2);
	return g === 0 ? p : p % (g + 1) !== 0 ? 0 : p / (g + 1);
};
