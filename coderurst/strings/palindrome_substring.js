let findAllPalindromeSubstrings = function (input) {
  let palCount = 0;
  for (let j = 0; j < input.length; j++) {
    let p1;
    let p2;
    if (input[j - 1] && input[j + 1] && input[j - 1] === input[j + 1]) {
      p1 = j - 1;
      p2 = j + 1;
      base = input[j - 1] + input[j] + input[j + 1];
      palCount += countPals(input, p1, p2);
    }
    if (input[j + 1] && input[j + 1] === input[j]) {
      p1 = j;
      p2 = j + 1;
      base = input[j] + input[j + 1];
      palCount += countPals(input, p1, p2);
    }
  }
  return palCount;
};

function countPals(string, p1, p2) {
  let count = 0;
  while (string[p1] && string[p2] && string[p1] === string[p2]) {
    count++;
    p1--;
    p2++;
  }
  return count;
}

console.log(findAllPalindromeSubstrings("xxyyxxy"));
