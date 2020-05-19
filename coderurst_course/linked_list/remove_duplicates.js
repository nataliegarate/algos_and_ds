// We are given a linked list of integers and we have to remove all the duplicate nodes from it by keeping only the first occurrence of each duplicate.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new Node(5);
// let node2 = new Node(10);
let node3 = new Node(20);
let node4 = new Node(5);

let node5 = new Node(5);

node1.next = node3;
// node2.next = node3;
node3.next = node4;
node4.next = node5;

let removeDuplicates = function (head) {
  let nodes = new Set();
  nodes.add(head.val);
  let cur = head.next;
  let prev = head;
  while (cur) {
    if (nodes.has(cur.val)) {
      console.log("i made it here");
      prev.next = cur.next;
      prev = prev;
      cur = cur.next;
    } else {
      nodes.add(cur.val);
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};

console.log(removeDuplicates(node1));
