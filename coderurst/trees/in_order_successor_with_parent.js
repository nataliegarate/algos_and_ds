let findSuccessor = function (root, d) {
  console.log(root.data);
  if (root.data > d) {
    if (root.left === null) {
      return root;
    }
    return findSuccessor(root.left, d);
  }
  if (root.data <= d) {
    let parent;
    if (!root.right) {
      parent = root.parent;
      while (parent.data < root.data) {
        parent = parent.parent;
      }
      return parent;
    }
    return findSuccessor(root.right, d);
  }
};

console.log(findSuccessor(node3, 2));
