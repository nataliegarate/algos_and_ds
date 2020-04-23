class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(20);
let node4 = new Node(25);
let node5 = new Node(40);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;

let isBst = function (root, max = Infinity, min = -Infinity) {
  if (root === null) {
    return true;
  }
  if (root.data > max || root.data < min) {
    return false;
  }
  return isBst(root.left, root.data, min) && isBst(root.right, max, root.data);
};

console.log(isBst(node3));
