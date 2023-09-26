function canCompleteCircuit(gas: number[], cost: number[]): number {
    let res = 0;
    let total = 0;
    let tank = 0;

    for (let i = 0; i < gas.length; i++) {
        total += (gas[i] - cost[i]);
        tank += (gas[i] - cost[i]);

        if (tank < 0) {
            res = i + 1;
            tank = 0;
        }
    }

    return (total < 0) ? -1 : res;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));