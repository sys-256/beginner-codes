// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_699.md

export default (first_month: number, multiplier: number): number =>
	Math.ceil(
		(Math.log(1000000 * (multiplier - 1) + first_month) - Math.log(first_month)) / Math.log(multiplier),
	);
