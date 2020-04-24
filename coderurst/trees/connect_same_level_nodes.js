class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node25 = new Node(2.5);
let node35 = new Node(3.5);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;
node2.right = node25;
node4.left = node35;

let populateSiblingPointers = function (root) {
  let queue = [{ node: root, level: 0 }];
  let curLevel = queue[0].level;
  let lastOne;
  let cur = null;

  while (queue.length > 0) {
    lastOne = cur;
    cur = queue.shift();
    if (curLevel === cur.level && lastOne) {
      lastOne.node.next = cur.node;
    }
    if (curLevel !== cur.level) {
      curLevel = cur.level;
    }
    if (cur.node.left) {
      queue.push({ node: cur.node.left, level: cur.level + 1 });
    }
    if (cur.node.right) {
      queue.push({ node: cur.node.right, level: cur.level + 1 });
    }
  }
  return root;
};

console.log(populateSiblingPointers(node3));
