function branchSums(root, currentSum = 0, sums = []) {
  if (!root.left && !root.right) {
    sums.push(currentSum + root.value);
    return sums;
  }

  currentSum += root.value;
  if (root.left) {
    branchSums(root.left, currentSum, sums);
  }
  if (root.right) {
    branchSums(root.right, currentSum, sums);
  }
  return sums;
}

//time O(n) and space O(n)
