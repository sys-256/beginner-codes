// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_820.md

export default (bd: number) => {
	let f = (x: number) => (bd >= x ? x : bd);
	return (
		(bd > 32 ? (f(40) - 32) * 325 : 0) + (bd > 40 ? (f(48) - 40) * 550 : 0) + (bd > 48 ? (bd - 48) * 600 : 0)
	);
};
