class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(15);
let node2 = new Node(20);
let node3 = new Node(25);
let node4 = new Node(30);
// let node5 = new Node(25);
// let node6 = new Node(30);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;
// node5.next = node6;

let node11 = new Node(14);
let node22 = new Node(16);
// let node33 = new Node(26);
// let node44 = new Node(31);
// let node55 = new Node(36);

node11.next = node22;
// node22.next = node33;
// node33.next = node44;
// node44.next = node55;

// if p1 < p2
// if p1.next > p2, p1.next = p2
// else p1++

// if p2 < p1
//  if p2.next > p1, p1++
// else p2++

// [15, 20, 25, 30]
// [(16, 21, 26, 31, 36)]
//15 16

let mergeSorted = function (head1, head2) {
  let p1 = head1;
  let p2 = head2;
  let finalHead;
  if (p1.data < p2.data) {
    finalHead = p1;
    p1 = p1.next;
  } else {
    finalHead = p2;
    p2 = p2.next;
  }
  let curHead = finalHead;
  while (p1 && p2) {
    if (p1.data < p2.data) {
      curHead.next = p1;
      curHead = p1;
      p1 = p1.next;
    } else {
      curHead.next = p2;
      curHead = p2;
      p2 = p2.next;
    }
  }
  if (p1 === null) {
    curHead.next = p2;
  } else if (p2 === null) {
    curHead.next = p1;
  }
  return finalHead;
};

console.log(mergeSorted(node1, node11));
