// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_695.md

export default (word1: string, word2: string): [string, string, string] => {
    let shared: string[] = [],
        only1: string[] = [],
        only2: string[] = [];

    word1.split("").forEach((letter) => {
        if (word2.includes(letter) && !shared.includes(letter)) {
            shared.push(letter);
        }

        if (!word2.includes(letter) && !only1.includes(letter)) {
            only1.push(letter);
        }
    });
    word2.split("").forEach((letter) => {
        if (!word1.includes(letter) && !only2.includes(letter)) {
            only2.push(letter);
        }
    });

    return [
        shared.sort().join(""),
        only1.sort().join(""),
        only2.sort().join(""),
    ];
};
