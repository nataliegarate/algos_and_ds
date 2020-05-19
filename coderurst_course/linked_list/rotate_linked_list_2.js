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

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let rotateList = function (head, n) {
  let length = getLength(head);
  if (!n) {
    return head;
  }
  if (n > length || n < -length) {
    n = getUseableN(n, length);
  }
  if (n < 0) {
    n = n * -1;
  }
  console.log(n);
  let newLast = getNthLastNode(head, n + 1);
  let newHead = newLast.next;
  let oldLast = getOldLast(newLast);
  console.log("new last", newLast);
  console.log("newHead", newHead);

  oldLast.next = head;
  newLast.next = null;
  return newHead;
};

function getUseableN(n, length) {
  newN = n % length;
  return newN;
}

function getLength(node) {
  let length = 0;
  let cur = node;
  while (cur) {
    length++;
    cur = cur.next;
  }
  return length;
}

function getNthLastNode(node, n) {
  let cur = node;
  let nthLast = node;
  while (n) {
    nthLast = nthLast.next;
    n--;
  }
  while (cur && nthLast) {
    cur = cur.next;
    nthLast = nthLast.next;
  }
  return cur;
}

function getOldLast(node) {
  let cur = node;
  while (cur.next) {
    cur = cur.next;
  }
  return cur;
}

console.log(rotateList(node1, -22));
