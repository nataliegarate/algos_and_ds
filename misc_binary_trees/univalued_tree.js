var isUnivalTree = function(root, prev) {
  if (root === null) {
    return true;
  }
  if (prev === undefined || prev === root.val) {
    return (
      true &&
      isUnivalTree(root.left, root.val) &&
      isUnivalTree(root.right, root.val)
    );
  }
  return false;
};
