/*
    ********* Find in BinarySearchTree *********
1. Starting at the root
   a. If the root is not present, return undefined.
   b. If the root is present, check if the value of the new node is equal to the value we are looking for,
      return that node.
   c. If not equal to the root, check if the value is greater or lesser than the value of root 
   d. If it is greater
      > Check if there is a node to the right
        > If yes, move to that node and repeat these steps
        > If not, we are done searching!
   e. If it is lesser
      > Check if there is a node to the left
        > If yes, move to that node and repeat these steps
        > If not, we are done searching!
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

    find(value) {
        if (!this.root) return undefined;
        let current = this.root,
        found = false;

        while (!found && current) {
            if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found ? current : false;
    }

    contains(value) {
        if (!this.root) return false;
        let current = this.root,
        found = false;

        while (!found && current) {
            if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
}
