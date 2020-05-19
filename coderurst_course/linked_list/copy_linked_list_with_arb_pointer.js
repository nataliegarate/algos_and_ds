class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.arbitrary = null;
  }
}

let node1 = new LinkedListNode(1);
let node2 = new LinkedListNode(2);
let node3 = new LinkedListNode(3);
let node4 = new LinkedListNode(4);
let node5 = new LinkedListNode(5);

node1.next = node2;
node1.arbitrary = node2;
node2.next = node3;
node2.arbitrary = node4;
node3.next = node4;
node4.next = node5;
node4.arbitrary = node1;

let deepCopyArbitraryPointer = function (head) {
  let cur = head;
  let prevNew = null;
  let nodeMap = new Map();
  let newHead = null;
  // Copy List and save abitraries
  while (cur) {
    newCur = new LinkedListNode(cur.data);
    newCur.arbitrary = cur.arbitrary;
    nodeMap.set(cur, newCur);
    newHead ? null : (newHead = newCur);
    prevNew ? (prevNew.next = newCur) : null;
    prevNew = newCur;
    cur = cur.next;
  }
  console.log(nodeMap);
  console.log();
  cur = newHead;
  while (cur) {
    cur.arbitrary = nodeMap.get(cur.arbitrary);
    cur = cur.next;
  }
  return newHead;
};

let result = deepCopyArbitraryPointer(node1);
console.log(result);
