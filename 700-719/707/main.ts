// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_707.md

export default (sentence: string): string[] =>
	sentence
		.toLowerCase()
		.replace(`.`, ``)
		.split(` `)
		.filter(word => [`a`, `e`, `i`, `o`, `u`].includes(word[0]));
