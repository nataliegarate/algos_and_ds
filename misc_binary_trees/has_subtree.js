// time complexity: (0)n * m, length of each tree
// space complexity: 0(n), height of the tallest tree

var isSubtree = function (s, t) {
  if (s === null) {
    return false;
  }
  let result = false;
  if (s.val === t.val) {
    result = compareTrees(s, t);
  }
  if (result) {
    return true;
  } else {
    return isSubtree(s.left, t) || isSubtree(s.right, t);
  }
};

function compareTrees(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  if (node1.val !== node2.val) {
    return false;
  }
  let self = node1.val === node2.val;
  let left = compareTrees(node1.left, node2.left);
  let right = compareTrees(node1.right, node2.right);
  return left && right && self;
}
