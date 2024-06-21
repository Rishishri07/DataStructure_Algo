/*
    ********** Set Function *********
    Replace the value of the element on the given index.
1. Create a variable and store the result of the get method at the index passed to the function.
    a. If get method returns a valid node, update the value passed in the argument.
    b. Return true.
2. Otherwise, return false.
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

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
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
}
