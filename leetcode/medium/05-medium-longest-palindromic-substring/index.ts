function longestPalindrome(s: string): string {
    let res = "";

    for(let i=0; i < s.length; i++) {
        let low = i;
        let hi = i;

        while(low >= 0 && hi < s.length && s[low] == s[hi]){
            if(hi - low + 1 > res.length)
                res = s.substring(low, hi + 1);

            low -=1;
            hi += 1;
        }

        low = i;
        hi = i+1;

        while(low >= 0 && hi < s.length && s[low] == s[hi]){
            if(hi - low + 1 > res.length)
                res = s.substring(low, hi + 1);

            low -=1;
            hi += 1;
        }
    }

    return res;
};