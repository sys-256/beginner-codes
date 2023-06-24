// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_691.md

export default (numbers: number[]): number[] => {
    let output: number[] = [];
    numbers.forEach(
        (_, i) =>
            (output[i] = numbers.reduce(
                (sum, value, index) => (index !== i ? sum * value : sum),
                1,
            )),
    );
    return output;
};
