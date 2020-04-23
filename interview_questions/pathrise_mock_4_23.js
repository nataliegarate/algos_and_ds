function subSum(arr, n) {
  if (n > arr.length || n < 1) {
    return "window too large or small";
  }

  let curSum = 0;
  let maxSum = -Infinity;
  let p1 = 0;
  let p2 = n - 1;
  let prev1Val = 0;
  for (let i = 0; i < n - 1; i++) {
    curSum += arr[i];
  }
  while (p2 < arr.length) {
    curSum = curSum - prev1Val;
    curSum = curSum + arr[p2];
    maxSum = Math.max(curSum, maxSum);
    prev1Val = arr[p1];
    p1++;
    p2++;
  }
  return maxSum;
}
