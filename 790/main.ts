// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_790.md

const f = (n: number) => {
	const v = n
		.toString()
		.split(``)
		.reduce((a, x) => a + Number(x) ** 2, 0);
	return v === 1 ? true : v === 4 ? false : f(v);
};
export default f;
