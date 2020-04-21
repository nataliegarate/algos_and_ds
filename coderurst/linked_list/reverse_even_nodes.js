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

let reverseEvenNodes = function (head) {
  let even = [];
  let odd = [];
  let i = 1;
  let cur = head;
  while (cur) {
    if (i % 2 === 0 && i !== 1) {
      even.push(cur);
    } else {
      odd.push(cur);
    }
    cur = cur.next;
    i++;
  }
  let oddIdx = 0;
  let first = odd[oddIdx];
  first.next = even.pop();
  prev = first.next;
  oddIdx++;

  while (even.length && oddIdx < odd.length) {
    prev.next = odd[oddIdx];
    prev = even.pop();
    odd[oddIdx].next = prev;
    oddIdx++;
  }
  if (odd[oddIdx]) {
    prev.next = odd[oddIdx];
  } else {
    prev.next = null;
  }
  return first.next.next.next;
};

console.log(reverseEvenNodes(node1));
