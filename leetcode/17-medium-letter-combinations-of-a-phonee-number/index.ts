function letterCombinations(digits: string): string[] {
    let result: string[] = [];

    let simbols = ["abc", "def", "ghi", "jkl", "mno", "qprs", "tuv", "wxyz"];

    function backtrack(i: number, str: string) {
        if (str.length == digits.length) {
            result.push(str);
            return;
        }

        let dig = parseInt(digits[i]);

        for (let s of simbols[dig - 2])
            backtrack(i + 1, str + s);
    }

    if (digits.length > 0) {
        backtrack(0, "");
        return result;
    }
    
    return [];
};

console.log(letterCombinations("23"));