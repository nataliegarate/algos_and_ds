let numberMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

function phoneNumbers(numbers) {
  let results = [];
  if (numbers.length === 1) {
    return numberMap[numbers];
  }
  let starterArr = numberMap[numbers[0]];
  let otherNumsArr = phoneNumbers(numbers.slice(1, numbers.length));
  for (let i = 0; i < starterArr.length; i++) {
    let current = starterArr[i];
    for (let j = 0; j < otherNumsArr.length; j++) {
      results.push(current + otherNumsArr[j]);
    }
  }
  return results;
}

console.log(phoneNumbers("234"));
