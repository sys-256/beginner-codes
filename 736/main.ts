// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_736.md

export default (n: number[]) => {
	for (let i = 2; i < n.length; ++i) {
		if (n.length % i === 0 && new Array(n.length / i).fill(n.slice(0, i)).flat().toString() === n.toString())
			return true;
	}

	return false;
};
