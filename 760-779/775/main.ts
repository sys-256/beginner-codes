// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_775.md

export default (a: number, b: number, c: number) => {
	const combs = [
		[a, b, c],
		[a, c, b],
		[b, c, a],
		[b, a, c],
		[c, a, b],
		[c, b, a],
	];
	let output = [];
	for (let comb of combs) if (comb[0] * comb[1] === comb[2]) output.push(`${comb[0]}*${comb[1]}=${comb[2]}`);
	for (let comb of combs) if (comb[0] + comb[1] === comb[2]) output.push(`${comb[0]}+${comb[1]}=${comb[2]}`);
	for (let comb of combs) if (comb[0] - comb[1] === comb[2]) output.push(`${comb[0]}-${comb[1]}=${comb[2]}`);
	for (let comb of combs) if (comb[0] / comb[1] === comb[2]) output.push(`${comb[0]}/${comb[1]}=${comb[2]}`);
	return output.filter((x, i) => !output.slice(i + 1).includes(x));
};
