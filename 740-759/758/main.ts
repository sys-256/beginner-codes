// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_758.md

const f = (x: string) => x.replace(/[0-9]/g, ``).charCodeAt(0);
export default (l: string[]) => l.sort((a, b) => f(a) - f(b));
