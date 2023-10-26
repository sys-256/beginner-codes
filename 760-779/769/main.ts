// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_769.md

export default (eq: string) =>
	Number(eq.split(` `)[4]) + (eq.split(` `)[1] === `+` ? -1 : 1) * Number(eq.split(` `)[2]);
