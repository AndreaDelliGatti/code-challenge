function maxArea(height: number[]): number {
    let result = 0;

    let inf = 0;
    let sup = height.length - 1;

    while (inf <= sup) {
        let currentMax = Math.min(height[inf], height[sup]) * (sup - inf);

        if (currentMax > result) result = currentMax;

        if (height[inf] < height[sup]) inf += 1;
        else sup -= 1;
    }

    return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));