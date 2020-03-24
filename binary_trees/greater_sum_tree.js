//study this
// var bstToGst = function (root) {
//     const getSum = (node, sum) => {
//         if (!node) return sum;

//         node.val += getSum(node.right, sum);

//         return getSum(node.left, node.val);
//     };

//     getSum(root, 0);

//     return root;
// };

var bstToGst = function(root) {
  let sum = 0;
  function helper(root) {
    if (root === null) {
      return;
    }
    helper(root.right);
    root.val = root.val + sum;
    sum = root.val;
    helper(root.left);
  }
  helper(root);
  return root;
};
