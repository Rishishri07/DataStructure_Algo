/*
    ****** Set Function Implementation *******
1. The function should accept a value & an index.
2. Use get function to find the node.
3. If node is not found return false.
4. If node is found, set the value of that node to be the value passed to the function & return true.
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

    set(value, index) {
        let node = this.get(index);
        if (node) {
            node.val = value
            return true;
        }
        return false;
    }
}