// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_788.md

export default (n: number[]) => {
	let pos = n.filter(x => x > 0).reduce((a, x) => a + x, 0),
		neg = n.filter(x => x < 0).reduce((a, x) => a + x, 0),
		z = n.filter(x => x === 0).length;

	return Math.max(pos, -neg, z) === -neg ? neg : Math.max(pos, z);
};
