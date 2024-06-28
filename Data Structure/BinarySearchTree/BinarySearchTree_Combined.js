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
        } else {
            let current = this.root;

            while(true) {
                if (current.value === value) return false;

                if (current.value > value) { // 10 -> 5 -> 2
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
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
