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
        this.length = null;
    }
    // Add a node at the end of list
    push(value) {
        let node = new Node(value);
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

    // Remove the last node of the list and return it
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

    //  Remove the first element from the list and return it
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

    // Add new element at the begining of the list.
    unshift(val) {
        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    // Retrieve an element from given position.
    get(index) {
        if (index > this.length-1 || index < 0) return null;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

    // Replace the value at given position (index)
    set(value, index) {
        let node = this.get(index);

        if (node) {
            node.val = value;
            return true;
        }
         return false;
    }

    insert(value, index) {
        if (index > this.length || index < 0) return null;
        if (!this.head || this.length === index) return !!this.push(value);
        let node = new Node(value);
        let current = this.head;
        let count = 0;
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        let temp = current.next;
        current.next = node;
        node.next = temp;
        this.length++;
        return true;
    }

    // Delete an element at given index
    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) {
            this.shift();
        } else if (index === this.length - 1) {
            this.pop();
        } else {
            let previousNode = this.get(index-1); // 100
            let removed = previousNode.next; // 200
            previousNode.next = removed.next;
            this.length--;
            return removed;
        }
    }
}

let singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(100);
singlyLinkedList.push(200);
singlyLinkedList.push(300);