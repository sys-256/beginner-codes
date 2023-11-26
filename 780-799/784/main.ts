// https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_784.md

const f = (seq: string, splitter: string) =>
	seq
		.split(splitter)
		.filter(x => x !== ``)
		.map(x => x.length)
		.join(`,`);
export default (s: string) => f(s, `0`) === f(s, `1`);
