class StackUsingQueue {
  //Write - Your - Code
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(data) {
    this.queue1.unshift(data);
    return data;
  }

  isEmpty() {
    if (this.queue1.length === 0) {
      return true;
    }
    return false;
  }

  pop() {
    if (this.isEmpty(this.queue1)) {
      return -1;
    } else {
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.pop());
      }
      let returnVal = this.queue1[0];
      this.queue1.pop();
      this.queue1 = this.queue2;
      this.queue2 = [];
      return returnVal;
    }
  }
}

// class StackUsingQueue {
//   //Write - Your - Code
//   constructor() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }

//   push(data) {
//     this.queue1.push(data);
//     return data;
//   }

//   isEmpty() {
//     if (this.queue1.length === 0) {
//       return true;
//     }
//     return false;
//   }

//   pop() {
//     if (this.isEmpty(this.queue1)) {
//       return -1;
//     } else {
//       while (this.queue1.length > 1) {
//         this.queue2.push(this.queue1.shift());
//       }
//       let returnVal = this.queue1[0];
//       this.queue1.shift();
//       this.queue1 = this.queue2;
//       this.queue2 = [];
//       return returnVal;
//     }
//   }
// }
