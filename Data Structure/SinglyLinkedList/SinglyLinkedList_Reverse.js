/*
    ****** Reverse SinglyLinkedList Function Implementation *******
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

    reverseSinglyLinkedList(list) {
        let current = list.head;
        list.head = list.tail;
        list.tail = current;
        let prev = null;
        let next = null;

        while(current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        print(list);
        return list;
    }


    print(list) {
        let arr = [];
        let current = list.head;
    
        while (current !== null) {
            arr.push(current);
            current = current.next;
        }
    
        console.log(arr);
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}

// [13, 27, 32, 71] -> [71, 32, 27, 13]

let list = new SinglyLinkedList();

list.push(100);
list.push(200);
list.push(300);