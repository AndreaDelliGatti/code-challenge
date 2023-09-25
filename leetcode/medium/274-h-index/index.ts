function hIndex(citations: number[]): number {
    citations = citations.sort((a, b) => a - b);

    let inf = 0;
    let sup = citations.length - 1;
    let result = 0;

    while (inf <= sup) {
        let mid = parseInt((inf + (sup - inf) / 2).toString());

        // console.log(`inf: ${inf} - sup: ${sup} - mid: ${mid} - cit: ${citations[mid]} - max: ${citations.length - mid}`);

        if (citations[mid] >= citations.length - mid) {
            result = citations.length - mid;
            sup = mid - 1;
        }
        else
            inf = mid + 1;
    }

    return result;
};

hIndex([1, 2, 3, 4, 5]);