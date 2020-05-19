// Sort a Linked List Using Merge Sort
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(6);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(8);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let mergeSort = function (head) {
  if (head.next === null) {
    return head;
  }
  let leftHead = head;
  let rightHead = findRightHead(head);
  let sortedLeftHead = mergeSort(leftHead);
  let sortedRightHead = mergeSort(rightHead);
  return mergeLists(sortedLeftHead, sortedRightHead);
};

function mergeLists(node1, node2) {
  let cur1 = node1;
  let cur2 = node2;
  let head = null;
  let lesser = null;
  let prev = null;
  while (cur1 && cur2) {
    if (cur1.data < cur2.data) {
      lesser = cur1;
      cur1 = cur1.next;
    } else {
      lesser = cur2;
      cur2 = cur2.next;
    }
    if (prev) {
      prev.next = lesser;
    }
    prev = lesser;
    if (head === null) {
      head = lesser;
    }
  }
  if (cur1 !== null) {
    prev.next = cur1;
  }
  if (cur2 !== null) {
    prev.next = cur2;
  }
  return head;
}

function findRightHead(node) {
  let node1 = node;
  let node2 = node;
  let prev1 = null;
  while (node2 && node2.next) {
    prev1 = node1;
    node1 = node1.next;
    node2 = node2.next.next;
  }
  prev1.next = null;
  return node1;
}

let result = mergeSort(node1);
console.log(result);
