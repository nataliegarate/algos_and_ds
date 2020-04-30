// Reverse Alternate K Nodes in a Singly Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let reverseKNodes = function (head, k) {
  if (!k) {
    return head;
  }
  let beforeNode1 = null;
  let node1 = head;
  let beforeNode2 = getBeforeNode2(node1, k);
  let node2 = beforeNode2.next;
  head = node2;

  while (node1 && node2) {
    reverseNodes(node1, beforeNode1, node2, beforeNode2);
    beforeNode1 = node1;
    node1 = beforeNode1.next;
    if (node1) {
      beforeNode2 = getBeforeNode2(node1, k);
      node2 = beforeNode2.next;
    }
  }
  return head.next.next.next;
};

function getBeforeNode2(node, num) {
  let cur = node;
  while (num - 2 > 0) {
    cur = cur.next;
    num--;
  }
  return cur;
}

function reverseNodes(node1, beforeNode1, node2, beforeNode2) {
  let afterNode1 = node1.next;
  let afterNode2 = node2.next;

  if (beforeNode1) {
    beforeNode1.next = node2;
  }
  node2.next = afterNode1;

  beforeNode2.next = node1;
  node1.next = afterNode2;
}

console.log(reverseKNodes(node1, 1));
