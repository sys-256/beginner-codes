// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_708.md

export default (students: { name: string; notes: number[] }[]): { name: string; avgNote: number }[] =>
	students.map(student => ({
		name: student.name,
		avgNote:
			student.notes.length === 0
				? 0
				: Math.round(student.notes.reduce((a, b) => a + b) / student.notes.length),
	}));
