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

console.log(node);