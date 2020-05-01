class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let noden3 = new Node(-3);
let noden9 = new Node(-9);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;
node1.left = noden3;
noden3.left = noden9;

class InorderIterator {
  // TODO: Write - Your - Code
  constructor(root) {
    this.stack = [];
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }
  hasNext() {
    if (this.stack.length > 0) {
      return true;
    }
    return false;
  }
  // getNext returns null if there are no more elements in tree
  getNext() {
    let result = this.stack.pop();
    let nextNode = result.right;
    while (nextNode) {
      this.stack.push(nextNode);
      nextNode = nextNode.left;
    }
    return result;
  }
}

let inorderUsingIterator = function (root) {
  let iter = new InorderIterator(root);
  let result_str = "";
  while (iter.hasNext()) {
    let ptr = iter.getNext();
    result_str += ptr.data + " ";
  }
  return result_str;
};

console.log(inorderUsingIterator(node3));
