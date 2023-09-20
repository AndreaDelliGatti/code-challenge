function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = n + m - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
        else nums1[k--] = nums2[j--];
    }

    while (j >= 0)
        nums1[k--] = nums2[j--]
};

merge([0, 0, 0], 0, [1, 2, 3], 3);