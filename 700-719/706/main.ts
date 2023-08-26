// https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_706.md

export default (
    str_A: string,
    ind_A: number[],
    str_Z: string,
    ind_Z: number[],
): { A: number; Z: number } => {
    let str_A_new = str_A.split(``).filter((_, i) => !ind_Z.includes(i));
    let str_Z_new = str_Z.split(``).filter((_, i) => !ind_A.includes(i));

    let points_A = 0,
        points_Z = 0;
    for (let i = 0; i < 16; ++i) {
        let char_A = str_A_new[i].charCodeAt(0),
            char_Z = str_Z_new[i].charCodeAt(0);
        if (char_A > char_Z) {
            points_A += char_A - char_Z;
        } else if (char_Z > char_A) {
            points_Z += char_Z - char_A;
        }
    }

    return {
        A: points_A,
        Z: points_Z,
    };
};
