// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_821.md

export default (d: string) =>
	[`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`][
		new Date(`${d.split(`/`)} 12:00`).getDay()
	];
