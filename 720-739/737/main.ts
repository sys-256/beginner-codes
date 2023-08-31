// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_737.md

export default (birds: string[]): string[] =>
	birds.map(bird => {
		const newBird = bird.split(` `).flatMap(x => x.split(`-`));
		switch (newBird.length) {
			case 1:
				return newBird[0].slice(0, 4).toUpperCase();
			case 2:
				return `${newBird[0].slice(0, 2)}${newBird[1].slice(0, 2)}`.toUpperCase();
			case 3:
				return `${newBird[0][0]}${newBird[1][0]}${newBird[2].slice(0, 2)}`.toUpperCase();
			case 4:
				return `${newBird[0][0]}${newBird[1][0]}${newBird[2][0]}${newBird[3][0]}`.toUpperCase();
		}
	});
