var pruneTree = function (root) {
  function evaluateTreeVals(node, parent, direction) {
    if (node === null) {
      return null;
    }
    let left = evaluateTreeVals(node.left, node, "left");
    let right = evaluateTreeVals(node.right, node, "right");
    if (parent && !left && !right && !node.val) {
      parent[direction] = null;
      return false;
    }
    return true;
  }
  evaluateTreeVals(root, null, null);
  return root;
};

// slightly shorter
// var pruneTree = function (root) {
//     function evaluateTreeVals(node, parent, direction) {
//         if (node === null) {
//             return null;
//         }
//         let left = evaluateTreeVals(node.left, node, "left");
//         let right = evaluateTreeVals(node.right, node, "right");
//         if (parent && !left && !right && !node.val) {
//             parent[direction] = null;
//             return null;
//         }
//         return node;
//     }
//     return evaluateTreeVals(root, null, null);
// };

// works because even a node with val of 0 is not null,
// so if a node had a val 0 but had 1 children
// it would not be deleted

/*

//back track to bottom left

if val is 0 and left is null and right is null

if val is 0 and left is null and right is 0

if val is 0 and right is null and left is 0

if val is 0 and left is 0 and right is 0

we should disconnect from parent , parnet.next = null;

else
    continue

return true or false

*/
