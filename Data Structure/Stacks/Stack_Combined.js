class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;

        let removed = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removed.next;
        }
        this.size--;
        return removed.value;
    }
}

let stack = new Stack();
// stack.push(1);
// stack.push(2)
// stack.push(3)