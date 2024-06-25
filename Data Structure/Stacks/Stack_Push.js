/*
    ********* Push Function *********
1. Function should accept a value.
2. Create a new node with that value.
3. If there are no nodes in the stack, set first & last to be newly created node.
4. If there is at least one node, create a variable that stores the current first.
5. Reset the first property to be newly created node.
6. Set next property on the node to be previously created variable.
7. Increment the size.
*/

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
}

let stack = new Stack();
// stack.push(1);
// stack.push(2)
// stack.push(3)