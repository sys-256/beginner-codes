// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_761.md

const r = /^#[A-Fa-f0-9]{6}$/;
export default r.test.bind(r);
