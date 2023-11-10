// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_789.md

export default (a: { Total: string; Difference: string; Mouse: `?` }) => {
	const Pmouse = ((Number(a.Total.slice(1)) - Number(a.Difference.slice(1))) / 2).toFixed(2);
	return { ...a, Mouse: `$` + (Pmouse.endsWith(`0`) ? Pmouse.slice(0, -1) : Pmouse) };
};
