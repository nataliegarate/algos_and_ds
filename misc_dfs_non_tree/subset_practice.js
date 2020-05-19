function subset(str) {
  let temp = [];
  let results = [];
  function helper(arr, idx) {
    results.push(temp.slice());
    for (let i = idx; i < arr.length; i++) {
      temp.push(arr[i]);
      helper(arr, i + 1);
      temp.pop();
    }
  }
  helper(str, 0);
  return results;
}

console.log(subset("123"));
