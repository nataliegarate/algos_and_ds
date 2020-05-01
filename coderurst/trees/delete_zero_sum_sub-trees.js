class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let noden3 = new Node(-3);
let noden1 = new Node(-9);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;
node2.right = noden3;
node4.left = noden1;

let deleteZeroSumSubtree = function (root) {
  subTreeSums(root);
  return root;
};

function subTreeSums(node) {
  if (node === null) {
    return null;
  }
  let sum = 0;
  let leftVal = subTreeSums(node.left);
  let rightVal = subTreeSums(node.right);
  sum += node.data;
  if (!leftVal) {
    node.left = null;
  }
  if (!rightVal) {
    node.right = null;
  }
  sum += leftVal;
  sum += rightVal;
  return sum;
}

console.log(deleteZeroSumSubtree(node3));
