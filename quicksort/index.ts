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

function quickSort(array: number[], low: number, high: number) {
    if (low < high) {
        let pivot = partition(array, low, high);

        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);
    }
}

function generateArray(length: number): number[] {
    let array = new Array(length);
    for(let i = 0; i < length; i++)
        array[i] = Math.floor(Math.random() * 100);
    return array;
}

let array = generateArray(10);
console.log(array);
quickSort(array, 0, array.length - 1);
console.log(array);