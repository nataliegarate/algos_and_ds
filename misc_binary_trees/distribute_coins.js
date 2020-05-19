class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node5 = new Node(2);
let node2 = new Node(3);
let node3 = new Node(0);
let node4 = new Node(0);

node3.left = node2;
node3.right = node4;
node2.left = node5;

var distributeCoins = function (root) {
  let result = 0;
  function dfs(root, parent) {
    if (root) {
      dfs(root.left, root);
      dfs(root.right, root);

      // number of moves needed until val is 1
      // always will be a postive number because abs

      result += Math.abs(root.val - 1);

      // parent value is itself plus the number of moves to make the val 1
      // thus, parent inherhits the positive excess or negative excess of the node, or its child

      !!parent && (parent.val += root.val - 1);
      // if want to change all node to 1
      // root.val = 1
    }
  }
  dfs(root, null);
  return result;
};

console.log(distributeCoins(node3));
