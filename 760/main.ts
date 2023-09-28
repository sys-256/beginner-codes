// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_760.md

export default (n: number) => {
	if (n.toString().length % 2 === 1) {
		return `invalid`;
	}

	let output = ``;
	for (let i = 0; i < n.toString().length; i += 2) {
		output += n.toString()[i + 1].repeat(Number(n.toString()[i]));
	}
	return Number(output);
};
