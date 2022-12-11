function subArraySum(arr: number[], sum: number) { // cur_sum to keep track of cumulative sum till that point
    let cur_sum = 0;
    let start = 0;
    let end = -1;
    let n = arr.length;
    let hashMap = new Map();

    for (let i = 0; i < n; i++) {
        // console.log(hashMap);
        // console.log("Element: ", arr[i]);
        // console.log("Curr Sum:", cur_sum);
        cur_sum = cur_sum + arr[i];
        // console.log("Curr Sum:", cur_sum);
        // console.log("k: ", sum);
        // console.log("Diff", cur_sum - sum);
        // check whether cur_sum - sum = 0, if 0 it means
        // the sub array is starting from index 0- so stop
        if (cur_sum - sum == 0) {
            start = 0;
            end = i;
            break;
        }
        // if hashMap already has the value, means we already
        // have subarray with the sum - so stop
        if (hashMap.has(cur_sum - sum)) {
            start = hashMap.get(cur_sum - sum) + 1;
            end = i;
            break;
        }
        // if value is not present then add to hashmap
        hashMap.set(cur_sum, i);
        // console.log(hashMap);
        // console.log("----------------------------------------------\n");
    }
    // if end is -1 : means we have reached end without the sum
    if (end == -1) {
        console.log("No subarray with given sum exists");
    } else {
        console.log("Sum found between indexes " + start + " to " + end);
        console.log(arr.slice(start, end + 1));
    }
}

function getRandomNumber(min: number, max: number) {
    // (random * (max - min + 1)) + min --- for random number between min & max inclusive
    // (random * (max - min)) + min --- for random number between min inclusive & max exclusive
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function getRandomArray(n: number) {
    let A = Array(n);
    for (let i = 0; i < A.length; i++)
        A[i] = getRandomNumber(1, 10);
    return A;
}

let n = getRandomNumber(5, 15);
let A = getRandomArray(n);
console.log(A);
let k = getRandomNumber(1, 20);
console.log(k);

subArraySum(A, k);