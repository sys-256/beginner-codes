// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_700.md

export default (letters: string[]): string =>
	String.fromCharCode(
		letters[
			letters
				.map((_, i) =>
					i !== letters.length - 1 ? letters[i].charCodeAt(0) + 1 === letters[i + 1].charCodeAt(0) : true,
				)
				.indexOf(false)
		].charCodeAt(0) + 1,
	);
