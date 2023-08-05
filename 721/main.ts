// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_721.md

export default (numbers: number[], chuck_size: number) =>
    numbers.reduce((result, value, i) => {
        const chunkIndex = Math.floor(i / chuck_size);

        result[chunkIndex]
            ? result[chunkIndex].push(value)
            : (result[chunkIndex] = [value]);

        return result;
    }, []);
