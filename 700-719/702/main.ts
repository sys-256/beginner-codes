// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_702.md

export default (code: string): string[] | string =>
	!/^\d{4}$/.test(code)
		? "Invalid input."
		: code
				.split("")
				.map(
					(value, i) =>
						[
							"Shimmy",
							"Shake",
							"Pirouette",
							"Slide",
							"Box Step",
							"Headspin",
							"Dosado",
							"Pop",
							"Lock",
							"Arabesque",
						][Number(value) + i - (Number(value) + i > 9 ? 10 : 0)],
				);
