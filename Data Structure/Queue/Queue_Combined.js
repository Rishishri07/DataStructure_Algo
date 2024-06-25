class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;

        let removedNode = this.first;
        if (this.size === 1) {
            this.last = null;
            this.first = null;
        } else {
            this.first = removedNode.next;
        }

        this.size--;
        return removedNode.val;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);