function jump(nums: number[]): number {
    let res = 0;
    let l  = 0;
    let r = 0;

    while(r < nums.length -1) {
        let max = 0;
        for(let i = l; i <= r; i++)
            max = Math.max(nums[i] + i, max);

        l = r + 1;
        r = max;
        res += 1;
    }

    return res;
};