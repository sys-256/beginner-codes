// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_703.md

export default (time1: string, time2: string): string =>
	time1 === time2
		? "no time passed"
		: `${
				Number(time2.split(":")[0]) +
				(time2.split(" ")[1] === "PM" ? 12 : 0) -
				Number(time1.split(":")[0]) -
				(time1.split(" ")[1] === "PM" ? 12 : 0)
		  } hours`;
