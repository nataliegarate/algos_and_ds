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
let node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

let reverseKNodes = function (head, k) {
  let prev = null;
  let cur = head;
  let returnHead = null;

  while (cur) {
    let results = reverseNodes(cur, k);
    let temp = results[1];
    if (prev) {
      prev.next = results[0];
    }
    if (!returnHead) {
      returnHead = results[0];
    }
    prev = cur;
    cur = temp;
  }
  return returnHead;
};

function reverseNodes(node, count) {
  let cur = node;
  let prev = null;
  while (cur && count) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
    count--;
  }
  return [prev, cur];
}

console.log(reverseKNodes(node1, 4));
