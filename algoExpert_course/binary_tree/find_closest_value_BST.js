class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(50);
let node25 = new Node(25);
let node75 = new Node(75);

root.left = node25;
root.right = node75;

let node20 = new Node(20);
let node30 = new Node(30);

node25.right = node30;
node25.left = node20;

let node80 = new Node(80);
let node70 = new Node(70);

node75.left = node70;
node75.right = node80;

/*
            50
        25       75
     20  30   70   80
  12  24
 */

function findClosestValueInBst(tree, target, closest = Infinity) {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }
  if (tree.value > target) {
    return findClosestValueInBst(tree.left, target, closest);
  } else if (tree.value < target) {
    return findClosestValueInBst(tree.right, target, closest);
  } else {
    return closest;
  }
}

console.log(findClosestValueInBst(root, -50));
