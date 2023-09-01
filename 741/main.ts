// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_741.md

export default <T>(l1: T[], l2: T[]) =>
	new Array(Math.max(l1.length, l2.length)).fill(l1[0]).flatMap((_, i) => [l1[i], l2[i]].filter(Boolean));
