class Node {
  constructor(val) {
    this.val = val;
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

function closestVal(head, target) {
  function helper(node) {
    if (node === null) {
      return null;
    }
    if (node.val === target) {
      return node;
    }
    let dif = Math.abs(node.val - target);
    let left = helper(node.left);
    let leftDif = Infinity;
    if (left) {
      leftDif = Math.abs(left.val - target);
    }
    let right = helper(node.right);
    let rightDif = Infinity;
    if (right) {
      rightDif = Math.abs(right.val - target);
    }
    let closest = Math.min(leftDif, rightDif, dif);
    if (closest === leftDif) {
      return left;
    }
    if (closest === rightDif) {
      return right;
    }
    return node;
  }
  return helper(head);
}

console.log(closestVal(node3, 1.3));
