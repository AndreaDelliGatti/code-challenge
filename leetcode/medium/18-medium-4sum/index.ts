function fourSum(nums: number[], target: number): number[][] {
    let result: number[][] = [];
    let quad: number[] = [];

    nums = nums.sort((a, b) => a - b);

    function kSum(k: number, start: number, target: number) {
        if (k != 2) {
            for (let i = start; i < nums.length - k + 1; i++) {
                if (i > start && nums[i] == nums[i - 1]) continue;

                quad.push(nums[i]);
                kSum(k - 1, i + 1, target - nums[i]);
                quad.pop();
            }
            return;
        }

        let inf = start;
        let sup = nums.length - 1;

        while (inf < sup) {
            let sum = nums[inf] + nums[sup];

            if (sum > target) sup -= 1;
            else if (sum < target) inf += 1;
            else {
                result.push([...quad, nums[inf], nums[sup]]);

                inf += 1;
                while (nums[inf] == nums[inf - 1] && inf < sup)
                    inf += 1;
            }
        }
    }

    kSum(4, 0, target);
    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));