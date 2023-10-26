// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_778.md

export default (d: number, v1: number, v2: number) => {
	let t = (d / (v1 + v2)) * 3600;
	return `${Math.floor(t / 3600)}h ${Math.floor((t / 60) % 60)}min ${Math.floor(t % 60)}s`;
};
