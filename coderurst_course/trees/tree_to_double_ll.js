class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(0);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;

// use left for previous.
// use right for next.

let convertToLinkedList = function (root) {
  if (!root.left && !root.right) {
    root.left = null;
    root.right = null;
    return root;
  }
  let start = null;
  if (root.right) {
    let right = convertToLinkedList(root.right);
    right.left = root;
    root.right = right;
    start = root;
  }
  if (root.left) {
    let left = convertToLinkedList(root.left);
    let lastLeft = getLastVal(left);
    lastLeft.right = root;
    root.left = lastLeft;
    start = left;
  }

  return start;
};

let getLastVal = function (node) {
  let cur = node;
  while (cur.right) {
    cur = cur.right;
  }
  return cur;
};

console.log(convertToLinkedList(node3));
