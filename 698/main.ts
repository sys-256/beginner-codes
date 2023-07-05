// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_698.md

export default (text: string): string => text.toLowerCase().split(" ").filter(word => word.toLowerCase() === "zero" || word.toLowerCase() === "one").filter((_,i,array) => array.length - i > array.length % 8).join("_").replaceAll("zero", "0").replaceAll("one", "1").replaceAll("_", "");