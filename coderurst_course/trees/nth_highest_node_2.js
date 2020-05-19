class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.visited = false;
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
   2            4
1    2.5    3.5   5
 1.5
*/

let findNthHighestInBST = function (node, n) {
  let sum = 0;
  function helper(root) {
    if (root === null) {
      return null;
    }
    let right = helper(root.right);
    if (right) {
      return right;
    }
    sum = sum + 1;
    if (sum === n) {
      return root;
    }
    let left = helper(root.left);
    if (left) {
      return left;
    }
    return null;
  }
  return helper(node);
};

console.log(findNthHighestInBST(node3, -8));
