// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_787.md

export default (s: string, k: number) =>
	s.split(``).map((x, i) => x.charCodeAt(0) + Number(k.toString()[i % k.toString().length]) - 96);
