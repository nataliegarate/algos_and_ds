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

function lca(head, node1, node2) {
  function helper(head, node1, node2) {
    if (head === null) {
      return null;
    }
    let left = helper(head.left, node1, node2);
    let right = helper(head.right, node1, node2);
    let self = head === node2 || head === node1;
    if ((left && right) || (right && self) || (left && self) || self) {
      return head;
    }
    if (left) {
      return left;
    }
    if (right) {
      return right;
    }
    return null;
  }
  return helper(head, node1, node2);
}

console.log(lca(node3, node5, node4));
