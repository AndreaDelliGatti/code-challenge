function threeSumClosest(nums: number[], target: number): number {
    let result = Number.NEGATIVE_INFINITY;
    let diff = Number.POSITIVE_INFINITY;

    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        let inf = i + 1;
        let sup = nums.length - 1;

        while (inf < sup) {
            let sum = nums[i] + nums[inf] + nums[sup];

            if (sum > target) sup -= 1;
            else if (sum < target) inf += 1;

            else {
                result = target;
                inf += 1;
            }

            let currentDiff = Math.max(target, sum) - Math.min(target, sum);
            if(diff > currentDiff) {
                diff = currentDiff;
                result = sum;
            }
        }
    }

    return result;
};

console.log(threeSumClosest([1,1,1,0], -100));