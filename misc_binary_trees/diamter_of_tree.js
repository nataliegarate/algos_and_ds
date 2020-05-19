var diameterOfBinaryTree = function(root) {
  let ultimateMax = 0;
  function helper(node) {
    if (node === null) {
      return 0;
    }
    let righty = helper(node.right);
    let lefty = helper(node.left);
    ultimateMax = Math.max(ultimateMax, lefty + righty);
    return 1 + Math.max(lefty, righty);
  }
  helper(root);
  return ultimateMax;
};
