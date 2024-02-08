// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_809.md

const f = (r: string) => {
	const d = { RR: "R", GG: "G", BB: "B", BG: "R", GR: "B", BR: "G" };

	return r.length === 1
		? r
		: f(
				r
					.split(``)
					.map((x, i) => d[[x, r[i + 1]].sort().join(``)])
					.join(``)
		  );
};

export default f;
