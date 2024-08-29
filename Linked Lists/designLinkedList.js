var MyLinkedList = function () {
    this.head = null;
};

class Node {
    constructor(val, next) {
        this.val = val == undefined ? 0 : val;
        this.next = next == undefined ? null : next;
    }
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.getLength()) return;
    let currHead = this.head;
    for (let i = 0; i < index; i++) {
        currHead = currHead.next;
    }
    return currHead.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
    let temp = new Node(val);
    temp.next = this.head;
    this.head = temp;
};

MyLinkedList.prototype.addAtTail = function (val) {
    let temp = new Node();
    temp.data = val;
    if (!this.head) {
        this.head = temp;
        return;
    }
    let currHead = this.head;
    while (currHead.next !== null) {
        currHead = currHead.next;
    }
    currHead.next = temp;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.getLength()) {
        this.addAtTail(val);
        return;
    }
    if (index > this.getLength()) return;
    let currHead = this.head;
    let temp = new Node();
    for (let i = 0; i < index - 1; i++) {
        currHead = currHead.next;
    }
    let next = currHead.next;
    currHead.next = temp;
    temp.next = next;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.getLength()) return;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    let currHead = this.head;
    for (let i = 0; i < index - 1; i++) {
        currHead = currHead.next;
    }
    currHead.next = currHead.next.next;
};

MyLinkedList.prototype.getLength = function () {
    let len = 0, cur = this.head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
};

var myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtTail(5);
myLinkedList.addAtIndex(1, 4);
myLinkedList.deleteAtIndex(1)
console.log(myLinkedList.get(1));
console.log(myLinkedList.head)