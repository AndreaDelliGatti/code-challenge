function witnesses(heights: number[]): number {
    let count = 0;
    if (heights.length > 0) {
        let max = heights[heights.length - 1];
        count += 1;

        for (let i = heights.length - 2; i >= 0; i--) {
            if (heights[i] > max) {
                count += 1;
                max = heights[i];
            }
        }
    }

    return count;
}

console.log(witnesses([3, 6, 3, 4, 1]));