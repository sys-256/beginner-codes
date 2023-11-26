// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_785.md

export default (n: number) => {
	if (n === 0) return `___`;
	let output = ` `.repeat(2 * n) + `_`;
	for (let spaces = 2 * (n - 1); spaces >= 0; spaces -= 2) {
		output += `\n${` `.repeat(spaces)}_|`;
	}
	return output;
};
