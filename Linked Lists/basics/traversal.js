class LinkedList {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const node = new Node(2);
const list = new LinkedList();
list.head = node;
const node2 = new Node(5);
node.next = node2;
const node3 = new Node(7);
node2.next = node3;


function traverse(head) {
    let curr = head;
    while (curr) {
        console.log(curr);
        curr = curr.next;
    }
}

traverse(list.head);