function moveZeros(list: number[]): number[] {
    let result = new Array(list.length);

    let start = 0;
    let end = list.length - 1;

    for (let x of list) {
        if (x == 0) {
            result[end] = 0;
            end -= 1;
        }
        else {
            result[start] = x;
            start += 1;
        }
    }

    return result;
}

console.log(moveZeros([0, 0, 0, 2, 0, 1, 3, 4, 0, 0]))