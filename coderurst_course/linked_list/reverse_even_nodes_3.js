// Sort Linked List Using Insertion Sort

class Node {
  constructor(data) {
    this.data = data;
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

let reverseEvenNodes = function (head) {
  let count = 1;
  let evenHead = null;
  let cur = head;
  let prev = null;
  while (cur) {
    let temp = cur.next;
    if (count % 2 === 0) {
      prev.next = temp;
      cur.next = evenHead;
      evenHead = cur;
    } else {
      prev = cur;
    }
    count++;
    cur = temp;
  }
  // next merge lists
  let curOdd = head;
  let curEven = evenHead;
  while (curOdd && curEven) {
    let evenTemp = curEven.next;
    let oddTemp = curOdd.next;
    curOdd.next = curEven;
    curEven.next = oddTemp;
    curOdd = oddTemp;
    curEven = evenTemp;
  }

  return head.next.next.next;
};

console.log(reverseEvenNodes(node1));
