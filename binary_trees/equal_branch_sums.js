// lowest tree with equal branch sum

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node11 = new Node(1);
let node3 = new Node(3);
let node4 = new Node(4);
// let node5 = new Node(5);

node3.left = node2;
node3.right = node4;
// node4.right = node5;
node2.left = node1;
node2.right = node11;

function branchSums(node) {
  if (node === null) {
    return 0;
  }
  let left = branchSums(node.left);
  let right = branchSums(node.right);
  if (left && right && left === right) {
    return node;
  }
  if (typeof left !== "number") {
    return left;
  }
  if (typeof right !== "number") {
    return right;
  }
  return left + right + node.data;
}
// console.log(branchSums(node3));

//highest tree with same branch sums

function branchSums2(node) {
  let recent = null;
  function helper(node) {
    if (node === null) {
      return 0;
    }
    let left = helper(node.left);
    let right = helper(node.right);
    if (left && right && left === right) {
      recent = node;
      console.log(node);
    }
    return left + right + node.data;
  }
  helper(node);
  return recent;
}

console.log(branchSums2(node3));
