// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_729.md

export default (input: string): string => input.replace(/[A-Z]/g, x => `_${x.toLowerCase()}`);
