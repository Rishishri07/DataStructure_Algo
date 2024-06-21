/*
    ********** Shift Function *********
    Removing a node from the begining of the list.
1. If the head is null, return undefined.
2. If not, store current head to a variable to return later.
3. If length is 1, set the head & tail to be null.
4. Update the head to be next of old head.
5. Set head's prev to null & oldHead's next to null.
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

    shift() {
        if (!this.head) return undefined;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }
}
