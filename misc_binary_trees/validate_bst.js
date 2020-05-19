function isValidBST(root) {
  function checkNode(node, lowerLimit, upperLimit) {
    if (node === null) {
      return true;
    }
    if (node.val >= upperLimit || node.val <= lowerLimit) {
      return false;
    }
    return (
      checkNode(node.left, lowerLimit, node.val) &&
      checkNode(node.right, node.val, upperLimit)
    );
  }
  return checkNode(root, -Infinity, Infinity);
}

/*

     5
    / \
   1   4
      / \
     3   6

*/

// ALT
// function isValidBST(node, lower = -Infinity, upper = Infinity) {
//     if (node === null) {
//         return true;
//     }
//     let left = isValidBST(node.left, lower, node.val);
//     let right = isValidBST(node.right, node.val, upper);
//     return left && right && node.val < upper && node.val > lower;
// }
