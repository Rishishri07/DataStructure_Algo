/*
    ********** Remove Function *********
    Remove a node in the list by a certain position.
1. If index < 0 or > than or equal to length, return undefined.
2. If index is 0, shift().
3. If index equal to length-1, pop().
4. Use get() to access item to be removed the index.
5. Update next & prev properties to remove the found node.
6. Decrement the length.
7. Return removed node.
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

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
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

list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);