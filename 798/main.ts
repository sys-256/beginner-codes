// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_798.md

export default (a: number, b: number): number => {
	const isPrime = (n: number) => {
		for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
			if (n % i === 0) return false;
		}
		return n > 1;
	};
	for (let x = Math.max(a, b); x > Math.min(a, b); x--) {
		if (isPrime(x)) return x;
	}
};
