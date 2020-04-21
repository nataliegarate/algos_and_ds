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

/*

      3
   2    4
1   2  3.5   5
*/

let areIdentical = function (root1, root2) {
  if (root1 === null && root2 === null) {
    return true;
  } else if (root1 === null || root2 === null) {
    return false;
  }
  return (
    root1.data === root2.data &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  );
};

console.log(areIdentical(node1, node2));
