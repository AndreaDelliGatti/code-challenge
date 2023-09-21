function majorityElement(nums: number[]): number {
    let result = Number.POSITIVE_INFINITY;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            count += 1;
            result = nums[i];
            continue;
        }

        if (nums[i] == result) count += 1;
        else count -= 1;
    }

    return result;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))