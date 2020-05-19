let evaluate = function (expr) {
  let nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, " "]);
  let curSum = 0;
  let curSign = "+";
  let curNum = "";
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === "/" || expr[i] === "*") {
      let p = i + 1;
      let secondNum = "";
      while (nums.has(Number(expr[p]))) {
        secondNum += expr[p];
        p++;
      }
      curNum = calculateSubSum(curNum, secondNum, expr[i]);
      i = p - 1;
      continue;
    }
    if (expr[i] == "+" || expr[i] === "-") {
      if (curNum && curSign) {
        let strNum = curSign + curNum;
        curSum += Number(strNum);
      }
      curNum = "";
      curSign = expr[i];
      continue;
    }
    if (nums.has(Number(expr[i])) || expr[i] === ".") {
      curNum += expr[i];
    }
  }
  curSum += Number(curNum);
  return curSum;
};

function calculateSubSum(num1, num2, sign) {
  if (sign === "/") {
    return Number(num1) / Number(num2);
  } else if (sign === "*") {
    return Number(num1) * Number(num2);
  }
}

console.log(evaluate("3 +  1.5 / 6"));

//Learned: doing Number() automatically trims white space of a string from beg and end
