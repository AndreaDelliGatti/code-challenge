function findNonDuplicate(list: number[]): number {
    let single = 0;
    for (let x of list)
        single = single ^ x;

    return single;
}

console.log(findNonDuplicate([4, 3, 1, 4, 1, 3, 2]));