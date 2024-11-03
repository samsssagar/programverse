function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const node = new TreeNode(10);
const node1 = new TreeNode(11);
node.left = node1;
const node2 = new TreeNode(8);
node.right = node2;
const node3 = new TreeNode(9);
const node4 = new TreeNode(7);
const node5 = new TreeNode(1);
const node6 = new TreeNode(2);
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

console.log(node);

function preOrderTraversal(node) {

};



preOrderTraversal(node);

