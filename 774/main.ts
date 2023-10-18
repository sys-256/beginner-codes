// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_774.md

export default (f: number, fu: number, p: number, ac: boolean) =>
	Number(((100 * f) / (fu * (0.05 * p + 1) * 1.1 ** +ac)).toFixed(1));
