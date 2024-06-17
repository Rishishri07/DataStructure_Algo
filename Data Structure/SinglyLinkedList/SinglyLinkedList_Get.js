/*
    ****** Get Function Implementation *******
1. The function should accept an index.
2. If index is less than zero or greater than or equal to the length, return null.
3. Loop through the list until you reach the index and return the node at that specific index.
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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let value = this.head;
        for (let i = 1; i <= index; i++) {
            value = value.next;
        }
        return value;
    }
}
