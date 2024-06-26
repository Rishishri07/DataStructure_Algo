/*
    ********* Insert in BinarySearchTree *********
1. Create a new node.
2. Starting at the root
   a. If the root is not present, set root to be newly created node.
   b. If the root is present, check if the value of the new node is greater or lesser than the value of root.
   (i) If it is greater
    > Check if there is a node to the right
      > If yes, move to that node & repeat these steps
      > If not, add that node as the right property
   (ii) If it is lesser
    > Check if there is a node to the left
      > If yes, move to that node & repeat these steps
      > If not, add that node as the left property
*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (current.value === value) return false;
            
            if (current.value > value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if (current.value < value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(12);
tree.insert(2);
tree.insert(13);
tree.insert(11);