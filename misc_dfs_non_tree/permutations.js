function permutations(str) {
  let results = [];
  if (str.length === 1) {
    results.push(str);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let rest = str.slice(0, i) + str.slice(i + 1, str.length);
    //it goes down down until it will hit the base case and return an array
    let innerResults = permutations(rest);
    //loops through the permutations that were built before it and adds itself before each one
    for (let j = 0; j < innerResults.length; j++) {
      results.push(curr + innerResults[j]);
    }
  }
  // this will eventually return the final, top-level array with all of the permutations
  return results;
}

console.log(permutations("123"));
