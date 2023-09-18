function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];

    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let inf = i + 1;
        let sup = nums.length - 1;

        while (inf < sup) {
            let sum = nums[i] + nums[inf] + nums[sup];

            if (sum > 0) sup -= 1;
            else if (sum < 0) inf += 1;
            else {
                result.push([nums[i], nums[inf], nums[sup]]);

                inf += 1;
                while (nums[inf] == nums[inf - 1] && inf < sup)
                    inf += 1;
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));