// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_755.md

export default (s: string, w: string) => {
	let s2 = s.split(`.`).filter(x => x.toLowerCase().includes(w.toLowerCase()));
	return s2[0] ? `${s2[0]}.`.trimStart() : ``;
};
