// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_804.md

export default (s: string) => (s + `*`.repeat(s.length % 2)).match(/.{2}/g) ?? [];
