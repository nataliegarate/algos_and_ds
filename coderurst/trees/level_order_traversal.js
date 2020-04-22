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

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;

let levelOrderTraversal = function (root) {
  var result = "";
  let queue = [{ node: root, level: 0 }];
  curLevel = 0;
  while (queue.length > 0) {
    let cur = queue.shift();
    if (curLevel !== cur.level) {
      result += "\n";
      curLevel = cur.level;
    }
    result += cur.node.data + " ";
    if (cur.node.left) {
      queue.push({ node: cur.node.left, level: curLevel + 1 });
    }
    if (cur.node.right) {
      queue.push({ node: cur.node.right, level: curLevel + 1 });
    }
  }
  return result;
};
console.log(levelOrderTraversal(node3));
