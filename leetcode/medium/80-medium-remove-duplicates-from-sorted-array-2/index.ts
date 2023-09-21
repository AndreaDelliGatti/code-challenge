function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let j = 2;
    for (let i = 2; i < nums.length; i++)
        if (nums[i] != nums[j - 2])
            nums[j++] = nums[i];
    return j;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))