function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let result: number[][] = [];

    for (let interval of intervals) {
        let n = result.length - 1;
        if (result.length == 0 || result[n][1] < interval[0]) result.push(interval);
        else result[n][1] = Math.max(result[n][1], interval[1]);
    }

    return result;
};

merge([[1, 3], [2, 6], [8, 10], [15, 18]]);