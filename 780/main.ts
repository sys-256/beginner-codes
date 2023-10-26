// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_780.md

export default (m: string) =>
	m
		.replaceAll(`k`, `000`)
		.split(`,`)
		.filter(x => x[0] === `d`)
		.reduce((a, x) => a + Number(x.slice(1)), 0);
