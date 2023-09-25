class RandomizedSet {
    set: Map<number, number>;
    nums: number[];

    constructor() {
        this.set = new Map();
        this.nums = [];
    }

    insert(val: number): boolean {
        if (this.set.has(val)) return false;

        this.set.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    };

    remove(val: number): boolean {
        if (this.set.has(val)) {
            let pos = this.set.get(val)!!;

            if (pos !== this.nums.length - 1) {
                let last = this.nums[this.nums.length - 1];

                [this.nums[pos], this.nums[this.nums.length - 1]] = [this.nums[this.nums.length - 1], this.nums[pos]];
                this.set.set(last, pos);
            }
            this.nums.pop();
            this.set.delete(val);
            return true;
        }

        return false;

    }

    getRandom(): number {
        return this.nums[Math.floor(Math.random() * this.nums.length)]
    }
}