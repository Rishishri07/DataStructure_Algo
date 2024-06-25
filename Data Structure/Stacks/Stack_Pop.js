/*
    ********* Pop Function *********
1. If there are no nodes in the stack, return null.
2. Create a temp variable to store first property on the stack.
3. If there is only 1 node, set first & last to be null.
4. If there is more than one node, set the first property to be next property on the current first.
5. Decrement size by 1.
6. Return removed value.
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