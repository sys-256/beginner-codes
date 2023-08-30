// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_704.md

export default (n: number): boolean => {
	let squared = (n * n).toString(),
		left = squared.slice(0, Math.floor(squared.length / 2)),
		right = squared.slice(Math.floor(squared.length / 2));
	return Number(left) + Number(right) === n;
};
