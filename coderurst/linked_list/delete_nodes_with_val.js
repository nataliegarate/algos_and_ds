// Delete All Occurrences of a Given Key in a Linked List
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

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let deleteNode = function (head, key) {
  let prev = null;
  let cur = head;
  while (cur) {
    if (prev === null && cur.val === key) {
      let temp = head.next;
      head.next = null;
      head = temp;
      prev = null;
      cur = temp;
      //set new head and old head.next = null
    } else if (cur.val === key) {
      //remove
      prev.next = cur.next;
      cur = cur.next;
      // prev = prev;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};

console.log(deleteNode(node1, 5));
