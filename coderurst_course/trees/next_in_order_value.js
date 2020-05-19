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

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;

let inorderSuccessorBST = function (root, d) {
  if (root === null) {
    return null;
  }
  if (root.data > d) {
    let leftVal = inorderSuccessorBST(root.left, d);
    if (leftVal !== null) {
      return leftVal;
    } else {
      return root.data;
    }
  }
  return inorderSuccessorBST(root.right, d);
};

console.log(inorderSuccessorBST(node3, 2));
