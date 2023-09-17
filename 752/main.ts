// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_752.md

export default (n: number): number[] => {
	const prod = (i: number) => i.toString().split(``).map(Number).reduce((a, x) => a * x);
	let highest = [1];
	for (let i = 1; i <= n; ++i) {
		if (prod(i) > prod(highest[0])) {
			highest = [i];
		} else if (prod(i) === prod(highest[0])) {
			highest.push(i);
		}
	}

	return highest;
};
