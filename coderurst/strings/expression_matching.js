let regxMatch = function (text, pattern) {
  function checkString(text, pattern, textIdx, patternIdx) {
    if (!text.length) {
      return false;
    }
    if (textIdx > text.length - 1) {
      return true;
    }
    if (text[textIdx] === pattern[patternIdx] || pattern[patternIdx] === ".") {
      if (pattern[patternIdx] === ".") {
        pattern =
          pattern.slice(0, patternIdx) +
          text[textIdx] +
          pattern.slice(patternIdx + 1, pattern.length);
      }
      return checkString(text, pattern, textIdx + 1, patternIdx + 1);
    }
    if (pattern[patternIdx] === "*") {
      if (text[textIdx] !== pattern[patternIdx - 1]) {
        return checkString(text, pattern, textIdx, patternIdx + 1);
      }
      let letter = pattern[patternIdx - 1];
      textIdx += 1;
      while (text[textIdx] === letter) {
        textIdx++;
      }
      return checkString(text, pattern, textIdx, patternIdx + 1);
    }

    if (
      text[textIdx] !== patternIdx[patternIdx] &&
      pattern[patternIdx + 1] === "*"
    ) {
      return checkString(text, pattern, textIdx, patternIdx + 2);
    }

    return false;
  }
  return checkString(text, pattern, 0, 0);
};

console.log("should be true");
// console.log(regxMatch("aabbbbbcdda", "a*bb*cdda"));
// console.log(regxMatch("aabbbbbcdda", "a*bb*.dda"));
console.log(regxMatch("", "aab*e*cd*a"));
// console.log(regxMatch("aabbbbbcdda", "a*b*c*d*a*"));
// console.log(regxMatch("aabbbbbcdda", ".*b*c*d*a*"));
// console.log(regxMatch("aabbbbbcdda", "aabbbbbcdda"));

// console.log("should be false");
// console.log(regxMatch("aabbbbbcdda", "a*b*c*da"));
// console.log(regxMatch("aabbbbbcdda", "aabbbbbcdd"));
