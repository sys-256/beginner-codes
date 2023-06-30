// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_696.md

export default (numbers: number[], t: string): number[] => {
	let output: number[] = [];
    numbers.forEach((number, index) => {
		output.push(0);
        number
            .toString()
            .split("")
            .forEach((value) => {
                output[index] += Number(Number(value) % 2 === (t === "even" ? 0 : 1))
            });
    });
    return output;
};
