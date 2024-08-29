class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new LinkedNode(20);
head.next = new LinkedNode(30);
head.next.next = new LinkedNode(40);


function insertAtFront(n) {
    let temp = new LinkedNode(n);
    temp.next = head;
    head = temp;
}


function insertAtAnyPos(prev, data) {
    let temp = new LinkedNode(data);
    temp.next = prev.next;
    prev.next = temp;
}

function insertAtEnd(n) {
    let temp = new LinkedNode(n);
    if (head === null) head = temp;
    let currHead = head;
    while (currHead.next !== null) {
        currHead = currHead.next;
    }
    currHead.next = temp;
}

function deleteNode(prev, curr) {
    prev.next = curr.next;
}

// insertAtFront(1);
// insertAtEnd(70);
// insertAtEnd(80);
// insertAtAnyPos(head.next.next, 80);
deleteNode(head.next, head.next.next);
console.log(head);