var rightSideView = function (root) {
  let vals = [];
  let maxDepth = 0;
  function helper(root, curDepth) {
    if (root == null) {
      return null;
    }
    if (curDepth > maxDepth) {
      vals.push(root.val);
      maxDepth = curDepth;
    }
    helper(root.right, curDepth + 1);
    helper(root.left, curDepth + 1);
  }
  helper(root, 1, 0);
  return vals;
};
