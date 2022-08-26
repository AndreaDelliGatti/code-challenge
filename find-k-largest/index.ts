function findKLargest(list: number[], k: number): number {
    list.sort((a, b) => b - a);

    if (k > list.length) throw new Error("K is too high");
    if (k <= 0) throw new Error("K is too low");

    return list[k - 1];
}

console.log(findKLargest([3, 5, 2, 4, 6, 8], 3));