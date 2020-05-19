// Delete All Occurrences of a Given Key in a Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

function reverse(head) {
  function helper(node, prev) {
    if (node.next === null) {
      node.next = prev;
      return node;
    }
    let newHead = helper(node.next, node);
    node.next = prev;
    return newHead;
  }
  return helper(head, null);
}

console.log(reverse(node1));
