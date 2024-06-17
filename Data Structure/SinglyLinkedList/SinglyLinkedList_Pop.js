/*
    ****** Pop Function Implementation *******
1. If there are no nodes in the list, return undefined.
2. Loop through the list until you reach the tail.
3. Set next property of the 2nd to last node to be null.
4. Set tail to be 2nd to last node.
5. Decrement length by 1.
6. Return value of node removed.
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

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
