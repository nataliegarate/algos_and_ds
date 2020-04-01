/*
784. Letter Case Permutation
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.Return a list of all possible strings we could create.
Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
*/

function letter_case_perm(stry) {
  let nums = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  let results = [];
  let tempy = [];
  function helper(temp, str, idx) {
    if (temp.length === str.length) {
      results.push(temp.slice());
    }
    if (str[idx] !== undefined) {
      if (!nums.has(str[idx])) {
        temp.push(str[idx].toLowerCase());
        helper(temp, str, idx + 1);
        temp.pop();
        temp.push(str[idx].toUpperCase());
        !nums.has(str[idx]) ? helper(temp, str, idx + 1) : null;
        temp.pop();
      } else {
        temp.push(str[idx]);
        helper(temp, str, idx + 1);
        temp.pop();
      }
    }
  }
  helper(tempy, stry, 0);
  return results;
}

/*
space complexity: 2 ^ n 
n is length of string 
branch factor of 2 because can only add one upper and lower case to each letter


time complexity:
2 ^ n
# number of 'nodes'
*/

console.log(letter_case_perm("ab"));
