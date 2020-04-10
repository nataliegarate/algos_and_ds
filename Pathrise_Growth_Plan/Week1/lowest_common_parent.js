class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

//root
let root = new Node(10);

//left
let nodeLeft = new Node(5);
nodeLeft.parent = root;
root.left = nodeLeft;

//leftleft
let nodeLeftLeft = new Node(3);
nodeLeftLeft.parent = nodeLeft;
nodeLeft.left = nodeLeftLeft;

//leftleftleft
let nodeLeftLeftLeft = new Node(17);
nodeLeftLeftLeft.parent = nodeLeftLeft;
nodeLeftLeft.left = nodeLeftLeftLeft;

//leftright
let nodeLeftRight = new Node(6);
nodeLeftRight.parent = nodeLeft;
nodeLeft.right = nodeLeftRight;

//leftrightright
let nodeLeftRightRight = new Node(16);
nodeLeftRightRight.parent = nodeLeftRight;
nodeLeftRight.right = nodeLeftRightRight;

//right
let nodeRight = new Node(15);
nodeRight.parent = root;
root.right = nodeRight;

// console.log(root.left);

// function lcp2(rooty, node1, node2, set) {
//   if (set === undefined) {
//     set = new Set();
//   }
//   if (set.has(node1)) {
//     console.log("returning");
//     return node1;
//   }
//   set.add(node1);
//   if (set.has(node2)) {
//     console.log("returning");
//     return node2;
//   }
//   set.add(node2);
//   return lcp(rooty, node1.parent, node2.parent, set);
// }

// console.log(lcp2(root, nodeLeftLeft, nodeLeftRight));

function lcp3(node1, node2) {
  let originalNode1 = node1;
  while (node2 !== null) {
    node1 = originalNode1;
    while (node2 !== node1 && node1 !== null) {
      node1 = node1.parent;
      if (node2 === node1) {
        return node2;
      }
    }
    node2 = node2.parent;
  }
}
// console.log(lcp3(nodeLeft, nodeRight));
// console.log(lcp3(nodeLeftLeft, root));
console.log(lcp3(nodeLeftLeftLeft, nodeLeftRightRight));
