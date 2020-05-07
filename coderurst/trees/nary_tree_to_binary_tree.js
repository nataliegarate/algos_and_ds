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

let convertN_aryToBinary = function (node) {
  if (node === null) {
    return null;
  }

  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];
    if (i === 0) {
      convertN_aryToBinary(child);
      node.left = child;
    } else {
      let prevNode = node.children[i - 1];
      convertN_aryToBinary(child);
      if (!prevNode.left) {
        prevNode.left = child;
      } else {
        prevNode.right = child;
      }
    }
  }
  return node;
};

let result = convertN_aryToBinary(node1);
console.log(result.left.left);

// let convertBinaryToN_ary = function (node) {
//   //TODO: Write - Your - Code
//   return null;
// };
