class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// let head = new LinkedNode(20);
// head.next = new LinkedNode(30);
// head.next.next = new LinkedNode(40);
let head = null;
head = insertEnd(head, 10);
head = insertEnd(head, 20);
head = insertEnd(head, 30);

function insertEnd(head, n) {
    let temp = new LinkedNode(n);
    if (head === null) return temp;
    let currHead = head;
    while (currHead.next !== null) {
        currHead = currHead.next;
    }
    currHead.next = temp;
    return temp;
}
console.log(head);

function print(head) {
    if (head === null) {
        console.log("Linked list empty");
        return;
    }
    while (head.next !== null) {
        console.log(head.data);
        head = head.next;
    }
    console.log(head.data);
}

// print(head);