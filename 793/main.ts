// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_793.md

export default (w: string) => {
	let s = w.toUpperCase().split(`IN`);
	return s[1][0] + s[0] + s[1].slice(1);
};
