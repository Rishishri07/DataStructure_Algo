/*
    ************** Removing node (ExtractMax) *************
1. Swap the first value in the values property with the last one.
2. Pop from the values property, so you can return the value at the end.
3. Have the new root "sink down" to the corrent spot..
   a. Your parent index starts at 0 (root).
   b. Find the index of the leftChild: 2 * index + 1 (make sure it's not out of bounds).
   c. Find the index of the rightChild: 2 * index + 2 (make sure it's not out of bounds).
   d. If left or right child is greater than the replacement... swap. If both are larger,
   swap with largest child.
   e. The child index you swapped to now becomes the new parent index.
   f. Keep looping & swapping until neither child is larger than the element.
   g. Return old root.
*/
class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    extractMax() {
        // Before [41, 39, 33, 18, 27, 12]
        const removed = this.values[0];
        const end = this.values.pop();
         if (this.values.length > 0) {
             this.values[0] = end;
             // After [12, 39, 33, 18, 27]
             this.sinkDown();
        }
        return removed;
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
                if (leftChild > currentParent) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > currentParent)
                   || swap !== null && rightChild > leftChild) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = currentParent;
            // [39, 12, 33, 18, 27] --- first replacement
            // [39, 27, 33, 18, 12] --- second replacement
            index = swap;
        }
    }
}

let heap = new MaxBinaryHeap();

//         41
//    39        33
// 18    27  12
// -----------------------
//        39
//    27      33
// 18    12