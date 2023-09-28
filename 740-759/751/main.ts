// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_751.md

export default (n: number): string => {
	const p: (base: number) => boolean = b => {
		const array = n.toString(b).split(``);
		return array.every((x, i) => x === array[array.length - i - 1]);
	};

	return p(2) && p(10) ? `Decimal and binary.` : p(2) ? `Binary only.` : p(10) ? `Decimal only.` : `Neither!`;
};
