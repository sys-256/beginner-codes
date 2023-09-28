// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_747.md

export default (numbers: number[]): number => {
	let consecutiveArrays: number[][] = [];
	let tempArray: number[] = [];
	let goesUp = 2;
	numbers.forEach((x, i) => {
		if (i > 0 && goesUp === 2 && (numbers[i - 1] === x - 1 || numbers[i - 1] === x + 1)) {
			goesUp = Number(numbers[i - 1] === x - 1);
		}

		if (
			tempArray.length === 0 ||
			(numbers[i - 1] === x - 1 && goesUp) ||
			(numbers[i - 1] === x + 1 && !goesUp)
		) {
			tempArray.push(x);
		} else {
			consecutiveArrays.push(tempArray);
			tempArray = [x];
		}
	});
	consecutiveArrays.push(tempArray);
	return Math.max(...consecutiveArrays.map(x => x.length));
};
