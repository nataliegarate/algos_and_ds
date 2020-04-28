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

/*
                        3
            2                       4
        1       2.5            3.5      5    
*/

let populateSiblingPointers = function (root) {
  let queue = [root];
  let prev = null;
  while (queue.length) {
    let cur = queue.shift();

    if (prev) {
      prev.next = cur;
    }

    prev = cur;
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return root;
};

console.log(populateSiblingPointers(node3));
