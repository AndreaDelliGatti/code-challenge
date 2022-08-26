interface ListNode {
    value: number,
    next: ListNode | null
}

export class LinkedList {
    private head: ListNode | null;
    private lastAdded: ListNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.lastAdded = null;
        this.size = 0;
    }

    public add(value: number) {
        let node = {
            value: value,
            next: null
        };

        if (this.head == null) {
            this.head = node;
            this.lastAdded = this.head;
        }
        else {
            this.lastAdded!!.next = node;
            this.lastAdded = node;
        }

        this.size += 1;
    }

    public print() {
        let curr = this.head;
        let result = "";
        while (curr != null) {
            result += curr.value + " ";
            curr = curr.next;
        }

        console.log(result);
    }

    public isEmpty() {
        return this.size == 0;
    }

    public sizeOfList() {
        return this.size;
    }

    public getAt(index: number) {
        if (index < 0 || index >= this.size) throw new Error('invalid index');

        let curr = this.head;
        for(let i = 0; i < index; i++){
            curr = curr!!.next;
        }
        return curr!!.value;
    }
}