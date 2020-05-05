class QueueUsingStack {
  //TODO: Write - Your - Code
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(data) {
    this.stack1.unshift(data);
    return data;
  }
  isEmpty() {
    if (this.stack1.length === 0) {
      return true;
    }
    return false;
  }
  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    while (this.stack1.length > 1) {
      this.stack2.unshift(this.stack1.pop());
    }
    let temp = this.stack1[0];
    this.stack1.shift();
    this.stack1 = this.stack2;
    this.stack2 = [];
    return temp;
  }
}

// class QueueUsingStack {
//   //TODO: Write - Your - Code
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }
//   enqueue(data) {
//     this.stack1.push(data);
//     return data;
//   }
//   isEmpty() {
//     if (this.stack1.length === 0) {
//       return true;
//     }
//     return false;
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     while (this.stack1.length > 1) {
//       this.stack2.unshift(this.stack1.pop());
//     }
//     let temp = this.stack1[0];
//     this.stack1.shift();
//     this.stack1 = this.stack2;
//     this.stack2 = [];
//     return temp;
//   }
// }
