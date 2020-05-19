class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node25 = new Node(25);
let node30 = new Node(30);
let node50 = new Node(50);
let node60 = new Node(60);
let node75 = new Node(75);
let node100 = new Node(100);
let node200 = new Node(200);
let node350 = new Node(350);

node100.left = node50;
node100.right = node200;
node50.left = node25;
node50.right = node75;
node25.right = node30;
node75.left = node60;
node200.right = node350;

let convertToLinkedList = function (root) {
  if (root === null) {
    return null;
  }
  let finalHead = root;
  if (root.left) {
    let left = convertToLinkedList(root.left);
    if (left) {
      finalHead = left;
      let lastLeft = findLastLeft(left);
      lastLeft.right = root;
      root.left = lastLeft;
    }
  }
  if (root.right) {
    let right = convertToLinkedList(root.right);
    if (right) {
      root.right = right;
      right.left = root;
    }
  }
  return finalHead;
};

function findLastLeft(node) {
  let cur = node;
  while (cur.right) {
    cur = cur.right;
  }
  return cur;
}

console.log(convertToLinkedList(node100));
