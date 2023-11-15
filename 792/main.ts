// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_792.md

export default (s: string) => s.split(``).map(x => !!((x.charCodeAt(0) - 96) % 2));
