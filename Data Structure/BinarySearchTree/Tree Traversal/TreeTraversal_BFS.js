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

     BFS() {
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while (queue.length !== 0) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(12);
tree.insert(2);
tree.insert(13);
tree.insert(11);

//        10
//    5        12
//  2   6    11   13