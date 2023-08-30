// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_739.md

export default <T>(matrix: T[][]) => {
	let output: [T[], T[]] = [[], []];
	for (let i = 0; i < matrix.length; ++i) {
		output[0].push(matrix[i][i]);
		output[1].push(matrix[i][matrix[0].length - 1 - i]);
	}
	return output;
};
