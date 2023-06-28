// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_694.md

export default (number: number): boolean => {
	// Return false if it's a power of 2
	return !Number.isInteger(Math.log2(number));
};
