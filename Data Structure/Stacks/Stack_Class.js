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
}

let stack = new Stack();
// stack.push(1);
// stack.push(2)
// stack.push(3)