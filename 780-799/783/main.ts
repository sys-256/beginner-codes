// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_783.md

export default (n: number) => `nines:${(n - (n % 9)) / 9}, threes:${((n % 9) - (n % 3)) / 3}, ones:${n % 3}`;
