// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_811.md

export default (sh: string) => {
	let k = sh.split(` `).slice(-1)[0];
	return /[A-Z]/g.test(k[0])
		? `${sh} major`
		: `${sh.split(` `).slice(0, -1).join(` `)} ${k[0].toUpperCase()}${k.slice(1)} minor`;
};
