function swap(array: number[], i: number, j: number) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function partition(array: number[], low: number, high: number): number {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {            
            i += 1;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, high);
    return i + 1;
}

function quickSort(array: number[], low: number, high: number): number[] {
    if (low < high) {
        let pivot = partition(array, low, high);

        array = quickSort(array, low, pivot - 1);
        array = quickSort(array, pivot + 1, high);
    }

    return array;
}

let array = [10, 80, 30, 90, 40, 50, 70];
console.log(quickSort(array, 0, array.length - 1));