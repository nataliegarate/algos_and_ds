class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let node11 = new Node(1);
let node22 = new Node(2);
let node33 = new Node(3);
let node44 = new Node(4);

node11.next = node22;
node22.next = node33;
node33.next = node44;

//note change to LinkedList Node

let addIntegers = function (integer1, integer2) {
  //TODO: Write - Your - Code
  let carry = 0;
  prev1 = null;
  prev2 = null;
  prevNew = null;
  let newHead = null;

  while (integer1 || integer2) {
    let newNode;
    //handle if one is null
    if (!integer1) {
      if (carry) {
        prev1.next = new Node(carry);
        carry = 0;
        integer1 = prev1.next;
      } else {
        prevNew.next = integer2;
        break;
      }
    }
    if (!integer2) {
      if (carry) {
        prev2.next = new Node(carry);
        integer2 = prev2.next;
        carry = 0;
      } else {
        prevNew.next = integer1;
        break;
      }
    }

    let sum = integer1.data + integer2.data;
    if (sum < 10) {
      newNode = new Node(sum);
    } else {
      sum = sum.toString();
      carry = +Number(sum[0]);
      newNode = new Node(Number(sum.slice(1, sum.length)));
    }
    prev1 = integer1;
    prev2 = integer2;
    prevNew ? (prevNew.next = newNode) : null;
    prevNew = newNode;
    newHead ? null : (newHead = newNode);
    integer1 = integer1.next;
    integer2 = integer2.next;
  }
  carry ? (prevNew.next = new Node(carry)) : null;
  return newHead.next.next.next;
};

console.log(addIntegers(node1, node11));
