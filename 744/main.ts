// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_744.md

export default (n: number) => {
	let acc = 1;
	for (let i = 1; acc < n; ++i) {
		acc *= i;
		if (acc === n) return true;
	}
	return false;
};
