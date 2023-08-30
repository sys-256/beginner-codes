// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_691.md

export default (numbers: number[]): number[] =>
	numbers.map((_, i) => numbers.reduce((sum, value, index) => (index !== i ? sum * value : sum), 1));
