class Node_xml {
  constructor(name) {
    this.node_name = name;
    this.children = [];
  }
}

let str = "<xml><data></data><a><b></b><b><c></c></b></a></xml>";

// <xml>
//   <data></data>
//   <a>
//     <b></b>
//     <b>
//       <c></c>
//     </b>
//   </a>
// </xml>;
let arr = str.split("<");

// console.log(arr);
/*

[ ]


*/

let createXmlTree = function (xml) {
  let stack = getStack(xml);
  return makeTree(stack);
};

function makeTree(stack) {
  let root = new Node_xml(stack[0].data);
  let currentParent = stack.shift();
  let parentNode = root;
  let prev = null;
  let prevNode = null;
  while (stack.length) {
    let cur = stack.shift();
    let newNode = new Node_xml(cur.data);
    if (currentParent.level + 1 === cur.level) {
      parentNode.children.push(newNode);
    } else {
      currentParent = prev;
      parentNode = prevNode;
      parentNode.children.push(newNode);
    }
    prev = cur;
    prevNode = newNode;
  }
  return root.children[1].children[1];
}

function getStack(str) {
  let arr = str.split("<");
  arr = arr.map((word) => word.slice(0, word.length - 1));
  let level = 0;
  let stack = [];
  prevSlash = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] === "/") {
      prevSlash = true;
      continue;
    }
    if (prevSlash) {
      stack.push({ data: arr[i], level: level });
    }
    if (!prevSlash) {
      level += 1;
      stack.push({ data: arr[i], level: level });
    }
    if (arr[i][0] !== "/") {
      prevSlash = false;
    }
  }
  return stack;
}
console.log(createXmlTree(str));
