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
  let oldHead = head.next;
  newHead.next = null;

  while (oldHead) {
    console.log("oldHead", oldHead);
    console.log(oldHead.data, newHead.data);
    if (oldHead.data < newHead.data) {
      let temp = oldHead.next;
      oldHead.next = newHead;
      newHead = oldHead;
      oldHead = temp;
    } else {
      let temp = oldHead.next;
      insertNodeBehind(newHead, oldHead);
      console.log(oldHead);
      oldHead = temp;
    }
  }
  return newHead;
};

function insertNodeBehind(headNode, insertNode) {
  let cur = headNode;
  let prev = null;
  while (cur && cur.data < insertNode.data) {
    prev = cur;
    cur = cur.next;
  }
  prev.next = insertNode;
  insertNode.next = cur;
}

console.log(insertionSort(node1));
