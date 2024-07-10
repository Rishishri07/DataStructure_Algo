/*
    *********** PriorityQueue - Enqueue & Dequeue ***********
1. Write a Min Binary Heap - lower number means higher priority.
2. Each Node has a val and a priority. Use the priority to build the heap.
3. Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot
   based off of its priority.
4. Dequeue method removes root element, returns it, and rearranges heap using priority.
*/

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// This is based of Min Binary Heap where lesser number is the parent.
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp(node);
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let val = this.values[index];

        while (index > 0) {

            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            if (parent.priority <= val.priority) break;
            this.values[parentIdx] = val;
            this.values[index] = parent;
            index = parentIdx;
        }
    }

    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        let currentParent = this.values[0];
        const length = this.values.length;

        while (true) {
            let leftChildIdx = 2*index + 1;
            let rightChildIdx = 2*index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < currentParent.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < currentParent.priority) ||
                    swap !== null && rightChild.priority < leftChild.priority) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = currentParent;
            index = swap;
        }
    }
}

let heap = new PriorityQueue();
heap.enqueue("Common cold", 5);
heap.enqueue("High Fever", 2);
heap.enqueue("Gunshot Wound", 1);