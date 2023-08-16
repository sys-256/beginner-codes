// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_728.md

export default (letter: string): string => {
    let output: string = ``,
        currentLetter: number = 65;
    while (currentLetter !== letter.charCodeAt(0) + 1) {
        output += String.fromCharCode(currentLetter) + output;
        currentLetter++;
    }

    return output;
};
