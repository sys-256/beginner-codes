// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_709.md

export default (question_times: number[], total_time: number): string =>
	total_time <= 120 &&
	question_times.length === 8 &&
	question_times.every((value, i) => value <= [5, 5, 10, 10, 15, 15, 20, 20][i])
		? `qualified`
		: `disqualified`;
