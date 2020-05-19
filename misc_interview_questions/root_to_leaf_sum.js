class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.next = null;
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

function rootToLeaf1(root) {
  let sum = 0;
  function rootToLeafHelper(root, currentNum) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right == null) {
      currentNum += root.data;
      sum += Number(currentNum);
      return;
    }
    currentNum += root.data;
    if (root.left) {
      rootToLeafHelper(root.left, currentNum);
    }
    if (root.right) {
      rootToLeafHelper(root.right, currentNum);
    }
  }

  rootToLeafHelper(root, "");
  return sum;
}

function rootToLeaf2(root) {
  function rootToLeafHelper(root, soFar) {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) {
      return soFar * 10 + root.data;
    }
    return (
      rootToLeafHelper(root.right, soFar * 10 + root.data) +
      rootToLeafHelper(root.left, soFar * 10 + root.data)
    );
  }

  return rootToLeafHelper(root, 0);
}
