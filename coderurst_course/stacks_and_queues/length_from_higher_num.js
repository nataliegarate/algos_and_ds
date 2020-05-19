// let T = [73, 74, 75, 71, 69, 72, 76, 73]
var dailyTemperatures = function (T) {
  let res = [];
  for (let i = 0; i < T.length; i++) {
    res.push(0);
  }
  let stack = [];
  for (let i = 0; i < T.length; i++) {
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      let resIdx = stack.pop();
      res[resIdx] = i - resIdx;
    }
    stack.push(i);
  }
};

/*Learned: 
-put it in a stack for future calculations for when you find something larger
- basically working backwards once you find something larger- and calcing distance
from each item in stack

*/
