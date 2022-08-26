function sortList(list: number[]): number[] {
    let result = new Array(list.length);

    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    let third = Number.NEGATIVE_INFINITY;

    let countFirst = 0;
    let countSecond = 0;
    let countThird = 0;

    for (let x of list) {
        if (first == Number.NEGATIVE_INFINITY || x == first) {
            first = x;
            countFirst += 1;
        }

        else if (second == Number.NEGATIVE_INFINITY || x == second) {
            second = x;
            countSecond += 1;
        }

        else if (third == Number.NEGATIVE_INFINITY || x == third) {
            third = x;
            countThird += 1;
        }
    }
    
    if (third > first && third > second) {
        if(first > second){
            let tmp = first;
            first = second;
            second = first;

            tmp = countFirst;
            countFirst = countSecond;
            countSecond = tmp;
        }
    }
    else if (second > first && second > third) {
        let tmp = second;
        second = third;
        third = tmp;

        tmp = countSecond;
        countSecond = countThird;
        countThird = tmp;

        if (first > second) {
            let tmp = first;
            first = second;
            second = tmp;

            tmp = countFirst;
            countFirst = countSecond;
            countSecond = tmp;
        }
    }
    else if (first > second && first > third) {
        let tmp = first;
        first = third;
        third = tmp;

        tmp = countFirst;
        countFirst = countThird;
        countThird = tmp;

        if (first > second) {
            let tmp = first;
            first = second;
            second = tmp;

            tmp = countFirst;
            countFirst = countSecond;
            countSecond = tmp;
        }
    }

    for(let i = 0; i < result.length; i++){
        if(countFirst > 0){
            result[i] = first;
            countFirst -= 1;
        }
        else if(countSecond > 0){
            result[i] = second;
            countSecond -= 1;
        }
        else if (countThird > 0){
            result[i] = third;
            countThird -= 1;
        }
    }

    return result;
}

console.log(sortList([3, 3, 2, 1, 1, 1, 3, 2, 1]));