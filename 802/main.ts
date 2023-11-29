// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_802.md

export default (n: number) => {
	let c = n,
		s = [c];

	while (c !== 1) {
		c = !(c % 2) ? c / 2 : 3 * c + 1;
		s.push(c);
	}

	return [s.length, Math.max(...s)];
};
