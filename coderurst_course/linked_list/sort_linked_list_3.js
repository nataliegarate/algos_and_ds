// Sort Linked List Using Insertion Sort

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(29);
let node2 = new Node(23);
let node3 = new Node(82);
let node4 = new Node(11);

node1.next = node2;
node2.next = node3;
node3.next = node4;
let insertionSort = function (head) {
  let newHead = head;
  let cur = newHead.next;
  newHead.next = null;
  while (cur) {
    let temp = cur.next;
    if (cur.data <= newHead.data) {
      newHead = insertBefore(cur, newHead);
    } else {
      insertAfter(cur, newHead);
    }
    cur = temp;
  }
  return newHead.next.next.next;
};

function insertBefore(curNode, headNode) {
  curNode.next = headNode;
  return curNode;
}

function insertAfter(curNode, headNode) {
  let prev = null;
  let after = headNode;
  while (after && after.data < curNode.data) {
    let temp = after.next;
    prev = after;
    after = temp;
  }
  //going to stop when after is greater than or equal to node, making it the node that goes after curNode
  prev.next = curNode;
  curNode.next = after;
}

console.log(insertionSort(node1));
