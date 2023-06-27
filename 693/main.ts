// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_693.md

export default (sentence: string): string => {
    let output: string[] = [];
    sentence.split(" ").forEach((word) => {
        word = word.replace(/^x\B/, "z"); // Starts with x
        word = word.replace(/^x\b/, "ecks"); // Word is only x
        word = word.replace(/x/g, "cks"); // Other cases
        output.push(word);
    });
    return output.join(" ");
};
