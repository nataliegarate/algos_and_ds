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
let node25 = new Node(2.5);
let node35 = new Node(3.5);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;
node2.right = node25;
node4.left = node35;

/*
      3
  2         4
1  2.5  3.5   5
*/

let displayTreePerimeter = function (root) {
  getLefts(root);
  getLeafs(root);
  getRights(root.right);
};

function getLefts(node) {
  if (node.left === null) {
    return;
  }
  console.log(node.data);
  return getLefts(node.left);
}

// console.log(getLefts(node3));

function getLeafs(node) {
  if (!node.left && !node.right) {
    console.log(node.data);
    return;
  }
  if (node.left) {
    getLeafs(node.left);
  }
  if (node.right) {
    getLeafs(node.right);
  }
}

// console.log(getLeafs(node3));

function getRights(node) {
  if (node.right === null) {
    return;
  }
  getRights(node.right);
  console.log(node.data);
}

// console.log(getRights(node3));

console.log(displayTreePerimeter(node3));
