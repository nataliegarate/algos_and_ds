class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(20);
let node2 = new Node(18);
let node3 = new Node(57);
let node4 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let swapNthNode = function (head, n) {
  let cur = head;
  let prev = null;
  if (n === 1) {
    return head;
  }
  //   if (n === 2) {
  //     let oldHead = head;
  //     let newHead = head.next;
  //     oldHead.next = newHead.next;
  //     newHead.next = oldHead;
  //     return newHead;
  //   }
  while (n > 1) {
    prev = cur;
    cur = cur.next;
    n--;
  }
  console.log(cur); //18
  console.log(prev); //20

  prev.next = head; //20.next = 20
  let temp = head.next; //18
  head.next = cur.next; //20.next = 57
  cur.next = temp; //18.next = 18

  //??
  //   let temp = head.next;
  //   let tempy = cur.next;
  //   prev.next = head;
  //   head.next = tempy;
  //   cur.next = temp;

  return cur;
};

console.log(swapNthNode(node1, 2));

/*
n=3
[1,2,3,4,5,6]

*/

// let node1 = new Node(20);
// let node2 = new Node(18);
// let node3 = new Node(57);
// let node4 = new Node(2);
