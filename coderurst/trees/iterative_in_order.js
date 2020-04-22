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

let inorderIterative = function (curr) {
  var result = "";
  let stack = [];

  while (stack.length !== 0 || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
      continue;
    }

    result += stack[stack.length - 1].data + "";
    curr = stack[stack.length - 1].right;
    stack.pop();
  }
  return result;
};

console.log(inorderIterative(node3));
