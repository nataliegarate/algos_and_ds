class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.children = [node2, node3, node4];
node3.children = [node5, node6];
let convertN_aryToBinary = function (node, direction = "left") {
  if (node === null) {
    return null;
  }
  let nextDirection;
  if (direction === "left") {
    nextDirection = "right";
  } else {
    nextDirection = "left";
  }
  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];
    if (i === 0) {
      node[direction] = child;
      convertN_aryToBinary(child, nextDirection);
    } else {
      let prevNode = node.children[i - 1];
      prevNode[direction] = child;
      convertN_aryToBinary(child, nextDirection);
    }
  }

  return node;
};

// ALT
// let convertN_aryToBinary = function (node) {
//   if (node === null) {
//     return null;
//   }

//   for (let i = 0; i < node.children.length; i++) {
//     let child = node.children[i];
//     if (i === 0) {
//       convertN_aryToBinary(child);
//       node.left = child;
//     } else {
//       let prevNode = node.children[i - 1];
//       convertN_aryToBinary(child);
//       if (!prevNode.left) {
//         prevNode.left = child;
//       } else {
//         prevNode.right = child;
//       }
//     }
//   }
//   return node;
// };

// let result = convertN_aryToBinary(node1);
// console.log(result);
class Node2 {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node11 = new Node2(1);
let node22 = new Node2(2);
let node33 = new Node2(3);
let node44 = new Node2(4);
let node55 = new Node2(5);
let node66 = new Node2(6);

node11.left = node22;
node22.left = node33;
node33.left = node44;
node33.right = node55;
node55.right = node66;

let convertBinaryToN_ary = function (node) {
  if (!node) {
    return null;
  }
  return helper(node, node.left, "left");
};

function helper(parent, child, direction) {
  if (child === null) {
    return parent;
  }
  let oppDir;
  direction === "left" ? (oppDir = "right") : (oppDir = "left");
  if (!parent.children) {
    parent.children = [];
  }
  parent.children.push(child);
  helper(parent, child[direction], direction);
  helper(child, child[direction], oppDir);
  return parent;
}

let result = convertN_aryToBinary(node1);
console.log(result.children[1]);
