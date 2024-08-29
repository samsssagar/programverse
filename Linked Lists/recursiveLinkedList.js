class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new LinkedNode(20);
head.next = new LinkedNode(30);
head.next.next = new LinkedNode(40);
head.next.next.next = new LinkedNode(50);

function printNode(head) {
    console.log(head.data);
    if (head.next === null) return;
    printNode(head.next);
}

printNode(head);