// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_764.md

const d = {
	".": ``,
	"1": `I`,
	"2": `Z`,
	"3": `E`,
	"4": `H`,
	"5": `S`,
	"6": `G`,
	"7": `L`,
	"8": `B`,
	"0": `O`,
};
export default (n: number) =>
	n
		.toString()
		.split(``)
		.reverse()
		.map(x => d[x])
		.join(``);
