// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_734.md

export default (s: string) => s.match(/[a-z]/g).length === s.match(/\+[a-z]\+/g).length;
