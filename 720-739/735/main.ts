// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_735.md

export default (n: number): string => {
	let n1 = n.toString();
	if (n1.length <= 1) {
		return "balanced";
	}

	let n2 = n1
		.slice(0, n1.length / 2)
		.split(``)
		.map(Number)
		.reduce((a, b) => a + b);
	let n3 = n1
		.slice(n1.length / 2 + (n1.length % 2))
		.split(``)
		.map(Number)
		.reduce((a, b) => a + b);

	return n2 === n3 ? `balanced` : n2 > n3 ? `left` : `right`;
};
