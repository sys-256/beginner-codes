// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_733.md

export default (east: string[]): string[] =>
	east.map(x => x.replace(/[EAea]/g, y => ({ e: `w`, a: `e`, E: `W`, A: `E` }[y])));
