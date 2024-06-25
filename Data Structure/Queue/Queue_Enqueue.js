/*
    *********** Enqueue Function ***********
Add a node to the Queue.
1. Create a new node using the value passed in the function.
2. If there are no nodes in the queue, set this node to be first & last property.
3. Otherwise, set the next property on the current last to be that node, and then set the last property of the
   queue to be that node.
4. Increment size by 1.
*/
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
}
