let permuteString = function (input) {
  let results = [];
  processStr = function (str, idx) {
    if (str.length - 1 === idx) {
      results.push(str);
    }
    for (let i = idx; i < str.length; i++) {
      let swapped = swap(str, idx, i);
      processStr(swapped, idx + 1);
    }
  };
  processStr(input, 0);
  return results;
};

function swap(str, j, i) {
  if (j === i) {
    return str;
  }
  let arr = str.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join("");
}

console.log(permuteString("bad"));
