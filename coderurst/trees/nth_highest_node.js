// Nth Highest Number in Binary Search Tree
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

function findNthHighestInBST(node, n, count = [0]) {
  if (node === null) {
    return null;
  }
  let result = findNthHighestInBST(node.right, n, count);
  if (result) {
    return result;
  }
  count[0] = count[0] + 1;
  if (count[0] === n) {
    return node;
  }
  result = findNthHighestInBST(node.left, n, count);
  if (result) {
    return result;
  }
  return null;
}

console.log(findNthHighestInBST(node3, 2));

//get to highest node
//check self
