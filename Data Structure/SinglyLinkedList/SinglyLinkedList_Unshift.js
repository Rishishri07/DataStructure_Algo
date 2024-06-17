/*
    ****** Unshift Function Implementation *******
1. The function should accept a value.
2. Create a node using the value passed to the function.
3. If there is no head property on the list, set the head & tail to be newly created node.
4. Otherwise set the newly created node's next property to be current head property on the list.
5. Set the head property on the list to be that newly created node.
6. Increment length by one
5. Return the linked list.
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

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
