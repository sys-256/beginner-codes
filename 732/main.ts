// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_732.md

export default (binary: string): string =>
	(binary.match(/.{8}/g) ?? ([] as string[]))
		.map(x =>
			String.fromCharCode(
				x
					.split(``)
					.map(Number)
					.reduce((a, b, i) => a + b * 2 ** (7 - i)),
			),
		)
		.join(``);
