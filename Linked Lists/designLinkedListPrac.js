class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length()) return -1;
    let currHead = this.head;
    for (let i = 0; i < index; i++) {
        currHead = currHead.next;
    }
    return currHead.val;
}

LinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
}

LinkedList.prototype.addAtTail = function (val) {
    if (!this.head) {
        this.addAtHead(val);
        return;
    };
    let curr = this.head;
    const node = new Node(val);
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = node;
}

LinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index >= this.length()) return;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.length()) {
        this.addAtTail(val);
        return;
    }
    let node = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
}

LinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length()) return;
    if (index === 0) {
        let curr = this.head;
        this.head = curr.next;
        return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
}

LinkedList.prototype.length = function () {
    let count = 0;
    let curr = this.head;
    while (curr) {
        curr = curr.next;
        count++;
    }
    return count;
}

const linkedList = new LinkedList();

linkedList.addAtHead(2);
linkedList.addAtHead(4);
linkedList.addAtTail(5);
linkedList.get(2)
linkedList.addAtIndex(2, 6);
console.log(linkedList.get(2));
linkedList.deleteAtIndex(0)


console.log(linkedList);