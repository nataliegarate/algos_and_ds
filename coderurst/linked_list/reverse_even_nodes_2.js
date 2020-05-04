// Reverse Alternate K Nodes in a Singly Linked List
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
// let node5 = new Node(5);
// let node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;
// node5.next = node6;

let reverseEvenNodes = function (head) {
  let evenHead = null;
  let prev = null;
  let cur = head;
  let count = 1;
  while (cur) {
    let temp = cur.next;
    if (count % 2 === 0) {
      cur.next = evenHead;
      evenHead = cur;
      prev.next = temp;
      if (!evenHead) {
        evenHead.next = null;
      }
    } else if (count % 2 !== 0) {
      prev = cur;
    }
    cur = temp;
    count++;
  }
  mergeLists(head, evenHead);
  return head;
};

function mergeLists(node1, node2) {
  let cur1 = node1;
  let cur2 = node2;
  while (cur1 && cur2) {
    let temp = cur1.next;
    cur1.next = cur2;
    cur1 = cur2;
    cur2 = temp;
  }
}

//feedback: you dont need to necessarily make an odd list, just extract evens

console.log(reverseEvenNodes(node1));
