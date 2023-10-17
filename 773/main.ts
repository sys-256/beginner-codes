// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_773.md

export default (p: string[]) => p.map(x => Number(x.match(/(?<=\(\$)\d+\.\d{2}(?=\))/g)[0]));
