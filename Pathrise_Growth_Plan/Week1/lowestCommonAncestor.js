//             6
//         7       8
//     4     9  90    89

// let ancestors = [];

//pass down ancestors in array
//when you hit one of the target nodes, push its ancestors into an array
//when yout hit the other one, spread push its conents into the array
//loop through array and find smallest nunber that occurs TWICE
class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

//        50
//    30     20
//  8   7  5   19

let root = new Node(50);
root.left = new Node(30);
root.left.right = new Node(7);
root.left.left = new Node(8);
root.right = new Node(20);
root.right.right = new Node(19);
root.right.left = new Node(5);

let commonAncestors = [];
function lowestCommonAncestor(node1, node2, root) {
  findNode(node1, root, [], 1);
  findNode(node2, root, [], 1);
  commonAncestors.sort((a, b) => b.level - a.level);
  for (let i = 0; i < commonAncestors.length - 1; i++) {
    if (commonAncestors[i].val === commonAncestors[i + 1].val) {
      return commonAncestors[i].val;
    }
  }
}

function findNode(target, root, ancestors, level) {
  if (root === null) {
    return;
  }
  if (target === root) {
    commonAncestors.push(...ancestors, { val: root, level: level + 1 });
    return;
  } else {
    findNode(
      target,
      root.left,
      [...ancestors, { val: root, level: level + 1 }],
      level + 1
    );
    findNode(
      target,
      root.right,
      [...ancestors, { val: root, level: level + 1 }],
      level + 1
    );
  }
}

// console.log(lowestCommonAncestor(root.left.left, root.right.right, root));
// console.log(lowestCommonAncestor(root.right.right, root.right.left, root));
console.log(lowestCommonAncestor(root.left.right, root.left.left, root));

///step 2: find ones with same value

// then find the one with the lowest level

// searhcing a tree time complexity is height or logn where b is number of nodes
