fibMap = {};

function fib(target) {
  if (target === 1 || target === 2) {
    return 1;
  }
  fibMap[target] = fib(target - 1) + fib(target - 2);
  return fibMap[target];
}

// function fib2(target) {
//   let num1 = 1;
//   let num2 = 1;
//   while (target > 2) {
//     let oldNum1 = num1;
//     let oldNum2 = num2;
//     num1 = oldNum2;
//     num2 += oldNum1;
//     target--;
//   }
//   return num2;
// }
