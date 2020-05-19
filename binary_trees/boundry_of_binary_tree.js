var boundaryOfBinaryTree = function (root) {
  if (!root) {
    return [];
  }
  let nodes = [];
  nodes.push(root.val);
  if (!root.left && !root.right) {
    return nodes;
  }
  getLeftSide(root.left, nodes);
  getLeafNodes(root, nodes);
  getRightNodes(root.right, nodes);
  return nodes;
};

function getLeftSide(node, arr) {
  if (node === null || (node.left === null && node.right === null)) {
    return null;
  }
  arr.push(node.val);
  if (node.left === null) {
    getLeftSide(node.right, arr);
  } else {
    getLeftSide(node.left, arr);
  }
}

function getLeafNodes(node, arr) {
  if (node.left === null && node.right === null) {
    arr.push(node.val);
    return;
  }
  if (node.left) {
    getLeafNodes(node.left, arr);
  }
  if (node.right) {
    getLeafNodes(node.right, arr);
  }
}

function getRightNodes(node, arr) {
  if (node === null || (node.right === null && node.left === null)) {
    return null;
  }
  if (node.right === null) {
    getRightNodes(node.left, arr);
  } else {
    getRightNodes(node.right, arr);
  }
  arr.push(node.val);
}
