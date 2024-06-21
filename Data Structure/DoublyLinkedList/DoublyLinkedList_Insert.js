/*
    ********** Insert Function *********
    Add a new node in the list by a certain position.
1. If index < 0 or > than length, return false.
2. If index is 0, unshift().
3. If index equal to length, push().
4. Use get() to access the index-1.
5. Set next & prev properties on the correct nodes to link everything together.
6. Increment the length.
7. Return true.
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

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }

    get(index) {
        if (!this.head || index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length/2) {
            current = this.head;
            count = 0;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
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