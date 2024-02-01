// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_816.md

export default (p: { x: number; y: number }[], x: number, y: number, r: number) =>
	p.filter(v => (v.x - x) ** 2 + (v.y - y) ** 2 < r * r).length;
