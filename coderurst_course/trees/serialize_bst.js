let serialize = function (node, stream) {
  if (!node) {
    stream.push(null);
    return;
  }
  stream.push(node.data);
  serialize(node.left, stream);
  serialize(node.right, stream);
  return stream;
};

function deserialize(stream) {
  let parent = new BinaryTreeNode(stream[0]);
  let idx = 0;
  function dfs(parent) {
    if (parent.data === null) {
      idx++;
      return null;
    }
    idx++;
    let leftNode = new BinaryTreeNode(stream[idx]);
    parent.left = dfs(leftNode);
    let rightNode = new BinaryTreeNode(stream[idx]);
    parent.right = dfs(rightNode);
    return parent;
  }

  return dfs(parent);
}

// serialize
/*
- DFS though tree
-if node is null, push and return
- push val
- go left
- go right



deserialize

-no parent- just create new node


HELPER (parent):
- if stram[idx] (or parent) = null
    -increase idx to keep stream moving
    - return null
- increase index
- newleftNode = the stream[idx]
- parnet.left =  inside helper function
- rightNode = stream[idx]
- parent.right = helper(new right node)

[100,50,null,null,200,null,null]

*/
