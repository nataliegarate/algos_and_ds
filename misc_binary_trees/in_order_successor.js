function in_order(node, target) {
  if (node === null) {
    return null;
  }
  if (target < node.data) {
    let left = in_order(node.left, target);
    if (left === null) {
      return node;
    }
    return left;
  } else {
    return in_order(node.right, target);
  }
}

console.log(in_order(node));

/*
       10
    5       12
  2   9   11   14
9
*/
