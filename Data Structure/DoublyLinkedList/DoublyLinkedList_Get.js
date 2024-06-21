/*
    ********** Get Function *********
    Retrieve an element from given index.
1. If index is less than 0 or greater or equal to the length, return null.
2. If the index is less than or equal to half the length of the list.
    a. Loop through the list starting from head and loop towards middle.
    b. Return the node once it is found.
3. If the index is greater than half the length of the list.
    a. Loop through the list starting from tail and loop towards the middle.
    b. Return the node once it's found.
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
