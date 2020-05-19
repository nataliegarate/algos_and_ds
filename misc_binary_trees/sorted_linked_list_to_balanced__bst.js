var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return new TreeNode(head.val);
  }
  let parentLL = getMiddleOfList(head);
  let parent = new TreeNode(parentLL.val);
  parent.right = sortedListToBST(parentLL.next);
  parent.left = sortedListToBST(head);
  return parent;
};

function getMiddleOfList(node) {
  let p1 = node;
  let p2 = node;
  let prev1 = null;
  while (p2 && p2.next) {
    prev1 = p1;
    p1 = p1.next;
    p2 = p2.next.next;
  }
  prev1.next = null;
  return p1;
}

/*
Time Complexity:O(NlogN). Suppose our linked list consists of N elements.
 For every list we pass to our recursive function, we have to calculate the middle element for that list.
  For a list of size N, it takes N/2 steps to find the middle element i.e. O(N) to find the mid. 
  We do this for every half of the original linked list.


  Space:
  Space Complexity: O(logN). Since we are resorting to recursion, 
  there is always the added space complexity of the recursion stack that comes into picture. 
  This could have been O(N) for a skewed tree, but the question clearly states that we need to maintain the height balanced property.
  This ensures the height of the tree to be bounded by O(logN). 
  Hence, the space complexity is O(logN).

*/
