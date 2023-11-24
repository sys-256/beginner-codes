// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_799.md

const f = (h: number) => (h < 0 ? `invalid` : h > 0 ? 3 * h - 1 + f(h - 1) : 0);
export default f;
