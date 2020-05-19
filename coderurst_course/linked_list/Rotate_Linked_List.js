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
  n = getN(head, n);
  if (n === 0) {
    return head;
  }
  let endPoint = findNthNodeToLast(head, n + 1);
  let newHead = endPoint.next;
  endPoint.next = null;
  cur = newHead;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = head;
  return newHead;
};

function findNthNodeToLast(node, num) {
  let cur = node;
  let second = node;
  while (num) {
    second = second.next;
    num--;
  }
  while (second) {
    cur = cur.next;
    second = second.next;
  }
  return cur;
}

function getN(node, n) {
  let length = 0;
  let cur = node;
  while (cur) {
    length++;
    cur = cur.next;
  }
  if (n > length || n < -length) {
    n = n % length;
  }
  if (n < 0) {
    n = length + n;
  }
  return n;
}

console.log(rotateList(node1, 23));

[1, 2, 3, 4, 5];
