// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_725.md

export default (n: number[]): number[] =>
    n.filter(x => {
        for (let i = 2; i <= Math.sqrt(x); ++i) {
            if (!(x % i)) return false;
        }
        return x > 1;
    });
