// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_815.md

export default (a: number, b: number) => {
	let gcd = (x: number, y: number) => (x ? gcd(y % x, x) : y);
	return Math.abs(a * b) / gcd(a, b);
};
