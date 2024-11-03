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

const list = new LinkedList();
const node = new Node(5);
list.head = node;
const node1 = new Node(6);
node.next = node1;
const node2 = new Node(9);
node1.next = node2;
const node3 = new Node(1);
node2.next = node3;
const node4 = new Node(8);
node3.next = node4;
const node5 = new Node(2);
node4.next = node5;

function middleElement() {
    let curr = list.head;
    let count = 0;
    let mid;
    while (curr) {
        count++;
        curr = curr.next;
    }
    if (count % 2 !== 0) mid = Math.trunc(count / 2);
    else mid = count / 2;
    curr = list.head;
    while (curr && mid) {
        curr = curr.next;
        mid--;
    }
    return curr;
}

console.log(middleElement());