// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_771.md

export default (icecreams: { flavor: string; num_sprinkles: number }[]) =>
	Math.max(
		...icecreams.map(
			icecream =>
				({
					Plain: 0,
					Vanilla: 5,
					ChocolateChip: 5,
					Strawberry: 10,
					Chocolate: 10,
				}[icecream.flavor] + icecream.num_sprinkles)
		)
	);
