function lengthOfLongestSubstring(s: string): number {
    let a = new Array();
    let max = 0;

    for (let c of s) {
        let index = a.indexOf(c);
        if (index != -1) {
            if (max < a.length)
                max = a.length;
            a.splice(0, index + 1);
        }

        a.push(c);

    }
    if (max < a.length)
        max = a.length;

    return max;
};