/*
    ****** Remove Function Implementation *******
1. If index is less than zero or greater than the length, return undefined.
2. If the index is same as length - 1, pop().
3. If index is zero, shift().
4. Otherwise, using the get method, store previous node (index-1).
5. Store previous.next node which will be removed.
6. Set the next property of the previous node to be the removed.next node.
7. Decrement the length.
8. Return removed node.
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) this.pop();
        if (index === 0) this.shift();
        let previousNode = this.get(index-1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}
