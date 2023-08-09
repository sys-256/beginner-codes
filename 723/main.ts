// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_723.md

export default (n: number[]): number[] => n.map((_, i) => n.slice().splice(0, i + 1).reduce((a, b) => a + b));
