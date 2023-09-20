function maxCoins(piles: number[]): number {
    let sum = 0;
    let steps = piles.length / 3;
    let i = 0;

    piles = piles.sort((a, b) => b - a);

    while (i < steps) {
        sum += piles[2 * i + 1];
        i += 1;
    }

    return sum;
};

console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]))