class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new LinkedNode(20);
head.next = new LinkedNode(30);
head.next.next = new LinkedNode(40);

console.log(head.next.next.next);