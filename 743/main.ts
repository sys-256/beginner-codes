// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_743.md

export default (w: string[]): string[] => {
	const dict: { [index: string]: number } = {};
	w.join(``)
		.split(``)
		.forEach(x => dict[x]++ || (dict[x] = 1));
	return Object.keys(dict)
		.filter(x => dict[x] === Math.max(...Object.values(dict)))
		.sort();
};
