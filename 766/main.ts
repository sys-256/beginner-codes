// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_766.md

export default (n: number[]) => (n.join(``).match(/1{2,}/g) || []).length;
