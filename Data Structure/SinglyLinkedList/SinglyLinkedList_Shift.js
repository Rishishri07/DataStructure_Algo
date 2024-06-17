/*
    ****** Shift Function Implementation *******
1. If there are no nodes in the list, return undefined.
2. Store current head property in a variable.
3. Set the head property to be current head's next property.
4. Decrement length by 1.
5. Return value of node removed.
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

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
         if (this.length === 0) {
            this.tail = null;
         }
        return currentHead;
    }
}
