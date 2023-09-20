class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let previous: [(ListNode | null), (ListNode | null)][] = [];
    let currentHead: ListNode | null = head;

    while (currentHead != null) {
        previous.push([currentHead, currentHead.next]);
        currentHead = currentHead.next;
    }

    if (previous.length > 0) {
        let idx = previous.length - n;
        let couple = previous[idx];

        if (idx == 0) return previous[idx][1];
        else if (couple[1] == null) previous[idx - 1][0]!!.next = null;
        else previous[idx - 1][0]!!.next = couple[1];
    }

    return head;
};