/* Better */

var searchBST = function (root, val) {
  if (root === null || root.val === val) {
    return root;
  }
  if (root.val < val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.left, val);
  }
};

/* not as real recursion */

function find_value() {
  let result = null;
  function helper(node, target) {
    if (node === null) {
      return;
    }
    if (node.val === target) {
      result = node;
    }
    helper(node.left, val);
    helper(node.right, val);
  }
  helper(root, val);
  return result;
}
