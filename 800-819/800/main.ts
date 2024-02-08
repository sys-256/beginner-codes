// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_800.md

export default (cards: string[]) => {
	const f1 = (v: string) => Math.max(...cards.filter(x => x.endsWith(v)).map(f2));
	const f2 = (v: string) => {
		switch (v[0]) {
			case `A`: {
				return 16;
			}

			case `2`:
			case `3`:
			case `4`:
			case `5`:
				return 10 + Number(v[0]);

			case `6`:
			case `7`:
				return 3 * Number(v[0]);

			case `J`:
			case `Q`:
			case `K`:
				return 10;
		}
	};

	let x = f1(`d`) + f1(`h`) + f1(`c`) + f1(`s`);
	return isFinite(x) ? x : 0;
};
