var swapPairs = function (head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  if (head.next) {
    let firstNode = head;
    let secondNode = head.next;

    firstNode.next = swapPairs(secondNode.next);
    secondNode.next = firstNode;

    return secondNode;
  }
};
