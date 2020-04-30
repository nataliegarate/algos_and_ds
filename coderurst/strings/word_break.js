let canSegmentString = function (s, dictionary, curWord = "", idx = 0) {
  let other = false;
  for (let i = idx; i < s.length; i++) {
    curWord += s[i];
    if (dictionary.has(curWord)) {
      if (i + 1 < s.length && other === false) {
        other = canSegmentString(s, dictionary, curWord, i + 1);
      }
      curWord = "";
    }
  }
  return curWord.length === 0 || other;
};

let dict = new Set();
dict.add("hello");
dict.add("hell");
dict.add("on");
dict.add("now");

console.log(canSegmentString("hellonow", dict));
