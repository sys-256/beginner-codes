import { argv } from "process";
import * as fs from "fs/promises";
import chalk from "chalk";

// Make sure a number is given
if (!argv[2]) {
    throw new Error("Please give an input folder");
}

// Make sure the folder exists
const files = await fs.readdir(argv[2]);
if (!files.includes("main.ts") || !files.includes("tests.json")) {
    throw new Error(
        "Please make sure the folder contains both main.ts and tests.json",
    );
}

// Import the json
const testData = JSON.parse(
    (await fs.readFile(`./${argv[2]}/tests.json`)).toString(),
);

const functionToTest: Function = (await import(`./${argv[2]}/main.ts`)).default;
let index: number = 1;
for (const entry of testData) {
    const result =
        JSON.stringify(functionToTest(...entry.args)) ===
        JSON.stringify(entry.return);
	if (result) {
		console.log(`Test ${index}:`, chalk.green(`Passed!`))
	} else {
		console.log(`Test ${index}:`, chalk.red(`Failed...`))
	}
    index++;
}
