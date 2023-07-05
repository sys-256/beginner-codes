// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_693.md

export default (sentence: string): string => sentence.split(" ").map(word => word.replace(/^x\B/, "z").replace(/^x\b/, "ecks").replace(/x/g, "cks")).join(" ");
