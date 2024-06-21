class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;   
        }
        this.length--;
        return removedNode;
    }

    shift() {
        if (!this.head) return false;

        let removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
       if (index < 0 || this.length === 0 || index >= this.length) return undefined;
        let count, foundNode;
        
        if (index <= this.length / 2) {
            foundNode = this.head;
            count = 0;
            while (index !== count) {
                foundNode = foundNode.next;
                count++;
            }
        } else {
            foundNode = this.tail;
            count = this.length - 1;
            while (index !== count) {
                foundNode = foundNode.prev;
                count++;
            }
        }
        return foundNode;
    }
    set(val, index) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length - 1) return !!this.push(val);
        let newNode = new Node(val);
        let prevNode = this.get(index-1); // 3
        let nextNode = prevNode.next; // 4
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.push(4)
// let arr = [
//     doublyLinkedList.unshift(5),
// doublyLinkedList.length,
// doublyLinkedList.head.val,
// doublyLinkedList.tail.val,
// doublyLinkedList.unshift(10),
// doublyLinkedList.length,
// doublyLinkedList.head.val,
// doublyLinkedList.head.next.val,
// doublyLinkedList.tail.val,
// doublyLinkedList.unshift(15),
// doublyLinkedList.length,
// doublyLinkedList.head.val,
// doublyLinkedList.tail.val,
// doublyLinkedList.head.next.next.val,
 
// doublyLinkedList.shift().val,
// doublyLinkedList.length,
// doublyLinkedList.shift().val,
// doublyLinkedList.length,
// doublyLinkedList.shift().val,
// doublyLinkedList.length,
// doublyLinkedList.pop(),
// doublyLinkedList.length,
// ]

// console.log(arr);
