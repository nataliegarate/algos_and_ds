// Intersection Point of Two Lists
// find length of each linked list
// if one is 5 and another is 3
// need to move ahead 2 spaces in the one that is longer then go from there

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let special = new Node(53);
let node00 = new Node(00);
let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node00.next = node0;
node0.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = special;

let node11 = new Node(11);
let node22 = new Node(22);
let node33 = new Node(33);
let node44 = new Node(44);
let node55 = new Node(55);

node11.next = node22;
node22.next = node33;
node33.next = node44;
node44.next = special;

let intersect = function (head1, head2) {
  let length1 = findLength(head1);
  let length2 = findLength(head2);
  let cur1 = head1;
  let cur2 = head2;
  console.log(length1, length2);
  if (length1 > length2) {
    cur1 = getStartingNode(cur1, length1 - length2);
  }
  if (length2 > length1) {
    console.log("i made it jere");
    cur2 = getStartingNode(cur2, length2 - length1);
  }
  console.log(cur1, cur2);
  return compareNodes(cur1, cur2);
};

function findLength(node) {
  let cur = node;
  let count = 0;
  while (cur) {
    count++;
    cur = cur.next;
  }
  return count;
}

function getStartingNode(node, num) {
  let cur = node;
  while (num) {
    cur = cur.next;
    num--;
  }
  return cur;
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

console.log(intersect(node11, node00));
