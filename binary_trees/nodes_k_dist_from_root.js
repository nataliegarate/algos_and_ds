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

function k_distance_from_root(root, k) {
  function calcLevels(node, curLevel, returnNodes) {
    if (node === null) {
      return;
    }
    if (curLevel === k) {
      returnNodes.push(node);
      return;
    }

    calcLevels(node.left, curLevel + 1, returnNodes);
    calcLevels(node.right, curLevel + 1, returnNodes);
    return returnNodes;
  }
  return calcLevels(root, 0, []);
}

console.log(k_distance_from_root(node3, 2));
