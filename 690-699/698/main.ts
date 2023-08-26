// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_698.md

export default (text: string): string => text.toLowerCase().split(" ").filter(word => word === "zero" || word === "one").filter((_,i,array) => array.length - i > array.length % 8).map(word => word === "zero" ? "0" : "1").join("");