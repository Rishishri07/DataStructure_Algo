/*
    ****** Insert Function Implementation *******
1. If index is less than zero or greater than the length, return false.
2. If the index is same as the length, push a new node using push function to the end of the list.
3. If index is zero, use unshift function to add a new node to the start of the list.
4. Otherwise, using the get method, store previous node (index-1).
5. Set the next property on that node to be the new node.
6. Set the next property of the new node to be the previous next node.
7. Increment the length.
8. Return true.
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return false;
        let currentLength = this.length;
        if (index === this.length) {
            this.push(value);
            if (this.length > currentLength) return true;
        } else if (index === 0) {
            this.unshift(value);
            if (this.length > currentLength) return true;
        } else {
            let newNode = new Node(value);
            let previousNode = this.get(index-1);
            let currentNode = previousNode.next;
            previousNode.next = newNode;
            newNode.next = currentNode;
            this.length++;
            return true;
        }
    }
}