function convert(s: string, numRows: number): string {
    let result = "";
    let longestStep = (numRows - 1) * 2;

    if(numRows == 1) return s;

    for (let r = 0; r < numRows; r++) {
        for(let i = r; i < s.length; i += longestStep) {
            result += s[i];

            if(r > 0 && r < numRows - 1 && (i + longestStep - (2*r)) < s.length)
                result += s[i + longestStep - (2*r)];
        }
    }

    return result;
};