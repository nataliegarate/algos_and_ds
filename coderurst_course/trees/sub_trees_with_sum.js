class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;

function subTrees(head, target) {
  let results = [];
  function helper(node) {
    if (!node) {
      return 0;
    }
    let leftSum = helper(node.left);
    let rightSum = helper(node.right);
    let totalSum = leftSum + rightSum + node.data;
    if (totalSum === target) {
      results.push(node);
    }
    return totalSum;
  }
  helper(head);
  return results;
}

console.log(subTrees(node3, 1));
