function isSubtree(t1, t2) {
  if (!t1 && !t2) {
    return true;
  }
  if (!t1 || t2) {
    return false;
  }
  let result;
  if (t1.val === t2.val) {
    result = compareTrees(t1, t2);
  }
  if (result === true) {
    return true;
  } else {
    let left = isSubtree(t1.left, t2);
    let right = isSubtree(t1.right, t2);
    return left || right;
  }
}

function compareTrees(node1, node2) {
  if (!node && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  if (node1.val !== node2.val) {
    return false;
  }
  let left = compareTrees(node1.left, node2.left);
  let right = compareTrees(node1.right, node2.right);
  return left && right;
}
