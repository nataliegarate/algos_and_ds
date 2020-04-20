class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let special = new Node(53);
let node00 = new Node(0);
let node0 = new Node(3);
let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(20);
let node4 = new Node(5);
let node5 = new Node(5);

node00.next = node0;
node0.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = special;

let node11 = new Node(5);
let node22 = new Node(10);
let node33 = new Node(20);
let node44 = new Node(5);
let node55 = new Node(5);

node11.next = node22;
node22.next = node33;
node33.next = node44;
node44.next = special;

let intersect = function (head1, head2) {
  let length1 = getLength(head1);
  let length2 = getLength(head2);
  let num;
  if (length2 > length1) {
    num = length2 - length1;
    head2 = findStartingPoint(head2, num);
  } else {
    num = length1 - length2;
    if (num !== 0) {
      head1 = findStartingPoint(head1, num);
    }
  }
  return compareNodes(head1, head2);
};

function findStartingPoint(node, num) {
  let starter = node;
  while (num) {
    starter = starter.next;
    num--;
  }
  return starter;
}

function compareNodes(node1, node2) {
  let cur1 = node1;
  let cur2 = node2;
  while (cur1 && cur2) {
    if (cur1 === cur2) {
      return cur1;
    }
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return null;
}

function getLength(head) {
  let count = 0;
  let cur = head;
  while (cur) {
    count++;
    cur = cur.next;
  }
  return count;
}

console.log(intersect(node00, node11));
