/*
    ********** Pop Function *********
    Removing a node from the end of the list.
1. If the head is null, return undefined.
2. If not, store current tail to a variable to return later.
3. If length is 1, set the head & tail to be null.
4. Update the tail to previous node.
5. Set newtail's next to null & removed.previous to null.
6. Decrement the length.
7. Return removed value.
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop() {
        if (!this.head) return undefined;
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }
}
