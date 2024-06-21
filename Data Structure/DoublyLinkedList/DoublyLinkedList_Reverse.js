/*
    ********** Reverse Function *********
    Reverse the list.
1. Set current propery to be head.
2. Create a temp to store current next.
3. Loop until current is not null.
    a. Replace current next with current prev.
    b. Update current to be current prev.
    c. Update next & prev properties to remove the found node.
6. Set head to be tail & tail to be head.
*/

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

    reverse() {
        let temp = null;
        let current = this.head;

        while (current) {
            temp = current.next;  
            current.next = current.prev;  
            current.prev = temp;  
            current = current.prev;
        }
        temp = this.head;
        this.head = this.tail;  
        this.tail = temp;
    
        console.log(this.printList(list));
    }
    
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    printList(list) {
        let arr = [];
        let node = list.head
        while (node != null) {
            arr.push(node.val);
            node = node.next;
        }
        return arr;
    }
}
let list = new DoublyLinkedList();

for (let i = 0; i < 10; i++) {
    list.push(i);
}
list.reverse();
