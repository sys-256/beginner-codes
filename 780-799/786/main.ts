// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_786.md

export default (s: string) =>
	s
		.split(``)
		.map((x, i, a) => a.with(i, x.toUpperCase()).join(``))
		.filter(x => x !== s);
