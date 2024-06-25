/*
    *********** Dequeue Function ***********
Remove first node from the Queue.
1. If there are no first property, return null.
2. Store first property to a variable.
3. See if there is only 1 node, set the first & last property to be null.
4. If more than 1 nodes present, set the first property to be the next property of first.
5. Decrement size by 1.
6. Return the value of that node.
*/
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
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
