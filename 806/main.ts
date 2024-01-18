// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_806.md

export default (m: string[][]) => m[0].flatMap((_, i) => m.map(r => r[i])).join(` `);
