class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(20);
let node4 = new Node(5);
let node5 = new Node(5);
let node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let findNthFromLast = function (head, n) {
  let p1 = head;
  let p2 = head;
  while (n) {
    p2 = p2.next;
    n--;
  }
  while (p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};

console.log(findNthFromLast(node1, 4));
