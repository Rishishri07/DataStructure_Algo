/*
    ****** Push Function Implementation *******
1. Create a node using the value passed to the push function.
2. If there is no head property on the list, set the head & tail to be newly created node.
3. Otherwise set the next property on the tail to be the new node & set tail property on the list to be newly
created node.
4. Increment length by one
5. Return linked list.
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

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}
