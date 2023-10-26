// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_768.md

export default (x: number) => {
	const fac = (n: number): number => (!n ? 1 : n * fac(n - 1));
	const count = (n: number) => {
		let count = +(n >= 1);
		while (n / 10 >= 1) {
			n /= 10;
			count++;
		}
		return count;
	};
	return count(fac(x));
};
