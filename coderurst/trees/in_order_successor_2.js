// so one way of course is to push the nodes into an array in order. Then,
//search for the target, and return the value after it. But that is not optimal

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

/*

            3
        2       4
    1               5
*/

let inorderSuccessorBST = function (root, d) {
  if (root === null) {
    return null;
  }
  if (root.data <= d) {
    return inorderSuccessorBST(root.right, d);
  } else if (root.data > d) {
    let left = inorderSuccessorBST(root.left, d);
    if (left === null) {
      return root.data;
    } else {
      return left;
    }
  }
};

console.log(inorderSuccessorBST(node3, 3));
