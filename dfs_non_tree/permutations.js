function permutations(str) {
  let results = [];
  if (str.length === 1) {
    results.push(str);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let rest = str.slice(0, i) + str.slice(i + 1, str.length);
    let innerResults = permutations(rest);
    for (let j = 0; j < innerResults.length; j++) {
      results.push(curr + innerResults[j]);
    }
  }
  return results;
}

console.log(permutations("123"));
