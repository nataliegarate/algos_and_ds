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

function nthLowestNode(root, k) {
  let level = 0;
  function getLevel(node) {
    if (node === null) {
      return null;
    }
    let left = getLevel(node.left);
    if (left) {
      return left;
    }
    level += 1;
    if (level === k) {
      return node;
    } else {
      let right = getLevel(node.right);
      if (right) {
        return right;
      }
    }
  }
  return getLevel(root);
}

console.log(nthLowestNode(node3, 6));
