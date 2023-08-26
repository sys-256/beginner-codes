// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_692.md

export default (line: number[], amount: number): number[][] | string => {
    if (line[0] * line[1] < amount) return "overcrowded";

    let output: number[][] = [];
    let reverse: boolean = false;
    let index: number = 1;
    for (let i = 0; i < line[0]; ++i) {
        output[i] = [];
        reverse = i % 2 === 1;

        for (let j = 0; j < line[1]; j++) {
            if (index > amount) index = 0;

            if (!reverse) {
                output[i].push(index);
            } else {
                output[i].unshift(index);
            }

            if (index <= amount && index !== 0) index++;
        }
    }

    return output;
};
