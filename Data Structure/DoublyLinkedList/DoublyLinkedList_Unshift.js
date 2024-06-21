/*
    ********** Unshift Function *********
    Adding a node from the begining of the list.
1. Create a new node with value passed to the function.
2. If the head is null, set head & tail to be that newly created node.
3. If not, set the next property on the tail.
            this.head.next = oldHead;
            oldHead.prev = this.head;
4. Store head in a variable.
5. Set head to be newly created node.
6. Set head.next to be oldHead.
7. Set oldHead.prev to newly updated head.
8. Increment the length.
9. Return DoublyLinkedList.
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

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
        this.length++;
        return this;
    }
}
