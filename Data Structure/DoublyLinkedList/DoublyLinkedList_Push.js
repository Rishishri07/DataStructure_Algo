/*
    ********** Push Function *********
    Adding a node from the end of the list.
1. Create a new node with value passed to the function.
2. If the head is null, set head & tail to be that newly created node.
3. If not, set the next property on the tail.
4. Set the previous on the newly created node to be the tail.
5. Set tail to newly created node.
6. Increment the length.
7. Return DoublyLinkedList.
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

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();

for (let i = 0; i < 5; i++) {
    list.push(i);
}