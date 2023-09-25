function maxProfit(prices: number[]): number {
    let min = prices[0];
    let max = 0

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }

    return max;
};

function maxProfit2(prices: number[]): number {
    let left = 0;
    let right = 1;
    let max = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            max = Math.max(max, profit);
        }
        else
            left = right;

        right++;
    }
    return max;
}