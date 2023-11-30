// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_802.md

export default (n: number) => {
	let s = [n];
	while (n !== 1) s.push((n = n % 2 ? 3 * n + 1 : n / 2));
	return [s.length, Math.max(...s)];
};
