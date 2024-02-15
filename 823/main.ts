// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_823.md

export default (x: number[][]) => Math.max(...x.map((_, i) => x.reduce((a, b) => a + b[i], 0)));
