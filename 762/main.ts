// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_762.md

export default (phrase: string, size: number): string[] => {
	const splitted = phrase.split(` `);
	const output = [] as string[];

	let wordIndex = 0;
	while (wordIndex < splitted.length) {
		let temp = ``;
		for (let j = 0; j < size; j = temp.length) {
			if (splitted[wordIndex] && j + splitted[wordIndex].length < size + (j > 0 ? 0 : 1)) {
				temp += (j > 0 ? ` ` : ``) + splitted[wordIndex];
				wordIndex++;
			} else {
				break;
			}
		}
		if (temp.length) output.push(temp);
		else break;
	}

	return output;
};
