// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_767.md

export default (name: string, words: string[]) => {
	name = name.replaceAll(` `, ``).toLowerCase();
	for (let letter of words.join(``).split(``)) {
		if (!name.includes(letter)) {
			return false;
		}

		name = name.replace(letter, ``);
	}

	return name === ``;
};
