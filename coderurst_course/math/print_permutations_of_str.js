// Print All Permutations of a String
let result = []; // Global Variable to retain values from recursion
let permuteString = function (input) {
  //TODO: Write - Your - Code
  typeof input === "string" ? (input = input.split("")) : null;
  if (input.length === 1) {
    return input;
  }
  for (let i = 0; i < input.length; i++) {
    let cur = [input[i]];
    let rest = input.slice(0, i).concat(input.slice(i + 1, input.length));
    let restArr = permuteString(rest);
    for (let j = 0; j < restArr.length; j++) {
      result.push(cur.concat(restArr[j]).join(""));
    }
  }
  return result;
};

console.log(permuteString("bad"));
