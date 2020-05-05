class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let reverseKNodes = function (head, k) {
  let cur = head;
  let start = head;
  let end = head;
  let num = 1;
  let beforeHead = null;
  firstHead = null;
  while (cur) {
    let temp = cur.next;
    end = cur;
    if (num === k || cur.next == null) {
      if (!firstHead) {
        firstHead = end;
      }
      reverseList(start, end, beforeHead);
      beforeHead = start;
      start = temp;
      num = 0;
    }
    num++;
    cur = temp;
  }
  return firstHead;
};

function reverseList(start, end, beforeStart) {
  let prev = end.next;
  let cur = start;
  while (cur !== null) {
    console.log(cur.val);
    let temp = cur.next;
    cur.next = prev;
    if (cur === end) {
      if (beforeStart) {
        beforeStart.next = cur;
      }
      return beforeStart;
    }
    prev = cur;
    cur = temp;
  }
}

// let reverseKNodes = function (head, k) {
//     let cur = head;
//     let start = head;
//     let end = head;
//     let num = 1;
//     let beforeHead = null;
//     firstHead = null;
//     while (cur) {
//         let temp = cur.next;
//         end = cur;
//         if (num === k || cur.next == null) {
//             if (!firstHead) {
//                 firstHead = end;
//             }
//             reverseList(start, end, beforeHead);
//             beforeHead = start;
//             start = temp;
//             num = 0;
//         }
//         num++;
//         cur = temp;
//     }
//     return firstHead;
// };

// function reverseList(start, end, beforeStart) {
//     let prev = end.next;
//     let cur = start;
//     while (cur !== null) {
//         console.log(cur.val);
//         let temp = cur.next;
//         cur.next = prev;
//         if (cur === end) {
//             if (beforeStart) {
//                 beforeStart.next = cur;
//             }
//             return beforeStart;
//         }
//         prev = cur;
//         cur = temp;
//     }
// }

console.log(reverseKNodes(node1, 11));
