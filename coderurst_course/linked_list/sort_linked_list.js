class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(20);
let node2 = new Node(18);
let node3 = new Node(57);
let node4 = new Node(2);

// let node4 = new Node(5);
// let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;

let insertionSort = function (head) {
  let newHead = new Node(head.data);
  let cur = head.next;
  while (cur) {
    newHead = insertNewNode(cur, newHead);
    cur = cur.next;
  }
  return newHead;
};

let insertNewNode = function (node, head) {
  let cur = head;
  while (cur) {
    if (cur.next === null && cur.data <= node.data) {
      cur.next = new Node(node.data);
      return head;
    } else if (cur.data <= node.data && cur.next && cur.next.data > node.data) {
      let newNode = new Node(node.data);
      let temp = cur.next;
      cur.next = newNode;
      newNode.next = temp;
      return head;
    } else if (cur.data > node.data && head.data === cur.data) {
      let newNode = new Node(node.data);
      newNode.next = cur;
      return newNode;
    } else {
      cur = cur.next;
    }
  }
};

console.log(insertionSort(node1));
