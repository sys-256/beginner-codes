// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_745.md

export default (t: string[]) => {
	let times = t
		.map(x => x.split(`:`).map(Number))
		.reduce((acc, value) => acc.map((x, i) => x + value[i]), [0, 0, 0]);
	if (times[2] > 60) {
		times[1] += (times[2] - (times[2] % 60)) / 60;
		times[2] %= 60;
	}
	if (times[1] > 60) {
		times[0] += (times[1] - (times[1] % 60)) / 60;
		times[1] %= 60;
	}
	return times;
};
