function isValidBST(node, lower = -Infinity, upper = Infinity) {
  if (node === null) {
    return true;
  }
  let left = isValidBST(node.left, lower, node.val);
  let right = isValidBST(node.right, node.val, upper);
  return left && right && node.val < upper && node.val > lower;
}

//tested via leetcode
//note: must pass values into function without any variable declarations
