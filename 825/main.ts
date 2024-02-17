// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_825.md

export default (n: number) => {
	let a = [];
	for (; n >= 6; n -= 6) a.push(`O-O/O-O/O-O`);
	a.push(
		[`---/-O-/---`, `O--/---/--O`, `O--/-O-/--O`, `O-O/---/O-O`, `O-O/-O-/O-O`, `O-O/O-O/O-O`][(n % 6) - 1]
	);
	return a.filter(x => x).join(`, `);
};
