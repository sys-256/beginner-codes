// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_757.md

type Tree = [number, Tree | null, Tree | null];

const inTree = (tree: Tree, search: number): boolean => {
	return tree[0] === search
		? true
		: tree[1] === null && tree[2] === null
		? tree[0] === search
		: tree[1] === null
		? tree[2][0] === search
		: tree[2] === null
		? tree[1][0] === search
		: inTree(tree[1], search) || inTree(tree[2], search);
};

export default inTree;
