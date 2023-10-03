// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_763.md

export default (s: "s" | "c", n: number) => n * 4 * +(s === "s") + n * 6.28 * +(s === "c");
