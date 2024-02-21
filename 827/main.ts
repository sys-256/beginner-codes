// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_827.md

export default (l: (Number[] | Number)[]) =>
	l.length ? (l[0].constructor === Array ? l.flat() : l.map(l => [l])) : [];
