/*
    MaxBinaryHeap - It is similar to BST (Can not have more than 2 children).
    Parent nodes are always larger than the child nodes.

    ********* Insert Function ************
1. Push the value into the values property on the heap.
2. Bubble Up:
   a. Create a function called bubbleUp and pass the element value to it.
   b. Create a variable called index which is the length of the values - 1.
   c. Keep looping until index > 0.
      -> Create a variable called parentIdx and store the parent index of the element
         ((index - 1)/ 2).
      -> Create a variable called parent to store the parent of the element.
      -> Swap the value of values element at the parentIndex with the value of the element property
         at the child index.
      -> Set the index to be the parentIndex, and start over!

    Before
[41, 39, 33, 18, 27, 12]
          41  
     39        33
  18    27  12    

[41, 39, 33, 18, 27, 12, 58]
  
  Adding a new element
          41 -> 58  
     39        33 -> 41 
  18    27  12    58 -> 33

// After
// [58, 39, 41, 18, 27, 12, 33]
//           58  
//      39        41 
//   18    27  12    33
*/
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp(element);
    }

    bubbleUp(element) {
        let index = this.values.length - 1;

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(58);
