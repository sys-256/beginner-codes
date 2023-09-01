import { argv } from "process";
import chalk from "chalk";

// Make sure a number is given
if (!argv[2]) {
	throw new Error("Please give an input folder");
}

// Import the tests
const testData = await (
	await fetch(
		`https://raw.githubusercontent.com/beginner-codes/challenges/main/weekday/test_cases_${argv[2]}.json`,
	)
).json();

const functionToTest: Function = (await import(`./${argv[2]}/main.ts`)).default;
let index: number = 1;
const startTime = performance.now();
for (const entry of testData) {
	const result = JSON.stringify(functionToTest(...entry.args)) === JSON.stringify(entry.return);
	if (result) {
		console.log(`Test ${index}:`, chalk.green(`Passed!`));
	} else {
		console.log(`Test ${index}:`, chalk.red(`Failed...`));
	}
	index++;
}
const endTime = performance.now();
console.log(chalk.bold(`\nThat took ${(endTime - startTime).toFixed(5)}ms`));
