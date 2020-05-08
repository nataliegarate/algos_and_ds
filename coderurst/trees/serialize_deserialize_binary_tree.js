// Serialize / Deserialize Binary Tree
// Nth Highest Number in Binary Search Tree
class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let node1 = new BinaryTreeNode(1);
let node2 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3);
let node4 = new BinaryTreeNode(4);
let node5 = new BinaryTreeNode(5);

node3.left = node2;
node3.right = node4;
node4.right = node5;
node2.left = node1;

let serialize = function (node, stream) {
  if (node === null) {
    stream.push(null);
    return;
  }
  stream.push(node.data);
  serialize(node.left, stream);
  serialize(node.right, stream);
  return stream;
};

let stream = serialize(node3, []);
console.log("I AM STREAM", stream);
let deserialize = function (stream) {
  let idx = 0;
  let head = new BinaryTreeNode(stream[0]);
  function helper(parent) {
    if (stream[idx] === null) {
      idx++;
      return null;
    }
    idx++;
    console.log(" i am index", idx, "i am parent", parent.data);
    let newNodeLeft = new BinaryTreeNode(stream[idx]);
    parent.left = helper(newNodeLeft);
    console.log(" i am index", idx, "i am parent", parent.data);

    let newNodeRight = new BinaryTreeNode(stream[idx]);
    parent.right = helper(newNodeRight);
    return parent;
  }
  helper(head);
  return head;
};

console.log(deserialize(stream));
